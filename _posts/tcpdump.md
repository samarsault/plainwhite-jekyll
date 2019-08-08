---
title: TCPDUMP
draft: false
weight: 4
date: 2017-02-28T07:21:11-05:00
summary: TCPDUMP
---

Tcpdump Linux/UNIX sistemlerde paket yakalama ve analiz aracıdır.Tcpdump pcap paket yakalama kütüphanesini(libpcap) kullanır ve ağ arabiriminden geçen paketleri (TCP/IP protokollerini) kaydedip, pcap destekli herhangi bir araç kullanarak kaydedilmiş paketleri okuma işine yarar

<p style="text-align: right;">Tcpdump kullanılabilmesi için (linux sistemlerde) root yetkisine sahip olunmalıdır.</p>

Özellikle ağ üzerinden yakaladığı paketleri pcap formatındaki sniffer araçlarının okuyabileceği formatta kaydetme özelliği, yoğun trafiğe sahip ağlarda sorunsuz paket yakalama becerisi tcpdump’ı ağ güvenliği yöneticilerinin vazgeçilmezi kılmaktadır.

<p style="text-align: right;">Windows bilgisayar sistemleri için tcpdump benzeri olan Windump aracı kullanabilirsiniz.</p>



<strong>Promiscious mod:</strong>Makinenin kendi paketleri haricindeki (hedef makinedeki) paketleri alabilmesi için geçilen moddur.

Tcpdump komutu çalıştırıldığında ağ arabirimini otomatik olarak promiscious moda geçirir ve tcpdump'ı sonlandırdığınızda yine ağ arabirimini promiscous moddan çıkarır.

Arabirimin prosmicous modda olup olmadığı ifconfig komutu çıktısında gözükecektir.

<center><strong>KOMUTLARI</strong></center>
<br>
<strong><code>tcpdump -h</code></strong>
<br>
Tcpdump ve libpcap versiyonunu ve kullanımı hakkında bilgi verir.
<br>

<strong><code>tcpdump</code></strong>
<br>
Ağ trafiğini analiz eder.
<br>

<strong><code>tcpdump -t</code></strong>
<br>
Timestampsız olarak ağ trafiğini analiz eder.
<br>

<strong><code>tcpdump -D </code></strong>
<br>
Ağ üzerinde dinlenebilecek bütün arayüzleri listeler.
<br>

<strong><code>tcpdump -i any</code></strong>
<br>
Herhangi bir porttan gelen arayüzü dinler ve analiz eder.
<br>

<strong><code>tcpdump -i +arayüz adı+</code></strong>
<br>
Belirtilen arayüzü dinler ve analiz eder.
<br>

<strong><code>tcpdump –c +sayı+</code></strong>
<br>
Belirtilen sayıda paket içeriğini listeler.
<br>

<strong><code>tcpdump –n port +port numarası+</code></strong>
<br>
Hedef veya kaynak portu belirtilen port olan paketleri listeler.
<br>

<strong><code> tcpdump –v icmp </code></strong>
<br>
ICMP paketlerini listeler.
<br>

<strong><code>tcpdump –v udp </code></strong>
<br>
UDP paketlerini listeler.
<br>

<strong><code>tcpdump –v tcp </code></strong>
<br>
TCP paketlerini listeler.
<br>

<strong><code>tcpdump –w “dosya ismi”</code></strong>
<br>
Listelenen paketleri bir dosya halinde kaydeder. Bu kaydettiğimiz dosyayı ‘Wireshark’ gibi programlarla da açarak inceleyebiliriz.
<br>

<strong><code> tcpdump –r “dosya ismi” </code></strong>
<br>
Dosya halinde olan bir paket listesini açar.
<br>
