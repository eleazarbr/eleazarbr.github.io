---
layout: post
current: post
cover: assets/images/cover/woocommerce.png
navigation: true
title: Introducción - API de productos de WooCommerce 2.6
description: La API de productos de WooCommerce permite crear, ver, actualizar y eliminar productos individuales o por lotes, en este artículo se realizará un CRUD sencillo.
date: 2018-08-03
tags: [Computer Science, WooCommerce]
class: post-template
subclass: 'post'
author: eleazar
---

Debido a que WooCommerce es un plugin, utiliza varias tablas de WordPress. WooCommerce almacena la información de los productos, cupones y pedidos en la tabla `posts`, también agrega su propias tablas: [descripción de la base de datos](https://github.com/woocommerce/woocommerce/wiki/Database-Description).

- [Crear un producto](#crear-un-producto)
- [Obtener un producto](#obtener-un-producto)
- [Actualizar un producto](#actualizar-un-producto)
- [Eliminar un producto](#eliminar-un-producto)
- [Batch update products](#batch-update-products)

En la [documentación oficial](http://woocommerce.github.io/woocommerce-rest-api-docs/#products) se puede obtener la lista con información de las propiedades de productos que devuelve la API, tales como:

- name
- slug
- permalink
- status
- description
- sku
- price, regular_price, sale_price, price_html
- total_sales,
- downloads (para productos digitales)
- stock_quantity, in_stock (bool flag)
- variations

## Crear un producto

La API nos ayuda a crear nuevos productos, mediante el siguiente endpoint:

`POST /wp-json/wc/v2/products`

- Ejemplo de como crear un simple producto:


- Ejemplo de como crear un producto con atributos globales y no globales:


## Obtener un producto

## Actualizar un producto

## Eliminar un producto

## Batch update products


