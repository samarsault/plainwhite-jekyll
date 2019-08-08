---
title: DNS
draft: false
weight: 4
date: 2017-03-04T16:00:49-05:00
summary: DNS ve Dig
---

Domainlerin eşleşen IP'lerini bulmamızı sağlayan sunuculardır.

- Eğer DNS sunucusu, sorduğumuz domain'in IP'sine sahip değilse, içerisinde statik olarak kazılı olan ROOT DNS sunucularına sorar.
- DNS IP'yi elde ettiğinde bir daha aramamak için IP adresini cache içerisinde istediği domainden sorumlu sunucunun belirlediği süre boyunca saklar.

**DNS Kayıt Türleri**

- A kaydı:
	- İstenilen domain'in IP adresini kaydeden kayıt türüdür..
- MX kaydı:
	-  Her DNS sunucusu bir ya da birden fazla zone(alan)'dan sorumludur. O alan adından sorumlu mail sunucuların bulunduğu kayıt türüdür.
- CNAME kaydı:
	- Ağ kayıtlarına işaret eden takma adları(alias) tutan kayıt türüdür.
- NS kaydı:
	- Alan adına ait authoritative DNS sunucusunun kaydının tutulduğu türdür.
- PTR kaydı:
	- IP adresi verip domain sorduğumuzda geri dönen kayıt türüdür. (Reverse DNS)
- SOA kaydı:
	- Zone'un kendisine dair ve master dns sunucusuna dair bilgilerin bulunduğu kayıt türüdür.
- TXT kaydı:
	- Opsiyonel olarak bilgi tutulmak istendiğinde kullanılan kayıt türüdür.


DNS Footprinting
---------------

Dig
-------

Dns sorgularını gerçekleştirmemizi sağlayan bir linux tooludur.Windows işletim sistemlerinde bu işlem nslookup ile de yapılmaktadır.

**1)A Kaydı Sorgulanması**

 <code>dig A -domainAdresi-</code>

şeklinde sorgulayabilirsiniz.


**2)Nameserver'ların Sorgulanması**

  <code> dig NS -domainAdresi- </code>

**3)Mail Sunucularının Sorgulanması**

  <code> dig MX -domainAdresi- </code>

**4)CNAME Kaydının Sorgulanması**

  <code> dig CNAME -domainAdresi- </code>

**5)PTR Kaydının Sorgulanması**

  <code> dig PTR -domainAdresi- </code>

**6)TXT Kaydının Sorgulanması**

  <code> dig TXT -domainAdresi-  </code>

**7)SOA Kaydının Sorgulanması**

  <code> dig SOA -domainAdresi- </code>

**8)Bütün Kayıtları Listelenmesi**

  <code> dig any -domainAdresi- </code>

**9)Eskiden Kullanılan Kayıtları Listelenmesi**


  <code>  dig -x -domainAdresi- +short </code>

**10)Txt Dosyasındaki İplerin Dns Kayıtlarının Listelenmesi**


  <code>  dig any -f -dosya adi-  </code>

**11)Başka Bir Dns Üzerinden Kayıtların Listelenmesi**

  <code>  dig MX @8.8.8.8 -domainAdresi- </code>
