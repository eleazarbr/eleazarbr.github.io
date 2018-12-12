---
layout: post
current: post
cover: assets/images/cover/green-page.png
navigation: true
title: CSS básico — Recommendation
description:
date: 2018-12-09
tags: [web development, frontend]
class: post-template
subclass: 'post'
author: eleazar
---

El término *recommendation* básicamente significa un estándar no forzoso, por lo que hay recomendaciones en este tema; mantenerse al día con todo lo que es el desarrollo web es una tarea casi imposible.

Lo mejor siempre será aprender bien los fundamentos (HTML, CSS y Javascript) ya que la web gira entorno a estas tecnologías, por lo que vale la pena invertir el tiempo.

Desde luego que hay muchos recursos en la web, solo hay que *googlear* y encontrar algo que se adapte a nuestro estilo de aprendizaje.

> Tabla de Contenidos
- [author: eleazar](#author-eleazar)
- [CSS Selectors](#css-selectors)
- [CSS Class](#css-class)
- [Naming Conventions](#naming-conventions)
- [Importar un Google Font](#importar-un-google-font)
- [El atributo id para dar estilo](#el-atributo-id-para-dar-estilo)
- [Usar notación de reloj para especificar el Padding y Margin de un elemento](#usar-notaci%C3%B3n-de-reloj-para-especificar-el-padding-y-margin-de-un-elemento)
- [Usar un Attribute Selector para dar estilo](#usar-un-attribute-selector-para-dar-estilo)
- [Entender unidades Absolutas vs. Relativas](#entender-unidades-absolutas-vs-relativas)
- [Heredar el estilo del Body Element](#heredar-el-estilo-del-body-element)
- [Dar prioridad a un estilo sobre otro](#dar-prioridad-a-un-estilo-sobre-otro)
- [Sobreescribir estilos en CSS subsecuente](#sobreescribir-estilos-en-css-subsecuente)
- [Sobreescribir declaraciones de clases por atributos ID](#sobreescribir-declaraciones-de-clases-por-atributos-id)
- [Sobreescribir declaraciones de clase con estilos Inline](#sobreescribir-declaraciones-de-clase-con-estilos-inline)
- [Sobreescribir todos los estilos usando Important](#sobreescribir-todos-los-estilos-usando-important)
- [Usar códigos hexadecimales para colores específicos](#usar-c%C3%B3digos-hexadecimales-para-colores-espec%C3%ADficos)
- [Usar códigos hexadecimales abreviados](#usar-c%C3%B3digos-hexadecimales-abreviados)
- [Variables CSS y variables personalizadas](#variables-css-y-variables-personalizadas)
- [Variables CSS en cascada](#variables-css-en-cascada)
- [Usar media queries para cambiar una variable](#usar-media-queries-para-cambiar-una-variable)
- [Recursos](#recursos)

## CSS Selectors

Existen cientos de `properties` CSS para dar estilo a la página. Un CSS Selector es por ejemplo, si queremos que todos los elementos `h2` sean rojos, añadimos la siguiente regla de estilo:

```css
h2 {color: red;}
```

Es importante recordar agregar el punto y coma al final de cada regla de estilo.

## CSS Class

Las clases son estilos reutilizables que se agregan a los elementos HTML.

```css
    .blue-text {    
    	color: blue;  
    }
```

Lo anterior, se puede aplicar a cualquier elemento HTML: `<h2 class="blue-text">CatPhotoApp</h2>`.

## Naming Conventions

La idea es hacer que cada clase sea un componente individual que pueda ser reutiizado, dar a cada elemento una clase que lo represente, ser específicos con el nombre de las clases para que puedan ser reutilizables y fácil de identificar.

En resumen:

- Mantener el nombre en minúsculas y utilizar guiones (no guiones bajos o camelCase). Los guiones sirven como rupturas naturales en la clase relacionada (por ejemplo, `.btn` y `.btn-danger`).
- Evitar la notación abreviada excesiva y arbitraria. `.btn` es útil para *button*, pero `.s` no significa nada.
- Mantenga las clases lo más cortas y concisas posible.
- Use nombres significativos; Utilice nombres *estructurales* o de *propósito* sobre presentacionales. Nombrar de acuerdo al uso en lugar de la apariencia.
- Usar prefijos basadas en la clase primaria o base más cercana.
- Use las clases `.js-*` para denotar el comportamiento (a diferencia del estilo), pero mantenga estas clases fuera de su CSS.

También es útil aplicar muchas de estas reglas al crear nombres de variables Sass y Less.

```css
    /* Ejemplo malo */
    .t { ... }
    .red { ... }
    .header { ... }

    /* Ejemplo bueno */
    .tweet { ... }
    .important { ... }
    .tweet-header { ... }
```

## Importar un Google Font

En adición a los fonts comunes, se puede especificar *custom web fonts*. Google Fonts es una librería gratis, para importar un Google Font, simplemente se copia la URL y se pega en el HTML.

`<link href="[https://fonts.googleapis.com/css?family=Lobster](https://fonts.googleapis.com/css?family=Lobster)" rel="stylesheet" type="text/css">`

Ahora, ya podemos utilizar el font Lobster con la regla: `font-family: Lobster;`. Cuando un font no esta disponible, podemos decirle al navegador que utilice otro font, separándolo con comas.

```css
    p {
      font-family: Helvetica, sans-serif;
    }
```

## El atributo id para dar estilo

La única diferencia de `id` respecto a `class` es que no es reusable y solo debe ser aplicada a un elemento.

Un `id` incluso tiene más importancia que una `class` , si ambos son aplicados al mismo elementos y tienen reglas de estilo en conflicto, el estilo del `id` es el que será aplicado.

```css
    #photo-element {
      background-color: green;
    }
```

> Casi nunca deberías usar `id` para dar estilo. El comportamiento roto debido a las colisiones con `id` es difícil de rastrear y es molesto.

## Usar notación de reloj para especificar el Padding y Margin de un elemento

## Usar un Attribute Selector para dar estilo

Existen otros CSS selectors aparte de `id` y `class`, por ejemplo: `[attr=value]`, el cual da estilo al elemento que se especifique.

```css
    [type="radio"] {
    	margin: 20px 0px 20px 0px;
    }
```

Al usar el atributo `type` se le otorga un margin a todos los radio buttons.

## Entender unidades Absolutas vs. Relativas

## Heredar el estilo del Body Element

Cada página HTML tiene un elemento `body` y todos los otros elementos van a heredar el estilo que se defina en el elemento `body`.

```css
    body {
    	color: green;
    }
```

Lo anterior, da el color verde a todos los elementos dentro de `body`.

## Dar prioridad a un estilo sobre otro

Usualmente, los elementos HTML reciben múltiples estilos que entran en conflicto entre sí. Con lo anterior, un elemento `h1` no siempre va a ser verde.

Al aplicar al elemento una clase que haga el texto rosa, la clase anula el color verde del `body`.

```css
    .pink-text {
    	color: pink;
    }
```

```html
    <h1 class="pink-text">
    	Hello World!
    </h1>
```

La clase "pink-text" sobreescribió la declaración CSS del elemento `body`.

## Sobreescribir estilos en CSS subsecuente

Ahora que sabemos que las clases sobreescriben el CSS del elemento `body`, la siguiente pregunta es: ¿que puede sobreescribir una clase?

Para ello vamos a crear una clase adicional que haga el texto azul, **asegurando que este debajo de la clase pink-text**.

```css
    .pink-text {
    	color: pink;
    }

    .blue-text {
    	color: blue;
    }
```

Aplicamos la clase al elemento que tenga pink-text para ver cual gana.

La aplicación de múltiples clases en un elemento se realiza con un espacio entre ellos como este:

`class="class1 class2"`

> No importa en qué orden se enumeran las clases en el elemento HTML.

Pero, lo que si es importante es el **orden de las declaraciones de clases** en la archivo .CSS.

> La segunda declaración siempre tendrá más prioridad sobre la primera.

Debido a que `.blue-text` se declara después que `.pink-text` esta anula los atributos de `pink-text`.

```html
    <h1 class="pink-text blue-text">Hello World!</h1>
```

## Sobreescribir declaraciones de clases por atributos ID

Los navegadores leen el CSS de arriba hacia abajo. Eso significa que en un conflicto, los navegadores van a usar cualquier declaración CSS que este al final.

Se puede sobreescribir el valor azul del elemento `h1` si se define un `id` al elemento y se da otro estilo.

```html
    <h1 id="orange-text" class="pink-text blue-text">
```
```css
    #orange-text {
    	color: orange;
    }
```

> No importa en donde se declare "orange-text", porque el atributo id siempre tendrá prioridad.

## Sobreescribir declaraciones de clase con estilos Inline

Hasta ahora se ha probado que las declaraciones id sobreescriben las declaraciones de clases.

El `inline style` sobreescribe todo lo anterior.

```html
    <h1 style="color:white;" id="orange-text" class="pink-text blue-text">
    	Hello World! <!-- El texto es blanco -->
    </h1>
```

## Sobreescribir todos los estilos usando Important

Aún existe otra forma de sobreescribir CSS, el método más poderoso de todos, pero ¿cuando usarlo?.

En algún momento, vamos a utilizar una librería CSS que accidentalmente sobreescriba nuestro CSS. Entonces, si queremos cambiar eso usamos `!important`.

Volvamos atrás para añadir la palabra reservada `!important` en la clase `.pink-text` y el elemento se hará rosa.

`color: pink !important;`

## Usar códigos hexadecimales para colores específicos

## Usar códigos hexadecimales abreviados

## Variables CSS y variables personalizadas

Las *CSS Variables* son una poderosa manera de cambiar muchos estilos rápidamente al modificar un solo valor.

Para crear una Variable CSS, solamente tenemos que darle un `name` con `dos guiones` y asignarle un valor:

```css
.element {
    --gray-color: #777777;
}
```

Lo anterior crea una variable llamada `--gray-color` y le asigna el color gris hexadecimal. Para usarla se hace referencia de la siguiente manera:

```css
.element {
    --gray-color: #777777;
    color: var(--gray-color);
}
```

## Variables CSS en cascada

Cuando se crea una variable CSS solo esta disponible dentro del elemento en la cual fue creada y también esta disponible para los elementos anidados, este efecto se llama *cascada.*

Si se definen las variables en el elemento `:root` estarán disponibles para todo la página web.

```css
    :root {
    	--color-gray: #777777;
    }
```

## Usar media queries para cambiar una variable

## Recursos

- Un buen recurso es [CanIUse.com](https://caniuse.com/) en donde puedes tipear cualquier *feature* en su buscador para saber si el navegador soporta la característica y en que versión.
- [Mozilla Developer Network](https://developer.mozilla.org/), es otro gran sitio que uso diariamente.
