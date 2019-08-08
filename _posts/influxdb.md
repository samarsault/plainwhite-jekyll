---
title: InfluxDB
draft: false
weight: 4
date: 2018-08-07T09:40:21-04:00
summary: Ubuntu 16.04 ‘de Influxdb Kurulumu
---

InfluxDB monitoring, iot izleme, real time analizlerde performans ve kolaylık sağlayan bir time series database türüdür. TICK Stack ise InfluxDB etrafında geliştirilmiş ; farklı işletim sistemleri, cihazlar, log formatları gibi değişik tipteki kaynaklardan log/metrik toplayan sistem bütününe verilen isimdir.Tick Stack , Telegraf, Influxdb, Chronograf, and Kapacitor projelerinden oluşmuş bir yapıdır. Influxdata tarafından geliştirilmiştir. Genel hiyaraşisi aşağıdaki gibidir.

<img src="/influxdb.png">

## Influxdb kurulumu

Influxdb shelline erişebilmek için komut :

`influx`

Ayarları görüntülemek için:

`influxd config`

Backup almak için:

`influxb backup /path/to`

Data import etmek için DDL (Data Definition Language) veya DML (Data Manipulation Language) kullanılabilir. Syntax için:[0*] 
import komutu:


`influx -import -path=import.txt -precision=s`

Performans olarak da gözlemlediğim istatistik aşağıdaki gibidir.

`2015/08/21 14:48:01 Processed 3100000 lines. Time elapsed: 56.740578415s. Points per second (PPS): 54634`

### Güvenlik ?

İnfluxdb indiğinde :8083'e bir panel görüntülemektedir. Aynı zamanda :8086 portu ile dışarıdan erişilebilmektedir. Eğer static ip adresine influxd indiriyorsanız alacağınız başlıca güvenlik önlemleri aşağıdaki gibidir.

### SSL

ssl keyini oluşturduktan sonra aşağıdaki configleri uygulayabilirsiniz.

### Auth

`/etc/influxdb/influxdb.conf` içerisinde [http] altında bulunan

```
auth-enabled = true
```

düzenleyip

```
systemctl restart influxdb
```
komutu ile tekrar çalıştırınız. Bu sayede sadece admin user’ları sorgu çalıştırabilir olucaktır. Daha detaylı bilgi için[1*]
Eğer connection sayfasının hiç gelmemesini isterseniz :8086 portuna nginx basic auth yapılabilir.

#### Bazı işe yarıyacak komutları
```
Show Databases
Create Database
Drop Database
Show Measurements
Show Tag Keys
Show Tag Values
Show Retention Policies
Create Retention Policy
Drop Retention Policy
Show Users
Create User
Create Admin User
Drop User
Show Stats
Show Diagnostics
```

#### TEST

Yeni bir db ekleyip üzerine veri ekleyerek performansını test edelim. Bu testleri Curl kullanarak yapabiliriz. Senaryomuzda monitor adında bir database oluşturup içerisine network_traffic adında measurement oluşturup içerisine host,interface,direction, value, fieldlerini gönderelim