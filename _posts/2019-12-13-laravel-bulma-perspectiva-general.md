---
layout: post
current: post
cover: assets/images/cover/bulma.jpg
navigation: true
title: Laravel 5.7 + Bulma.io perspectiva general
description: Bulma es un framework CSS opensource, basado en Flexbox. 100% responsivo y modular, provee un sistema simple de grid.
date: 2018-12-13
tags: [web development, frontend]
class: post-template
subclass: 'post'
author: eleazar
---

Bulma es un framework CSS opensource, basado en Flexbox. 100% responsivo, modular y provee un sistema simple de grid.

Bulma es solo una colección de clases CSS, consiste en 39 archivos `.sass` los cuales pueden ser importados individualmente.

> Tabla de contenidos
- [author: eleazar](#author-eleazar)
- [Requerimientos](#requerimientos)
- [Instalación](#instalaci%C3%B3n)
- [Responsividad](#responsividad)
- [Otros recursos](#otros-recursos)

## Requerimientos

1.- Usar el HTML5 doctype

```html
<!DOCTYPE html>
```
2.- Agregar el responsive viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Instalación

Solo se necesita **1 CSS** para empezar a utilizar *[Bulma](https://bulma.io/documentation/overview/start/)*.

Bulma se puede instalar de diferentes maneras:

- Usar un **CDN** con la URL a la hoja de estilos ([https://cdnjs.com/libraries/bulma](https://cdnjs.com/libraries/bulma)).
- Obtenerla del **repositorio de GitHub** ([https://github.com/jgthms/bulma/tree/master/css](https://github.com/jgthms/bulma/tree/master/css)).
- Usar **npm** para instalar el paquete.

 Por ejemplo si compilamos assets con Laravel Mix:

1. `npm install bulma`
2. Remover el import de Bootstrap en `app.scss`
3. Y en `app.scss` incluir:

```scss
@import "~bulma/bulma.sass";
```

4.- `npm run dev`

Podemos probar la instalación con lo siguiente en `welcome.blade.php`

```html
<progress class="progress is-primary" value="30" max="100">30%</progress>
<progress class="progress is-info" value="45" max="100">45%</progress>
<progress class="progress is-success" value="60" max="100">60%</progress>
<progress class="progress is-warning" value="75" max="100">75%</progress>
<progress class="progress is-danger" value="90" max="100">90%</progress>
```
## Responsividad

Cada elemento de Bulma es **mobile-first** y es optimizado para lectura vertical, por default:

- Las columnas se apilan verticalmente.
- El `nav` menú esta escondido.

Se puede forzar el **horizontal** layout escribiendo el modificador `is-mobile`.

Bulma tiene 5 breakpoints:

- `mobile`: arriba de `768px`
- `tablet`: de `769px`
- `desktop`: de `1024px`
- `widescreen`: de `1216px`
- `fullhd`: de `1408px`

Bulma usa [9 responsive mixins](https://github.com/jgthms/bulma/blob/master/sass/utilities/mixins.sass#L81,L129):

- `=mobile` hasta `768px`
- `=tablet` de  `769px`
- `=tablet-only` de `769px` y hasta `1023px`
- `=touch` hasta `1023px`
- `=desktop` de `1024px`
- `=desktop-only` de `1024px` y hasta `1215px`
- `=widescreen` de `1216px`
- `=widescreen-only` de `1216px` y hasta `1407px`
- `=fullhd` de `1408px`

## Otros recursos

- Documentación de responsividad: [https://bulma.io/documentation/overview/responsiveness/](https://bulma.io/documentation/overview/responsiveness/)
- Documentación mixins: [https://bulma.io/documentation/overview/mixins/](https://bulma.io/documentation/overview/mixins/)
- Lightweight UI components for Vue.js based on Bulma- [https://buefy.github.io/](https://buefy.github.io/)
