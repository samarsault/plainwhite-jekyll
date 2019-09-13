---
layout: post
title: Как избавится от выдачи qaru.site?
categories: [general, web]
tags: [search, blocking]
comments: true
---

Очень бесит в поисковой выдаче ресурс qaru.site, который, по факту, является автоматически 
переведенными постами со [stackoverflow.com](stackoverflow.com).
Благо добрые люди написали блокировщики поисковой выдачи. Сначала попробовал [блокировщик 
от гугла](https://chrome.google.com/webstore/detail/personal-blocklist-by-goo/nolijncfnkgaikbjbdaogikpmpbdcdef?hl=ru), 
но оказалось, что он уже мертв).
 
Но нашелся более удачный вариант [Google Hit Hider](http://www.jeffersonscher.com/gm/google-hit-hider/index.php), 
который работает, кстати, не только для гугл поиска.

Я же посоветую [скачать Violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag?hl=en) 
(потому что он опенсорсный) и установить непосредственно [скрипт для блокировки](https://openuserjs.org/scripts/jscher2000/Google_Hit_Hider_by_Domain_%28Search_Filter_Block_Sites%29).

И все работает!