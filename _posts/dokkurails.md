---
title: Dokku RoR
draft: false
weight: 4
summary: Dokku'ya Ruby on Rails Projesi Deploy Etme 
date: 2017-07-03T09:40:22-04:00
---


Öncelikle dokku kurulu olan serverimıza dokku projemizi oluşturalım.

```
  dokku apps:create <app-name>
```

<p><img src="/rails1.png" alt="{{ page.title }}"></p>

Sonrasında localimize

```
  git clone https://github.com/kevsersrca/ruby-rails-sample.git
```

<p><img src="/rails2.png" alt="{{ page.title }}"></p>
klonlayalım.Rails projesi için gerekli olan postgres  pluginini dokku serverimiza ekleyelim.

```
    sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
    dokku postgres:create <db-name>
```
<p><img src="/rails3.png" alt="{{ page.title }}"></p>
Şimdi uygulamamız ile veritabanımızı linklememiz gerekmektedir.

```
    dokku postgres:link db-name app-name
```

<p><img src="/rails4.png" alt="{{ page.title }}"></p>
Artık deploy edebiliriz projemizi. Projemiz içerisine girip deploy edebiliriz.

```
    cd ruby-rails-sample
    git remote add dokku dokku@<ServerOrDomainAdress>:<appname>
    git push dokku
```

<p><img src="/rails5.png" alt="{{ page.title }}"></p>

Ve deploy edildi.(bknz:http://simple-rails.dokkum.me)

<p><img src="/rails6.png" alt="{{ page.title }}"></p>

Subdomaini simple-rails. ile başlamasını istemezseniz

```
  dokku domains:set app-name domain-address
```

şeklinde değiştirebilirsiniz.
