---
title: PDO 
draft: false
weight: 4
date: 2017-02-26T14:27:28-05:00
summary: PDO Nedir?
---

<p><strong>PDO</strong> (<strong>PHP Data Objects / PHP Veri Objeleri</strong>) özetle; veritabanına erişimi sağlayan bir arayüz.</p>


PDO ile:
<ol>
    <li>Connect(Veritabanı Bağlantısı)</li>
    <li>Insert(Ekleme)</li>
    <li>Select(Seçme)</li>
    <li>Delete(Silme)</li>
    <li>Update(Güncelleme)</li>
    <li>Error Info(Hata Mesajı Yakalama)</li>
</ol>
işlemlerini nasıl yapacağımızı paylaşacağım sizinle.

(Örnekler phpmyadmin üzerinden denenmiştir.)

<p style="text-align: center;"><strong>PDO MYSQL CONNECT(VERİTABANI BAĞLANTISI)</strong></p>

```

<?php
    $dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
?>;
```

Buradaki;

dbname=oluşturduğunuz veritabanının ismi
$user=phpmyadmin'e giriş yaptığınız kullanıcı adi
$pass=phpmyadmin'e giriş yaptığınız şifre'dir.

Bağlantıda hataların açık görünmesi açısından try-catch yapısını kullanabiliriz.

```

<?php

try
{
    $dbh = new PDO('mysql:host=localhost;dbname=Blog', "root", "");
    echo "Bağlantı Hazır!";
}
catch (PDOException $e)
{
    echo $e;
}

```

Bağlantıyı tamamladıktan sonra echo'ları silebilirsiniz :)

<p style="text-align: center;"><strong>PDO INSERT (EKLEME)</strong></p>

Veritabanına ekleme yapabilmemiz için veritabanımız içerisine bir table belirtmemiz gerekmektedir.

PDO insert yapısı şu şekildedir.

```

$query = $db->;prepare("INSERT INTO users SET name = ?,email = ?,password = ?");
$insert = $query->;execute(array("Kevser", "info@kevsersrca.me", "helloworld"));

```

veya

```

$deyim = $dbh->;prepare("INSERT INTO users (name,email,password) VALUES (:name, :email,:password)");

$deyim->;bindParam(':name', $name);
$deyim->;bindParam(':email', $email);
$deyim->;bindParam(':password',$password);

$name="Kevser";
$email="info@kevsersrca.me";
$password="helloworld";

$deyim->;execute();



```

iki şekildede kullanabiliriz.
<p style="text-align: center;"><strong>PDO SELECT (Seçme)</strong></p>
users tablosundaki bütün verileri çekmek için ;
```

$query = $dbh->;query("SELECT * FROM users", PDO::FETCH_ASSOC);
if ( $query->;rowCount() ){
    foreach( $query as $row ){
        print $row['name']."<br />;";
        print $row['email']."<br />;";
        print $row['password']."<br />;";
    }
}



```

users tablosundaki bir tane veriyi çekmek için;

```

<form action="" method="post">;
    <input type="text" name="id" placeholder="id">;
    <button>;Ara</button>;
</form>;

<?php

include "connect.php";

if(isset($_POST['id']))
{
    $id = $_POST['id'];
    $query = $dbh->;query("SELECT * FROM users WHERE id = '{$id}'")->;fetch(PDO::FETCH_ASSOC);
    if ( $query ){
        print $query['name']."<br />;";
        print $query['email']."<br />;";
        print $query['password']."<br />;";
    }
    else
    {
        echo "Böyle veri bulunamadııı:(";
    }
}

```

inputumuza id sorgularsak tek tek verileri çekebiliriz.
<p style="text-align: center;"><strong>PDO</strong> <strong>DELETE(SİLME)</strong></p>
Bir veriyi silmek için :
```

$query = $dbh->;prepare("DELETE FROM users WHERE id = ?");
$delete = $query->;execute(array($id));

```

şekilde kullanabiliriz.İnjectiondan korunmak için prepare methodlarında (yani dışarıdan gelen değerlerde)  <em>id=? </em>yaparak kontrolümüzü execute'de<em>  çalıştırmalıyız</em>
<p style="text-align: center;"><strong>PDO UPDATE(GÜNCELLEME)</strong></p>
Bir veriyi güncellemek için:
```

$guncelle=$db->;prepare(' UPDATE users set name=? , email=?, password=? where id=? ');
$guncelle->;execute(array($name,$email,$password,$id));



```

Yine delete methodunda yaptığımız gibi bütün prepare methodlarında <em>where id=? </em>şeklinde tutulup execute'de id verilmelidir.
<p style="text-align: center;"><strong>PDO ERROR INFO(HATA YAKALAMA)</strong></p>
PDO::errorinfo(); fonksiyonu herhangi bir hata mesajlarını ekranda göstermeyi sağlar.Hata mesajı boşsa( empty(); ) işlem başarılıdır boş değilse geriye bir array döndürür.Aşağıdaki gibi.
```

Array
(
    [0] =>; HY000
    [1] =>; 1
    [2] =>; near "bozuk": syntax error
)



```

Bunu delete methodunda örneklendirelim:
```

$query = $dbh->;prepare("DELETE FROM users WHERE id = ?");
$delete = $query->;execute(array($id));
$hata = $dbh->;errorInfo();
echo empty($hata[2]) ?  "Başarılı Bir Şekilde Silindi.": $hata[2];

```

errorInfo(); fonksiyonunu veritabanı bağlantısında kullandığımız değişkenle kullanın(Başıma gelen hatalardan biri).

errorinfo fonksiyonundan 3 elemanlı bir array döndüğünü söylemiştik.<strong>0</strong> ve <strong>1</strong>. eleman ilgili sorgunun <strong>hata kodu,</strong> 2<strong>. elemanı ise hata</strong> <strong>mesajıdır</strong>.<strong> </strong>Bu yüzden $hata[2] değeri bize hata mesajını döndürecektir.
<p style="text-align: center;"><strong>PDO CHARSET SETTİNGS</strong></p>
PDO'da türkçe karakter sıkıntısı için veritabanına bağlandığınız kod içerisinde:
```

$dbh = new PDO('mysql:host=localhost;dbname=Blog;charset=utf8', "root", "");

```

bu şekilde charset seçimi yapabilirsiniz.
İyi kodlamalar :)
