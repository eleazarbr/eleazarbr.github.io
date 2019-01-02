---
layout: post
current: post
cover: assets/images/cover/website-responsive.png
navigation: true
title: Principios del Diseño Web Responsivo
description:
date: 2018-09-16
tags: [Frontend, CSS]
class: post-template
subclass: 'post'
author: eleazar
---

Existen muchos tipos de dispositivos que pueden acceder a la web. Estos dispositivos tienen diferentes tamaños de pantalla, resoluciones y potencia de procesamiento. La estructura de la página y las reglas de CSS deben ser flexibles para acomodar estas diferencias. En general, se diseña el CSS de la página para el público objetivo.

Esta entrada cubrirá las formas básicas de usar CSS para el Diseño Web Responsivo.

## Table of contents
- [author: eleazar](#author-eleazar)
- [Table of contents](#table-of-contents)
- [Media Query](#media-query)
  - [Diferencia entre max-width y min-width](#diferencia-entre-max-width-y-min-width)
- [Imágenes responsivas](#im%C3%A1genes-responsivas)

## Media Query

Media Queries es una técnica introducida en CSS3 y modifica la presentación del contenido en función del tamaño de las ventanas o viewports. El viewport es el área visible de un usuario de una página web, y es diferente según el dispositivo utilizado para acceder al sitio.

Las Media Queries usan la regla `@media`, un tipo de medio y una condición y si coincide con el tipo de dispositivo en el que se muestra el documento, se aplican los estilos. Puede tener tantos selectores y estilos dentro del media query como se desee.

Ejemplo de media query que devuelve el contenido cuando el **ancho** del dispositivo es **menor o igual a 100 px**:

```css
@media screen and (max-width: 100px) {/* CSS */}
```

y la siguiente media query devuelve el contenido cuando la **altura** del dispositivo es **mayor o igual a 350 px**:

```css
@media screen and (min-height: 350px) {/* CSS */}
```

- El CSS dentro de la media query se aplica solo si el tipo de medio coincide con el del dispositivo que se está utilizando.

### Diferencia entre max-width y min-width

**Maximum Width**

`@media screen and (max-width: 600px) {...}`

- Lo anterior significa: "Si el [ancho-del-dispositivo]" es _menor o igual_ a 600px, entonces...
- Funciona desde 0px hasta 600px.
- Es un limite del ancho máximo de un elemento el cual su tamaño puede ser modificado por el navegador.

**Mininum Width**

`@media screen and (min-width: 600px) {...}`

"Si el [ancho-del-dispositivo]" es _mayor o igual_ que 600px, entonces...

- Es lo contrario a max-width
- El navegador puede incrementar el tamaño del elemento y disminuir no menos al min-width.

Ambas condiciones se pueden mezclar para especificar un rango de tamaños.

`@media screen and (max-width: 600px) and (min-width: 400px)  {...}`

Lo anterior se ejecuta si la pantalla esta entre 600-400px de ancho.

_Con `min-width` se diseña una experiencia mobile-first y con `max_width` una desktop-first_.


## Imágenes responsivas

En lugar de aplicar un `width` absoluto a la imagen, se puede usar lo siguiente:

```css
img {
    max-width:  100%;
    display: block;
    height: auto;
}
```

La propiedad `max-width` escala la imagen al ancho de su contenedor, y `display: block;` cambia la posición de default (inline) a un block element en su propia linea. El `height` auto mantiene el aspecto original de la imagen.

