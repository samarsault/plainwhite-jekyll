---
title: Angularjs ve Json
draft: false
weight: 4
summary: Angularjs ile Json Parse Tutorial
date: 2017-02-26T14:05:12-05:00
---
Merhaba bu yazımda sizinle genelde jquery,ajax ile yapılan Json parsing konusunu Angular Js ile anlatacağım.

<h3>Adım 1</h3>

<code>ng-app</code> iterative'ini eklemek.

```html
    <html ng-app="myApp">

    </html>
```
<h3>Adım 2</h3>

angular js script tag'ı eklemek.


```html
    <html>
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
      </head>
    </html>
```

<h3>Adım 3</h3>

<code>ng-controller</code> iterative'ini eklemek

```html
    <html ng-app="myApp">
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
      </head>
      <body>
         <div ng-controller="PostController">
        </div>
      </body>
    </html>
```
<h3>Adım 4</h3>

Parse edeceğin json dosyasını ayarlıyorum. Ben örnek olarak aşağıdaki gibi basit bir json dosyası kullanacağım.

<code>posts.json</code><br>


```json
[
	{
	"title":"Restful Api Json Parsing with Angular Js",
	"url":"http://architecturecoding.com/angular-js-2/",
	"banner":"multiple.jpg",
	"description":"Some Tesxt",
	"time":"Tuesday, August 6, 2016" ,
	"author":"Kevser Sırça"
	},
	{
	"title":"Cordova Location Plugin",
	"url":"https://architecturecoding.com/cordova-lokasyon-plugini",
	"banner":"WallBanner.jpg",
	"description":"Some Text",
	"time":"MONDAY, JAnuary 15, 2016" ,
	"author":"Kevser Sırça"
	},
	{
	"title":"Simple Drop Down Menu with Jquery and CSS",
	"url":"http://www.9lessons.info/2012/06/simple-drop-down-menu-with-jquery-and.html",
	"banner":"dropdown.png",
	"description":"Some Text",
	"time":"WEDNESDAY, JUNE 20, 2012" ,
	"author":"Ravi Tamada"
	}
]
```

<h3>Adım 5</h3>

Controller içerisinde öncelikle app'imiz için module oluşturuyoruz. Sonra, $http methodu ile url'e get request atıp gelen response'u collection olarak tutuyoruz.


```js
var app = angular.module('myApp', []);

		app.controller('PostController', function($scope, $http) {
		    $http({
		        method : "GET",
		        url : "js/posts.json",
		    }).then(function (response) {
		        $scope.	collection = response.data;
		    }, function (response) {
		        $scope.myWelcome = response.statusText;
		    });
		});


```



<h3>Adım 6</h3>

Görüntülememiz bu kısımda olacak. Controllerdan gelen collection datamızı burada görüntüleyeceğiz.

```html
{% raw %}
<div class="content" ng-repeat="row in collection">
		<div class="row">
			<div class="col-lg-12">
				<b><a href='{{post.url}}'>{{post.title}}</a></b>
			</div>
		</div>
		<hr>

		<div class="row">
			<div class="col-lg-12">
				{{post.time}} - {{post.author}}
			</div>
		</div>

		<hr>

		<div class="row">
			<div class="col-lg-12">
				{{ row.description}}
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<p>{{post.description}}</p>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				{{post.banner}}
			</div>
		</div>
	</div>
{% endraw %}
```
