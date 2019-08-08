---
title: Dokku WP
draft: false
weight: 4
summary: Dokku Wordpress Deploy Etme
date: 2017-07-03T09:40:21-04:00
---

Dokku üzerine Wordpress projelerimizi deploy edip ve ayarlarını yapacağız.Öncelikle kurulum için gerekli mysql eklentisini kuralım.

## MYSQL Eklentisi

Dokkuya mysql eklentisini kurmak için `https://github.com/dokku/dokku-mysql` bu repoyu aşağıdaki adımlarla kuruyoruz. Dokku bulunan server içerisinde:


```
  cd /var/lib/dokku/plugins

  git clone https://github.com/dokku/dokku-mysql mysql

  chmod +x mysql/install mysql/commands
  
  dokku plugin:install
```

<p><img src="/wp1.png" alt="{{ page.title }}"></p>

## WORDPRESS Kurulumu

Daha önceden repo edindiğim wordpress reposunu kendi localimize wp dosyası olarak çekiyoruz.

```
git clone https://github.com/kevsersrca/WordPress.git wp
```


Daha sonrasında bu wordpress uygulamımızı dokkuya deploy etmemiz kaldı. Direk deploy edebileceğiniz gibi dokku tarafında proje oluşturduktan sonrada deploy edebilirsiniz


```
cd wp

git remote add dokku dokku@wp.me:wp
```

wp.me dokku makinesinin adresidir.<br>
:wp ise proje ismidir. varsa oraya deploy ettiği gibi yoksa yeni proje oluşturur

```
git push dokku master
```


<blockquote>Dikkat edilmesi gereken bir konu da “the remote username *must* be dokku or pushes will fail” yani username olarak dokkudan başka username almamaktadır. Karşılaştığım bir hata olduğu için belirtiyorum
</blockquote>

Dokku, Heroku Buildpackleri sayesinde WordPress’in bir PHP uygulaması olduğunu anlayıp dokkuya deploy edecektir.

## Database Ayaları

Wordpress kurulduktan sonra bir mysql tablosu oluşturup config etmemiz gerekiyor. Öncelikle databasemizi oluşturalım

```
dokku mysql:create <name>
```

<p><img src="/wp2.png" alt="{{ page.title }}"></p>

şeklinde database oluşturabilirsiniz.Database oluşturduktan sonra database ve app arasında linki eklememiz gerekmektedir.

```
dokku mysql:link <name> <app>
```


şeklinde linki ekledikten sonra kuruluma geçebiliriz.

<p><img src="/wp3.png" alt="{{ page.title }}"></p>

Buradan sonra gönderilen ip adresine gittiğimizde wordpress kurulum sayfası ile karşılacağız.
<p><img src="/wp4.png" alt="{{ page.title }}"></p>
Wordpress ekranındaki istenilen bilgileri girebilmek için hazır bir plugin olan `https://github.com/musicglue/dokku-user-env-compile.git` kullanabileceğiniz gibi kendiniz de bikaç karıştırarak bilgileri dokku üzerinden bulabilirsiniz.

```
dokku mysql:info proje-ismi
```

Bilgilerin bulunduğu pathleri görebilirsiniz.
<p><img src="/wp5.png" alt="{{ page.title }}"></p>
Mysql dsn karşısındaki config ile dtabase kayıtlarınızı görebilirsiniz. Database root useri için ROOTPASSWORD kullanabilirsiniz.
Wordpress kurarken dikkat etmeniz gereken bir dikkat daha localhost’a kurmuyorsunuz. Dokku üzerinde her projenin bir ip adresi olduğundan

```
docker inspect container-id
```

<p><img src="/wp6.png" alt="{{ page.title }}"></p>
komtu ile  containerin içerisindeki network settings bölümünden ip adresini wordpresse girdiğinizde kurulumu gerçekleştirebilirsiniz.
<p><img src="/wp7.png" alt="{{ page.title }}"></p>
Son olarak projenizin içerisinde de komut çalıştırabiliyorsunuz.
<p><img src="/wp8.png" alt="{{ page.title }}"></p>
Gerisi size kalmış. Herhangi bir sorunuzda yardımcı olmaya çalşırım. Sağlıcakla :)
