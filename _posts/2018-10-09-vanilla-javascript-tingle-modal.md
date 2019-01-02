---
layout: post
current: post
cover: assets/images/cover/modal.png
navigation: true
title: Vanilla Javascript Tingle Modal
description:
date: 2018-10-09
tags: [Frontend, Javascript]
class: post-template
subclass: 'post'
author: eleazar
---

En la búsqueda de un modal que sea realmente sencillo, sin tanta dependencia y sin usar jQuery, encontré el siguiente modal: [Tingle](https://robinparisi.github.io/tingle/).

[Código fuente en Github](https://github.com/robinparisi/tingle)

- Sin dependencias
- Totalmente personalizable con CSS
- CSS transitions
- Simple API
- Creado con UX en mente

### Intalación

|Método|Procedimiento|
|---|---|
|Bower|bower install tingle --save|
|NPM|npm install tingle.js --save|
|Download básico|[download.zip](https://github.com/robinparisi/tingle/archive/master.zip)|

Solo es necesario agregar el CSS y JS.

```html
<link rel="stylesheet" href="tingle.min.css">
<script src="tingle.min.js"></script>
```

### Ejemplo

Haz clic en el botón para ver el modal en acción.

<div class="tingle-demo tingle-demo-tiny hidden">
<h1>Tingle test</h1>
<p>Hello world!</p>
</div>

<button class="hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded js-tingle-modal-1">Click me!</button>

Solo es necesario lo siguiente:

```javascript
var modal = new tingle.modal({
    cssClass: ['class1', 'class2']
});

var btn = document.querySelector('.js-tingle-modal-1');
btn.addEventListener('click', function() {
    modal.open();
});

modal.setContent(document.querySelector('.tingle-demo-tiny').innerHTML);
```

Para más opciones y configuración ver: [https://robinparisi.github.io/tingle/](https://robinparisi.github.io/tingle/)

<script>
var modal_tingle_sample = new tingle.modal();

var btn_sample = document.querySelector('.js-tingle-modal-1');
btn_sample.addEventListener('click', function() {
    modal_tingle_sample.open();
});

modal_tingle_sample.setContent(document.querySelector('.tingle-demo-tiny').innerHTML);
</script>
