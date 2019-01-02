---
layout: post
current: post
cover: assets/images/cover/cssgrid.png
navigation: true
title: CSS Grid - Introducción
description:
date: 2018-09-13
tags: [Frontend, CSS]
class: post-template
subclass: 'post'
author: eleazar
---

CSS Grid ayuda crear fácilmente diseños web complejos. Funciona convirtiendo un elemento HTML en un contenedor de cuadrícula con filas y columnas para colocar elementos secundarios donde desees.

### Crear el primer CSS Grid

Para crear un grid container se establece la propiedad `display` a `grid`.

```css
.container {
    display: grid;
}
```

### Agregar columnas con grid-template-columns


```css
.container {
    display: grid;
    grid-template-columns: 50px 50px; // Dos columnas de 50px cada una
}
```

### Agregar filas con grid-template-rows


```css
.container {
    display: grid;
    grid-template-columns: 50px 50px;
    grid-template-rows: 50px 50px; // Dos filas de 50px
}
```

Con lo anterior es posible utilizar las siguientes unidades para establecer el tamaño:

- `fr`: establece el tamaño de la columna o fila a una fracción del tamaño disponible.
- `auto`: establece el tamaño automáticamente.
- `%`: ajusta el tamaño aun porcentaje del ancho de su contenedor.

### Crear espacios con grid-column-gap y grid-column-row

Para dejar espacios entre columnas y filas:

```css
.container {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
```

Agregar gap más rápido:

```css
.container {
    // 10px en rows y 20px en columns
    grid-gap: 10px 20px;
}
```

### Controlar el espaciado interno

Con esta propiedad el ítem de un cuadricula, puede ocupar más espacio, solo hay que especificar de que linea a que linea ocupará ese espacio. Aplica tanto para columns, como rows.

```css
.container {
    grid-column: 2/4; // De la linea 2 a la 4.
    grid-row: 2/4; // De la linea 2 a la 4.
}
```

### Dividir el grid en áreas

Las celdas se pueden agrupar en áreas y darles un nombre personalizado. Cada palabra representa una celda y cada par de " " representa una fila. También, se puede usar un `.` para designar una celda vacía.

```css
.container {
    grid-template-areas:
        "header header header"
        "advert content content"
        "footer footer footer";
}
```

### Colocar ítems en áreas del Grid con la propiedad grid-area

Después de crear una plantilla de áreas para el contenedor grid, se puede colocar cualquier elemento en su área personalizada haciendo referencia al nombre que le dio.

```css
.item {
    grid-area: footer;
}
```

Lo anterior, establece ese ítem en el área llamada footer.

### Usar grid-area sin crear Areas Templates

Se pueden crear áreas al vuelo, usando las lineas del grid.

```css
item {
    grid-area: 1/1/2/4;
}
```

grid-area: línea horizontal para comenzar en / línea vertical para comenzar en / línea horizontal para terminar en / línea vertical para terminar en.

Entonces, en el ejemplo anterior, el ítem va a consumir el espacio empezando en la linea horizontal 1 y terminando en la linea 2, después en la linea vertical 1 hasta la 4.

### Reducir repetición con el método repeat()

Por ejemplo, crear 100 rows de 50px de alto:

```css
grid-template-row: repeat(100, 50px);
```

### Limitar el tamaño del grid con la función minmax

Para esto es necesario especificar un rango aceptable para el ítem.

```css
grid-template-columns: 100px minmax(50px, 200px);
```

Lo anterior crea dos columnas, una de 100px de ancho y la segunda con un mínimo de 50px y máximo 200px.

### Crear diseño flexibles con auto-fill

Se pueden crear diseños flexibles si se combina `auto-fill` con `minmax`. Por ejemplo, lo siguiente crea columnas con el ancho especificado hasta que no quepa en la fila, cuando ya no cabe, se inserta en la siguiente fila automáticamente.

```css
repeat(auto-fill, minmax(60px, 1fr));
```

### Crear diseño flexibles con auto-fit

Funciona igual que `auto-fill`, la diferencia es cuando se excede el tamaño del contenedor, `auto-fill` sigue insertando filas o columnas y `auto-fit` colapsa esas filas o columnas vacías y las estira al tamaño del contenedor.

### Usar Media Queries para crear diseños responsivos

CSS Grid puede ser una manera fácil de hacer que el sitio sea más responsivo utilizando Media Queries para reorganizar las áreas, cambiar dimensiones de un grid y reorganizar la ubicación de los elementos.

Cuando el ancho del viewport es `400px` o más el header ocupa la fila superior completamente y el footer la inferior.

```css
@media (min-width: 300px) {
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    }
  }
```

### Crear grids dentro de grids

Convertir un elemento en un `grid` solo afecta el comportamiento de sus descendientes directos. Entonces, al convertir un descendiente directo en un `grid`, tienes un `grid` dentro de un `grid`.

Por ejemplo, al establecer las propiedades de `display: grid;` y `grid-template-columns` de un ítem, se crea un `grid` dentro de un `grid`.
