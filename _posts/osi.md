---
title: OSI
draft: false
weight: 4
date: 2017-03-01T19:02:10-05:00
summary: Osi Katmanlari ve Protokolleri
---

OSI (Open Systems Interconnection) modeli ISO (International Standards Organization) tarafından ortaya çıkarılmış ve iki bilgisayar arasındaki iletişimi tanılamaktadır.

    Bu model herhangi bir donanım veya network tipine özel değildir.

ISO Standartı 7 adet alt göreve dağılmaktadır.Bunlar:


 1.Katman: Fiziksel Katman
------------------------------

Bu katmanda;

- İşlenmemiş bit akışlarının fiizksel bir ortam üzerinden gönderilmesi ve teslim alınması işlemleri yapılmaktadır.

- Fiziksel katman düzeyinde verilerin sayısal olarak (basebant) koaksiyel kablo, UTP ya da fiber-optik üzerinden iletimi yapılır.

- Verilerin elektronik olarak iletimiyle ilgilenir. Veri paketleriyle, frame’lerle, adreslerle ya da verinin ulaşacağı hedef ile ilgilenmez.

`DOCSIS, DSL, Ethernet physical layer, ISDN, RS-232`

 2.Katman: Veri Bağlantısı Katmanı
----------------------------------

 Bu katman 2 control katmanına ayrılır:

 **1-Media Access Control (MAC) katmanı**

 - Ağdaki cihazların ağ ortamına(Örneğin: Kablo) erişiminden ve veri iletim izninden sorumludur.
 - MAC Adresi:
	 - Kullanılan donanımın adresidir. 48bit. AA:BB:CC:DD:EE:FF formatında gosterilir. AA:BB:CC kısmı üretici kimliginin yer aldıgı kısımdır ve unique(essiz)dir. DD:EE:FF kısmı urun kimliginin yer aldıgı kısımdır.
	 - Macchanger,spoof-me-now tooları ile mac adresleri değiştirlebilmektedir.

**2-Logical Link Control (LLC) katmanı**

- Ağ katmanı protokollerinin tanımlanması daha sonra çözülmesi ve hata kontrollerinin sağlanmasından sorumludur.

`Ethernet,Token ring,Wi-fi,Bluetooth,FDDI,SCSI`



3.Katman: Ağ Katmanı
---------------------


 - Verilerin sarılarak iletildiği yani encapsulation yapılan katmandır.
 - Burada veriler frameler yani paketler olarak iletilir.
 - Ağ katmanında veri iletiminin güvenli bir şekilde gerçekleştirileceğinin garantisi verilmez. Ağ katman protokolü güvenli veri iletimi sağlayabilir ama böyle bir zorunluluğu yoktur.

`AppleTalk, ICMP, IPsec, IPv4, IPv6`

**IP(Internet Protocol)**

- Her bir makinanın kendine ait eşsiz bir adresi olsun ve birbirleriyle bu protocol sayesinde erişebilsin diye geliştirilmişbir protokoldür.
- **IP versiyon4** ;
	- ipv4 32 bitten, başka bir ifadeyle sekiz bitlik 4 rakamdan oluşur. Bu rakamlar, 0 ila 255 arasında değişir. IPv4 protokolündeki bir adres 1.0.0.0 ila 255.255.255.255 arasında olabilmektedir
- **IP versiyon6;**
	-  ipv6 ihtiyaçtan doğmuştur. IPv4’ten farklı olarak IPv6, 128 bit genişliğindedir, bu da 2128 adet, başka bir ifadeyle  3 x 1038 adet benzersiz adres demektir.
- **IP Header**

  <img src="/ip-header.png" alt="osi katmanlari">

	- Version: (4bit) Gelen paketin IPv4 veya IPv6 olduğunun yorumlandığı kısım.
	- IHL: (4bit) Yollanan pakete nasıl davranılacağını bildiren kısım. (Acil mi veya bekleyecek mi)
	- Total Length: (16bit) 2^16 = 65535byte (Maksimum Toplam Uzunluk) Paketin uzunluk bilgisinin olduğu kısımdır.
	- Identification: (16bit) Kimlik bilgisi olarak eklenilen kısım. Host tarafından random oluşturulur.
	- Flags: (3bits) Yollanan IP paketinin sağlıklı bir şekilde geçirilmemesi için yeri geldiğinde parçalanıp parçalanmaması hakkında bilgi veren kısımdır.
	- Fragment Offset: (13bits) Paket parçalandıysa parça sırasını belirten kısım.
	- Time to Live: (8bit) Pakete verilen yaşam süresi. Eğer paket sonsuz döngüye girerse paketin kendini yok etmesi için verilen zamanı belirten kısım.
	- Header Checksum: (16bit) Paketteki bilgiler bir fonksiyona sokulup elde edilen değer burada belirtilir. Paketi alan kişi buradaki bilgiyi alır ve paketi fonksiyona sokup tekrar aynı değeri alıp almadığını kontrol ederek paketin bozulup bozulmadığını anlar.
	- Source IP Address: (32bit) Paketi gönderenin ip adresi.
	- Destination IP Address: (32bit) Paketi alacak makinenin ip adresi.

- **ICMP (Internet Control Message Protocol)**
	- TCP/IP'nin düzgün çalışıp çaşımadığını kontrol eden protokoldür.
	- örnek olarak; ICMP echo request, echo reply (ping atmak) veya traceroute

- **ICMP Header**

  <img src="/icmp-header.gif" alt="osi katmanlari">

	- Type: (8bit) Hangi tipteki kontrol mesajının gönderildiğini belirten kısım.
	- Code: (8bit) Tipleri alt dallara ayırıp daha detaylı bilgi veren kısım.
	- Checksum: (16bit) Paketteki bilgiler bir fonksiyona sokulup elde edilen değer burada belirtilir. Paketi alan kişi buradaki bilgiyi alır ve paketi fonksiyona sokup tekrar aynı değeri alıp almadığını kontrol ederek paketin bozulup bozulmadığını anlar.

4.Katman: Taşıma/iletim Katmanı
-------------------------------

- Veri bölümlerinin, bölütleme, alındılama ve çoğullama gibi işlemlerle ağ üzerinde noktalara güvenli bir şekilde iletilmesini sağlayan katmandır.

- **TCP Protokolü (Transport Control Protocol-Ulaşım Kontrol Protokolü):**
	- Bir bilgisayarla haberleşmek istediğiniz zaman bu haberleşme isteğini karşı tarafa bildirilip karşı taraftanda onay alırsa iletisşmin kurulduğu ve bu iletişimin sonlandırılana kadar geçer zaman içerisinde herhangi bir kayıp veya sorun yaşanmamasını garanti etmeye çalışan protokoldür.
	- BTCP protokolünü destekleyen her uç düğümde bir TCP modülü bulunur. Bu modül üst katmandan gelen veri bloklarını 64 KB’ı aşmayan TPDU’lara ayırır veya birleştirir. Ve bu TPDU’ları IP datagramları içinde gönderilmesini sağlar. Bu protokolle her uçta 2 16 adet farklı TSAP adresi tanımlanabilir. Bu adresler, port olarak adlandırılır. Uç düğümün 32 bitlik IP adresi ve 16 bitlik port adresi beraberce kullanıldığında meydana gelen adrese soket numarası denir. TCP bağlantılar soketler üzerinden sağlanır.
	- Three-way Handshake:
		- A => syn + x(sequence)
		- B => syn + ack(x+1) + y(sequence)
		- A => ack(y+1) + z(sequence)
- **TCP Header**

  <img src="/tcp_header.png" alt="osi katmanlari">

	- Sequence Number ve Acknowledgment Number: (32bit) Three-way handshake esnasında iletişim kurarken hangi mesajlara cevap verildiğini takip etmek için kullanılan sayılar. Cevap +1 yapılarak ve yeni bir sayı verilerek geri yollanır. Yeni sayı sequence number'a eklenir. +1 yapılan sayı ancknowledgment number kısmına eklenir.
	- Header Length: (4bit) Tcp header'in uzunluğunun belirtildiği kısımdır.
	- Code Bits: (6bit) Gönderilen paketlerin cinsini belirttiğimiz kısımdır.
	- Window Size: (16bit) Makinelerin karşı tarafa kapasitesini belirtmek için kullandıkları kısım.

- **UDP**
	- TCP'den farklı olarak dosyanın ulaşıp ulaşmadığını kontrol etmez. Daha hızlıdır. (shoot and forget) TCP'de veri 4.pakette yollanmaya başlanırken UDP'de veri 1.paketten itibaren yollanır. Yani UDP TCP'den 4 kat daha hızlıdır.
	- UDP, açık olan portu ve servisi bilip bunlara paket yolladığınızda, ancak o zaman cevap alacağınız bir protokoldür. Eğer buna rağmen cevap gelmiyorsa 2 ihtimal vardır. Ya servis yolladığınız paketi anlamadı, ya da arada firewall var.

- **UDP header**

  <img src="/udp-header.gif" alt="osi katmanlari">

5.Katman: Oturum Katmanı
-------------------------

Ağdaki bilgisayarlar arasında oturum açılması, yönetilmesi ve oturumun sonlandırılması işlemlerinin yapıldığı katmandır.

    TLS, FTP, HTTP, HTTPS, SMTP, SSH, Telnet,RPC, SCP, PAP

6.Katman: Sunum Katmanı
------------------------

İletilen verinin sıkıştırılması/açılması, şifrelenmesi/çözülmesi güvenlik ve kullanıcı doğrulamasının yapılması bu katmanın görevlerindendir.

    xml,html,json


7.Katman: Uygulama Katmanı
---------------------------

Uygulama katmanı, uygulama programlarının ağa erişimi için ihtiyaç duyulan birçok protokolü içerir. Kullanıcının etkileşimde bulunduğu uygulama programları bu katmanla iletişim halindedir.

    NFS, SMB, AFP, FTAM, NCP

OSI Referans Modeli ile ilgili bir animasyon buraya bırakıyorum.

Okuduğunuz için teşekkür ederim :)

[![OSI Referans Model Animation](/photo1.png)](https://www.youtube.com/watch?v=VGGmBhARuiY)
