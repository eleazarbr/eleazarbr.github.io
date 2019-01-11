---
layout: post
current: post
cover: assets/images/cover/bulma.jpg
navigation: true
title: Laravel 5.7 & Bulma.io perspectiva general
description: Bulma es un framework CSS opensource, basado en Flexbox. 100% responsivo y modular, provee un sistema simple de grid.
date: 2018-12-13
tags: [Web Development, Frontend]
class: post-template
subclass: 'post'
author: eleazar
---

Bulma es un framework CSS opensource, basado en Flexbox. 100% responsivo, modular y provee un sistema simple de grid.

Bulma es solo una colección de clases CSS, consiste en 39 archivos `.sass` los cuales pueden ser importados individualmente.

Después de utilizar Bulma unos días, me doy cuenta que el framework efectivamente es sencillo y fácil de usar. El paquete también es muy pequeño, a diferencia de _Bootstrap_ y similares. No podría decir que como _contra_ carece de flexibilidad, porque tiene la opción de ser personalizado y al final nosotros siempre podemos sobreescribir cualquier estilo escribiendo un poco de CSS.

> Tabla de contenidos
- [author: eleazar](#author-eleazar)
- [Requerimientos](#requerimientos)
- [Instalación](#instalaci%C3%B3n)
- [Responsividad](#responsividad)
- [Modificadores](#modificadores)
- [Columnas](#columnas)
- [Otros recursos / documentación](#otros-recursos--documentaci%C3%B3n)

## Requerimientos

1.- Usar el HTML5 doctype:

```html
<!DOCTYPE html>
```
2.- Agregar el responsive viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Instalación

Solo se necesita **1 CSS** para empezar a utilizar *[Bulma](https://bulma.io/documentation/overview/start/)*.

Bulma se puede instalar de diferentes maneras:

- Usar un **CDN** con la URL a la hoja de estilos ([https://cdnjs.com/libraries/bulma](https://cdnjs.com/libraries/bulma)).
- Descarga del **repositorio de GitHub** ([https://github.com/jgthms/bulma/tree/master/css](https://github.com/jgthms/bulma/tree/master/css)).
- Usar **npm** para instalar el paquete.

 Por ejemplo si compilamos assets con Laravel Mix, hacemos:

1. `npm install bulma`
2. Remover el import de Bootstrap en `app.scss`
3. Y en `app.scss` incluir:

```scss
@import "~bulma/bulma.sass";
```

4.- `npm run dev`

Podemos ver que la instalación ha sido correcta, añadiendo lo siguiente en `welcome.blade.php`:

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
- El `nav` menú se esconde.

> Se puede forzar el **horizontal** layout escribiendo el modificador `is-mobile`.

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

## Modificadores

Algo que me gustó de Bulma, es que también cuenta con clases de utilidad o modificadores, lo que permite obtener estilos alternativos para casi todos sus elementos. Estos modificadores empiezan con `is-*` o `has-*`. Por ejemplo:

Para convertir un botón normal en botón de Bulma, simplemente agregamos la clase `button`.

```html
<button class="button">Hello world</button>
```

Para cambiar el estilo usando modificadores, escribimos lo siguiente:

```html
<button class="button is-large is-success is-rounded has-text-weight-bold">Hello world</button>
```
Lo anterior crea un botón con borde redondo, background verde y fuente white-bold.

## Columnas

Una de las cosas más importantes de cualquier framework CSS, es como resuelven el tema de las columnas. Bulma se basa en flexbox y de la siguiente manera se crea una fila con tres columnas:

```html
<div class="columns">
  <div class="column">
    Columna uno
  </div>
  <div class="column">
    Columna dos
  </div>
  <div class="column">
    Columna tres
  </div>
</div>
```

Una vez mas, utilizando los modificadores podemos controlar el tamaño del ancho de las columnas, algunos ejemplo:

- `is-three-quarters`
- `is-two-thirds`
- `is-half`
- `is-one-third`
- `is-one-quarter`
- `is-four-fifths`
- `is-three-fifths`
- `is-two-fifths`
- `is-one-fifth`

## Otros recursos / documentación

Lo mejor de todo es que el resto de la biblioteca es muy intuitiva y fácil. Entonces, el resto se entiende sin problemas.

- Responsividad: [https://bulma.io/documentation/overview/responsiveness/](https://bulma.io/documentation/overview/responsiveness/)
- Mixins: [https://bulma.io/documentation/overview/mixins/](https://bulma.io/documentation/overview/mixins/)
- Componentes Lightweight para Vue.js basado en Bulma - [https://buefy.github.io/](https://buefy.github.io/)
