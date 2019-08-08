---
title: Dokku Domain
draft: false
weight: 4
summary: Dokku Domain Konfigurasyonu
date: 2017-07-03T09:40:21-04:00
---

Dokku içerisinde domain ayarlarınızı yapmak gayet rahat. Bir projenize domain eklemek istediğinizde ekleyip , sonrasında set edebilirsiniz. Domaininiz global bir domain ise

```
  dokku domains:add-global <domain-name>
```

şeklinde ekleyebilirsiniz. Daha sonra aşağıdaki gibi set etmeniz gerekmektedir.

```
  dokku domains:set appname mydomain.com  *.mydomain.com
```

Set ettikten sonra normalde ip şeklinde görünen projeniz domain şeklide eklenmiş olacaktır. Fakat localde projeniz içerisindeki remote adresini aşağıdaki şekilde değiştirmeniz gerekebilir.

```
    git remote -v   
    git remote rm remotename  
    git remote add dokku dokku@yourdomain:yourappname
```

Local domain eklemek istiyorusanız dokku üzerindeki

```
    /etc/hosts
```


dosyasına projenin ip adresini eklemeniz gerekmektedir.Projenin network ayalarını ve daha fazlasını

```
    docker inspect container-id
```

ile sorgulayabilirsiniz.

## Subdomain Ayarları

Subdomain set etmeden önce DNS ayarlarınızı subdomainlere izinli olduğunu kontrol etmeniz gerekmektedir. CNAME record host kısmına * veya *. koymanız yeterlidir. Bu ayardan sonra dokkudaki bütün subdomainler domaine yönlenecektir.
Bunun için nginxe config eklemeniz gerekmektedir.
<code>/etc/nginx/conf.d/00-default-vhost.conf</code> dosyası oluşturup

```
    server {
      listen 80 default_server;
      listen [::]:80 default_server;

      server_name _;
      return 410;
      log_not_found off;
    }
```


eklediğinizde subdomain set etmediğiniz urllere 402 hatası verecektir.
