---
layout: post
title: Почему std::max не всегда хорош?
categories: [programming]
tags: [c++]
comments: true
---

В очередной раз решал задачу на [leetcode.com](leetcode.com) и снова столкнулся с тем, что не могу добиться максимальной скорости алгоритма - результат выше больше чем у 80% пользователей. При этом решение, которое по мнению leetcode оптимальнее более чем 95% решений пользователей, аналогично моему.

**Как так?**<br/>
Точный ответ я не дам. Скорей всего, это зависит от нагрузки на сервера\версии С++\компилятора\прямоты рук и фазы луны. Кто знает, буду рад услышать.

Но пару эксперементов я провел, и нашел кое-что интересное. Вот исходный код [решения задачи](https://leetcode.com/problems/maximum-subarray/):
```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        const int N = nums.size();
        int prev = nums[0];
        int maximum = prev;
        for (int i = 1; i < N; i++)
        {
            prev = max(prev+nums[i], nums[i]);
            maximum = max(prev, maximum);
        }
        return maximum;
    }
};
```

Я добился заветных 97% (жыве!) процентов, со следующим изменением:
```cpp
#include <vector>

int mymax(int a, int b) {
    if (a > b) {
        return a;
    }
    return b;
}

#define max mymax

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        const int N = nums.size();
        int prev = nums[0];
        int maximum = prev;
        for (int i = 1; i < N; i++)
        {
            prev = max(prev+nums[i], nums[i]);
            maximum = max(prev, maximum);
        }
        return maximum;
    }
};
```

Как замена std::max могла так сильно повлиять в сторону ухудшения производительности?<br/>
Достаточно взглянуть на сигнатуру функции максимума из стандарной библиотеки, чтобы понять что с ней не так:

```cpp
template< class T >
const T& max( const T& a, const T& b );
```

Она работает c ссылками!

Вот сравнение дисассемблерного кода двух этих функций. Они отличаются 2 функциями mov, которые, по факту, делают разыменование:
```nasm
mymax(int, int):
        push    rbp     #
        mov     rbp, rsp  #,
        mov     DWORD PTR [rbp-4], edi    # a, a
        mov     DWORD PTR [rbp-8], esi    # b, b
        mov     eax, DWORD PTR [rbp-4]    # tmp84, a
        cmp     eax, DWORD PTR [rbp-8]    # tmp84, b
        jle     .L2       #,
        mov     eax, DWORD PTR [rbp-4]    # _1, a
        jmp     .L3       #
.L2:
        mov     eax, DWORD PTR [rbp-8]    # _1, b
.L3:
        pop     rbp       #
        ret
int const& std::max<int>(int const&, int const&):
        push    rbp     #
        mov     rbp, rsp  #,
        mov     QWORD PTR [rbp-8], rdi    # __a, __a
        mov     QWORD PTR [rbp-16], rsi   # __b, __b
        mov     rax, QWORD PTR [rbp-8]    # tmp86, __a
        mov     edx, DWORD PTR [rax]      # _1, *__a_5(D)
        mov     rax, QWORD PTR [rbp-16]   # tmp87, __b
        mov     eax, DWORD PTR [rax]      # _2, *__b_6(D)
        cmp     edx, eax  # _1, _2
        jge     .L5       #,
        mov     rax, QWORD PTR [rbp-16]   # _3, __b
        jmp     .L6       #
.L5:
        mov     rax, QWORD PTR [rbp-8]    # _3, __a
.L6:
        pop     rbp       #
        ret
```

Учитывая, что алгоритм практически состоит из вызовов функции max, это можно хорошо сказаться на производительности при большом входном массиве.

**Заключение**<br/>
Всегда стоит проверять сигнатуру вызываемых функций, даже если это что-то настолько простое и знакомое, как функция определения максимума. И, если это разумно, написать свою более подходяющую в конкретном месте реализацию (go-way).
