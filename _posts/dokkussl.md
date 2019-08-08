---
title: Dokku SSL
draft: false
weight: 4
summary: Dokku SSL Konfigurasyonu
date: 2017-07-05T22:40:21-04:00
---


SSL Sertifikası eklemek için çeşitli yöntem olmakla beraber `https://github.com/dokku/dokku-letsencrypt `adresindeki plugini de kulanabilirsiniz.

Dokku sunucusuna plugini aşağıdaki şekilde kurabilirsiniz.

```
  sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
```

<p><img src="/ssl1.png" alt="{{ page.title }}"></p>
Bu plugin içerisinde dokku letsencrypt:help yazdığınız kullanabileceğiniz komutları göstermektedir. Biz sertifika eklemek için

```
  dokku config:set --no-restart myapp DOKKU_LETSENCRYPT_EMAIL=your@email.tld
  dokku letsencrypt app-name
```

<p><img src="/ssl2.png" alt="{{ page.title }}"></p>
bu komutu kullanacağız. EMAİL adresini önem taşımaktadır ve zorunludur. SSL sertifikasını sorgulamak için

```
  dokku certs:report
```
<p><img src="/ssl3.png" alt="{{ page.title }}"></p>
 komudunu kullanabilirsiniz.
