---
title: Dokku 
draft: false
weight: 4
summary: Dokku Kurulumu
date: 2017-07-03T09:22:21-04:00
---

<p>Dokku, seçebileceğiniz tek bir sunucuda çalışan bir Hizmet olarak genişletilebilir, açık kaynaklı bir platformdur. Daha detaylı anlatım olarak <a href="http://dokku.viewdocs.io/dokku/">http://dokku.viewdocs.io/dokku/</a> inceleyebilirsiniz. Kurulum aşamasında ubuntu server kullanılmıştır. </p>


<p><img src="/dokku.png" alt="{{ page.title }}"></p>

## Dokku indirilmesi

Dokkuyu ubuntu ve debian tabanli serverlar icin asagidaki komut ile indirebilirsiniz.

```
  wget https://raw.githubusercontent.com/dokku/dokku/v0.9.4/bootstrap.sh;
```

<p><img src="/dokku1.png" alt="{{ page.title }}"></p>

```
  sudo DOKKU_TAG=v0.9.4 bash bootstrap.sh
```


<p><img src="/dokku2.png" alt="{{ page.title }}"></p>

## SSH Key

Dokku indirdiginizde sunucunuzun 80 portunda boyle bir form sayfasi gelecek.

<p><img src="/dokku3.png" alt="{{ page.title }}"></p>

<p>Bu ekrandan bilgisayarınızdaki id_rsa.pub dosyanızı girebildiğiniz gibi</p>

```
  dokku ssh-keys:add KEY_NAME path/to/id_rsa.pub
```

<p>kodunu da girebilirsiniz.SSH Keyini de ekledikten sonra bir projenizi deploy edebilirsiniz.</p>