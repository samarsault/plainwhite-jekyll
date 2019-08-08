---
title: PDO Snippet
draft: false
weight: 4
date: 2017-02-26T14:50:28-05:00
summary: PDO Yazarken Yardimci Fonksiyonlar
---

<p style="text-align: center;"><strong>CONNECT ve SQL FONKSİYONU</strong></p>

```&lt;?php
/**
 * @param $dbname
 * @param $username
 * @param $password
 * @return PDO
 * Veritabanı bağlantısı fonksiyonu
 */
function connect($dbname,$username,$password)
{
    try
    {
        $dbh = new PDO('mysql:host=localhost;dbname='.$dbname.';charset=utf8', $username, $password);
    }
    catch(PDOexception $e){
        print $e-&gt;getMessage();
    }
    return $dbh;
}

/**
 * @param $sql
 * @param array $args
 * @return array
 * PDO sql sorgusu fonksiyonu
 */
function sql($sql,$args = [])
{
    $dbh=connect("Blog","root","");
    $query = $dbh -&gt; prepare ($sql );
    $status = $query -&gt; execute ($args);
    return $query-&gt;fetchAll();
}



```

<p style="text-align: center;"><strong>PDO VERİ EKLEME FONKSİYONU</strong></p>

```/**
 * @param $name
 * @param $email
 * @param $password
 * @return array
 * Veritabanı veri ekleme
 */
function sentData($name,$email,$password)
{
    return sql('INSERT INTO users (name,email,password) VALUES (?,?,?);',[$name, $email, $password]);
}


```
<p style="text-align: center;"><strong>PDO VERİ SİLME FONKSİYONU</strong></p>

```/**
 * @param $id
 * @return array
 * Veritabanındaki veriyi silme
 */
function deleteData($id)
{
    return sql(" DELETE FROM users WHERE id=? ",[$id]);
}
```

<p style="text-align: center;"><strong>PDO VERİ GÜNCELLEME FONKSİYONU</strong></p>

```
/**
 * @param $name
 * @param $email
 * @param $password
 * @param $id
 * @return array
 * Veritabanındaki veriyi güncelleme
 */
function updateData($name,$email,$password,$id)
{
    return sql('UPDATE users set name=? , email=?, password=? where id=?',[$name,$email,$password,$id]);
}
```
