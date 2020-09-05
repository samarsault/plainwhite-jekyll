---
layout: post
title: Киноляп в сериале "American gods"
categories: [offtopic, programming]
tags: [film, goof, c++]
comments: true
---

Недавно стал смотреть "Американские боги" - сериал по одноименной книге Нила Геймана.
Сюжет достаточно интересен, поэтому советую прочитать\посмотреть.

Как часто бывает, в кинeматографе достаточно забавно показывают программистов - то командой ipconfig [пробивают адрес](https://www.youtube.com/watch?v=ZmhMsa015sQ), то обезвреживают бомбу [через excel](https://hsto.org/getpro/habr/post_images/0f7/aae/4cf/0f7aae4cf6b59ed6ba1a5c1244e80185.jpg). Найденный киноляп не такой бестолковый, так как нужно все-таки кое-что что знать из программирования.

Интересно, получится ли тебе понять в чем дело?

Вот 3 кадра из фильма, которые сделаны в рамках одного эпизода 4 серии 2 сезона.
Этого достаточно, чтобы понять в чем дело.

![Играем в Tetris на GameBoy]({{site.baseurl}}/assets/images/american-gods/gameboy.png)

![Работаем на компьютере]({{site.baseurl}}/assets/images/american-gods/macintosh.png)

![Пишем код]({{site.baseurl}}/assets/images/american-gods/cpp11.png)

Это хронологический ляп. Поясню:
1. Gameboy в США [появился в августе 1989 году](https://ru.wikipedia.org/wiki/Game_Boy)
2. Macintosh Classic стал продаваться [15 октября 1990 году](https://ru.wikipedia.org/wiki/Macintosh_Classic)

Значит, действия серии происходят примерно в 1990-1994 годах.

А вот скриншот с кодом уже заставляет задуматься:
1. Это С++, так как используется for-range, auto, std::unique_ptr и boost::thread;
2. [for-range](https://en.cppreference.com/w/cpp/language/range-for), [auto](https://en.cppreference.com/w/cpp/language/auto) и [std::unique_ptr](https://ru.cppreference.com/w/cpp/memory/unique_ptr) - это часть стандарта С++11, неожиданно, 2011 года выпуска;
3. Первая сырая версия boost [выпущена 1 сентября 1999 года](https://www.boost.org/users/history/);
4. Версия boost 1.25.0, в которой стала доступна библиотека для работы с потоками thread, [выпущеа 1 октября 2001 года](https://www.boost.org/users/history/).

Соответственно, главный герой эпизода не мог использовать современный стандарт и библиотеки в то время :)

