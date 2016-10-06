<img src="http://robertobarron.com/images/logos/jpload.jpg" width="500" height="150">

JPLoad is a small library that allows you to develop fast an reliable single page website applications.

## Introduction

  Currently there are many libraries/frameworks to help web developers to build single page applications. The majority of these frameworks required advanced knowledge of JavaScript and deep systems configurations. JPLoad has been created to help web developers to build single web application without having a deep understanding of Javascript.

## Getting Started

 To see how to use JPLoad to build a single web application, check out [this example](http://jpload.robertobarron.com).

## What's Included
JPLoad does not attempt to be a full, batteries-included framework. Instead, it tries to simplify the development by allowing the developer to use the library in the most appropiate way for their application.

#### Including the library into your main html file (Usually index.html)
```
<html>
<head></head>
<body>
 <div id="app"></div>
...
<script src="js/JPLoad.min.js"></script>
</body>
</html>
```
#### Declaring the hook

You need to declare a root element. The entire application will be created inside this element.
##### Javascript
```javascript
var hook = document.getElementById('app');
...
if (response) {
	hook.innerHTML = response;
}
```

##### jQuery
```javascript
var hook = $('#app');
...
if (response) {
	hook.html(response);
}
```
#### Requesting the template file

Template are html files that are injected into our application via Ajax.
```javascript
JPLoad.getView('templates/init.html', function (response) {
	if (response) {}  //The template data resides in the response variable.
});
```

#### Injecting the template file

Template data can be injected into the element with the id **'div-id'**
```javascript
JPLoad.loadView(response, 'div-id');
```

#### Asynchronous request of templates
Templates will be loaded as their call finished.
```javascript
JPLoad.getView('templates/second.html', function (response) {
	JPLoad.loadView(response, 'second-div');
});

JPLoad.getView('templates/first.html', function (response) {
	JPLoad.loadView(response, 'first-div');
});
```

#### Synchronous request of templates
Templates nested are loaded after the parent.
```javascript
JPLoad.getView('templates/first.html', function (response) {
	JPLoad.loadView(response, 'first-div');

	JPLoad.getView('templates/second.html', function (response) {
		JPLoad.loadView(response, 'second-div');
	});
});
```

#### Injecting data into our template files
 JPLoad has support to inject data into our templates before they are being loaded into our application.
**template.html**
```
<pre>
&lt;html>
	&lt;title><b>{{title}}</b>&lt;/title>
	&lt;body>
		&lt;a href="#"><b>{{link-description}}</b>&lt;/a>
	&lt;/body>
&lt;/html>
</pre>
```
**scripts.js (plain JavaScript)**
```javascript
var data = {'title': 'Injecting data', 'link-description': 'JPLoad Link'};
JPLoad.getView('templates/template.html', function (response) {
	JPLoad.loadView(response, 'id-div', data);
});
```
**script.js (jQuery)**
```javascript
var data = {'title': 'Injecting data', 'link-description': 'JPLoad Link'};
var $id = $('id-div');
JPLoad.getView('templates/template.html', function (response) {
	JPLoad.loadView(response, $id, data);
});
```

**HTML DATA**
```
<pre>
&lt;html>
	&lt;title><b>Injecting Data</b>&lt;/title>
	&lt;body>
		&lt;a href="#"><b>JPLoad Link</b>&lt;/a>
	&lt;/body>
&lt;/html>
</pre>
```
## License

MIT
