---
layout: post
title: Почему перестало компилироваться? Особенности dllexport
categories: [programming]
tags: [C++, visual studio, dll]
comments: true
---

Имеется следующий код:
``` cpp
class MyTrickyClass
{
public:
    MyTrickyClass() = default;
    
    // public interface ... 
    
private:
    std::map<int, std::unique_ptr<SomeData>> myTrickyMap;
}
```

Самый внимательный уже понимает к чему движется дело.

Используется класс очень просто, для упрощения предпложим как-то так:
``` cpp
MyTrickyClass &GetTrickyClass()
{
    static MyTrickyClass instance;
    return instance;
}
```
`(синглетоны - это плохо, не надо так)`

Вышеописанный код замечательно компилируется и даже корректно работает. 
Но неожиданно понадобилось этот класс перенести в динамическую библиотеку.
Код приобрел следующий вид:

``` cpp
#ifdef MY_TRICKY_EXPORTS
    #define MY_TRICKY_API __declspec(dllexport)
#else
    #define MY_TRICKY_API __declspec(dllimport)
#endif

class MY_TRICKY_API MyTrickyClass
{
public:
    MyTrickyClass() = default;
    
    // public interface ... 
    
private:
    std::map<int, std::unique_ptr<SomeData>> myTrickyMap;
}
```
Все уже поняли, что говорим под Windows? :)

Библиотека собирается с дефайном ``MY_TRICKY_EXPORTS``, поэтому используется аттрибут ``__declspec(dllexport)``, а код
использующий этот класс  ``__declspec(dllimport)``. Это все нужно для указания линкеру как правильно линковать и где искать символы.

Компилируем... и получаем следующую ошибку:

```C2280 'std::pair::pair(const std::pair &)': attempting to reference a deleted function```

Ага, компилятор пытается сгенерировать конструктор копирования пары. Хм, зачем? 
Ему нужно сгенерировать конструктор копирования ``MyTrickyClass``, и, соответственно, конструктор копирования мапы, 
который использует этот конструктор.
Но почему использование директивы  ``__declspec(dllexport)`` заставило компилятор генерировать ``MyTrickyClass(const MyTrickyClass &other)``?
 
Оказывается, это даже логично.
Обычно, компилятор знает какие дефолтные конструкторы и функции класса используются.
Когда класс не экспортировался, компилятору нет нужды генерировать конструктор копирования, так как он явно нигде не используется.
А вот если мы начинаем экспорировать, компилятор не знает ЧТО может использоваться в *другом коде*, поэтому генерирует все дефолтные 
методы, в том числе и конструктор копирования и оператор присваивания. 

Как сообщить компилятору, что эти методы не нужны? И даже запрещены, так как у ``std::unique_ptr`` конструктор копирования и оператор 
присваивания удалены. 
Все просто - так же удалим дефолтные методы (говорим, конечно же, про C++11):

``` cpp
class MyTrickyClass
{
public:
    MyTrickyClass() = default;

    MyTrickyClass(const MyTrickyClass &other) = delete;
    MyTrickyClass& operator=(const MyTrickyClass&) = delete;
    
    // public interface ... 
    
private:
    std::map<int, std::unique_ptr<SomeData>> myTrickyMap;
}
```
  
Profit!