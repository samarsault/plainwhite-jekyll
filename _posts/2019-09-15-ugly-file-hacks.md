---
layout: post
title: Немного про стремные хаки, которые работают
categories: [programming, gamedev]
tags: [C++, hack, file]
comments: true
---

В игровом движке [dava.engine](https://github.com/smile4u/dava.engine/), в классе файла под андроидом есть 
[код](https://github.com/smile4u/dava.engine/blob/development/Sources/Internal/FileSystem/File.cpp#L364), 
который 10 раз подряд пытается открыть файл и засыпает на 100 милисекунд, если открыть не получилось. 

```cpp
...
if (isFileExistOnRealFS)
{
    int32 openFileAttempt = 1;
    while (!file && (openFileAttempt++ <= 10))
    {
        if (attributes & File::WRITE)
        {
            file = FileAPI::OpenFile(path, "r+b");
        }
        else
        {
            file = FileAPI::OpenFile(path, "rb");
        }
    
        if (!file)
        {
            Logger::Error("can't open existing file: %s attempt: %d, errno: %s",
                          path.c_str(), openFileAttempt, strerror(errno));
            Thread::Sleep(100);
        }
    } // end while
}
```

Казалось бы, зачем? 
Этот код появился после фикса бага в DLC (``downloadable content``) - только что скаченный файл при попытки 
открытия был недоступен. Эмпирически вывели, что после 8 попыток файл гарантированно открывался. 
Вот и вставили 10 (на всякий случай!) попыток на открытие. 

Стоит отметить, что есть похожий хак в 
[коде `chromium`](https://github.com/adobe/chromium/blob/master/chrome/browser/history/top_sites_database.cc#L46) - попытка удаления файла два раза подряд.

```cpp
if (!file_util::Delete(db_name, false) &&
    !file_util::Delete(db_name, false)) {
  // Try to delete twice. If we can't, fail.
  LOG(ERROR) << "unable to delete old TopSites file";
  return false;
}
```

К сожалению, наш мир не идеален и нужно понимать, что на файлы - это внешняя среда по отношению к программе, 
и с этой средой может твориться все что угодно - файлы могут быть использованы другими процессами 
(вирусы, антивирусы, системы контроля версий и прочие сканеры), баги по работе с файлами в 
[других приложениях](https://doublecmd.sourceforge.io/forum/viewtopic.php?t=2398) или же нас даже может [подвести оборудование](https://habr.com/ru/post/401681/).

Если с кодом в `chromium` это выглядит как простое решение достаточно сложной проблемы, то в коде `dava.engine` 
это скорее хак. Проблема, очевидно, есть и с ней стоило бы разобраться. 
Почему временная задержка помогает? Может сообщение о завершении скачки файла пришло раньше, 
чем оно на самом деле произошло? Файловые дескрипторы закончились? 
Сторонние процессы лочат доступ? 

К сожалению, узнать это будет уже сложно. Код ведь работает, а если работает - не трожь. 