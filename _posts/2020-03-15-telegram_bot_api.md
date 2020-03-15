---
layout: post
title: Как узнать id канала в Телеграм?
categories: [chatbot, programming]
tags: [telegram]
comments: true
---

Захотел создать тематический канал, в который бот будет делать посты. Для этого боту нужно знать его id.
Это, оказывается, не тривиально, так как в интерфейсе он отображается.

Можно узнать с помощью другого бота - [@getmyid_bot](https://smmx.ru/telegram/how-to-use/kak-uznat-id-kanala.html). 

А есть вариант через api telegram, но при условии, что бот добавлен в этот канал:
1. Пишем в канал любое сообщение (потом можно удалить);
2. Делаем GET запрос:
```json
https://api.telegram.org/bot%(BOT_TOKEN)/getUpdates
```  
и получаем ответ: 
```json
{
    "ok": true,
    "result": [
        {
            "update_id": 14725249,
            "channel_post": {
            "message_id": 7,
            "chat": {
                "id": "{ЗДЕСЬ БУДЕТ GROUP ID}",
                "title": "Валюта - Беларусь",
                "username": "by_currency",
                "type": "channel"
            },
            "date": 1584291602,
            "text": "TEST MESSAGE"
            }
        }
    ]
}
```

Вот и все.