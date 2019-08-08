---
title: Laravel Horizon
draft: false
weight: 4
date: 2017-07-30T09:40:21-04:00
summary: Laravel Horizon Kurulumu ve Konfigurasyonu
---

<p>Horizon varolan uygulamanıza doğrudan composer ile kurulan tek sayfalık bir Vue uygulamasıdır. Redis queue’leri için güzel bir panel sağlamaktadır.</p>

<h2 id="redis-kurulumu">Redis Kurulumu</h2>

<p>Öncelikle redis kurmanız veya varsa .env dosyasına bilgilerini girmeniz gerekmektedir.</p>

<p><img src="/horizon5.png" alt="laravel horizon"></p>
<p>Redis via brew</p>


```
  brew install brew
```


<p>Laravel projesine redisi dahil etmek için (ör:predis)</p>

```
  composer require predis/predis
```


<p>Daha fazla bilgi için : (<a href="https://redis.io/documentation">https://redis.io/documentation</a>)</p>



<h2 id="horizon-kurulumu">Horizon Kurulumu</h2>

<p>Laravel Horizonu projenize dahil etmek için:</p>

```
  composer require laravel/horizon
```


<p>Daha sonrasında config/app.php kısmına provider’ı ekliyoruz:</p>

```
  Laravel\Horizon\HorizonServiceProvider::class,
```



```
  composer dump-autoload
  php artisan vendor:publish
```

<p>komutlarından sonra önceden kullandığınız queue:work komutu yerine </p>

```
  php artisan horizon
```


<p>komutunu kullanmanız yeterlidir. Daha sonrasında sitenizin /horizon yolunda sizi karşılayacaktır.</p>

<h3 id="config">Konfigurasyon</h3>

<p>config/horizon.php üzerinden gerekli ayarlamaları yapılabilmektedir.</p>

```

'environments' => [
   'production' => [
       'supervisor-1' => [
           'connection' => 'redis',
           'queue' => ['default'],
           'balance' => 'auto',
           'processes' => 10,
           'tries' => 3,
       ],
   ],

'waits' => [
    'redis:default' => 60,
],

```

<h3 id="bazı-komutları">Bazı Komutları</h3>

```
php artisan horizon:pause =&gt; Duraklatma <br>
php artisan horizon:contiune =&gt; Devam Etme <br>
php artisan horizon:terminate =&gt; Horizon’un şu anda işlediği tüm işler tamamlanacak ve Horizon’dan çıkacak
```




<h2 id="özellikleri">Özellikleri</h2>



<h3 id="failed-jobs">Failed Jobs</h3>
<p><img src="/horizon1.png" alt="laravel horizon"></p>
<p>Laravel Horizon, başarısız işleri tekrar denemeyi (queue:retry komutunu), hatta başarısız işleri aramayı ve belirli işleri tekrar denemeyi kolaylaştırmaktadır.</p>



<h3 id="tag-monitoring">Tag Monitoring</h3>
<p><img src="/horizon2.png" alt="laravel horizon"></p>
<p>Laravel Horizon ile jobslarınızı listeleyebilir ve bunları basit bir dashboard izleyebilirsiniz. </p>



<h3 id="metrics">Metrics</h3>
<p><img src="/horizon4.png" alt="laravel horizon"></p>
<p>Queues ve Jobs için gösterge tablosu metrikleriyle sıranızın real time olarak ne yaptığını görmemize olanak sağlar. </p>



<h3 id="balancing">Balancing</h3>
<p><img src="/horizon3.png" alt="{{ page.title }}"></p>
<p>Horizon, herhangi bir  workers mevcut olup olmadığını tespit edip bunları işe yarayan kuyruklara (queues) taşıyabilir.</p>
