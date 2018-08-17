---
layout: post
current: post
cover: assets/images/cover/woocommerce.png
navigation: true
title: Introducción - API de productos de WooCommerce v2
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

> Si utilizas Laravel te recomiendo el siguiente paquete [pixelpeter/laravel5-woocommerce-api-client](https://github.com/pixelpeter/laravel5-woocommerce-api-client) es un wrapper de la API de WooCommerce.

## Crear un producto

La API nos ayuda a crear nuevos productos, mediante el siguiente endpoint:

`POST /wp-json/wc/v2/products`

Para almacenar un simple producto, es necesario recrear la siguiente estructura.

```php
<?php
$data = [
    'name' => 'Premium Quality',
    'type' => 'simple',
    'regular_price' => '21.99',
    'description' => 'Pellentesque habitant morbi.',
    'short_description' => 'Pellentesque habitant.',
    'categories' => [
        [
            'id' => 9
        ],
        [
            'id' => 14
        ]
    ],
    'images' => [
        [
            'src' => 'http://demo.woothemes.com/56/2013/06/T_2_front.jpg',
            'position' => 0
        ],
        [
            'src' => 'http://demo.woothemes.com/56/2013/06/T_2_back.jpg',
            'position' => 1
        ]
    ]
];
```

Como se observa en el ejemplo anterior, la propiedad `regular_price` _debe ser un string_. Si se omite el atributo `position => 0` entonces el producto no tendrá una imagen de producto "destacada", sino que esta imagen formará parte de una galería.

También, a un producto se le puede asignar varias categorías y para crear nuestras primeras categorías se realiza mediante el siguiente webservice:

`POST /wp-json/wc/v2/products/categories`

```php
<?php
$data = [
    'name' => 'Clothing',
    'image' => [
        'src' => 'http://demo.woothemes.com/56/2013/06/T_2_front.jpg',
    ]
];
```

## Obtener un producto

El siguiente endpoint nos ayuda a obtener toda la lista de productos.

`GET /wp-json/wc/v2/products`

Opcionalmente, se le puede pasar una [variedad de parametros](http://woocommerce.github.io/woocommerce-rest-api-docs/?php#list-all-products) como:

- page
- per_page (máximo número de items en el resultado. Por default es 10)
- search (filtar por un término de búsqueda)
- sku
- in_stock

## Actualizar un producto

Para actualizar un producto, es necesario conocer su {id} y hacer una petición `PUT` .

`PUT /wp-json/wc/v2/products/<id>`

```php
<?php
$data = [
  'regular_price' => '24.54'
];

$woocommerce->put('products/794', $data);
```

## Batch update products

Esto ayuda a crear, actualizar y eliminar varios productos por lotes.

`POST /wp-json/wc/v2/products/batch`

```php
<?php
$data = [
    'create' => [
        [
            'name' => 'Woo Single #1',
            'type' => 'simple',
            'regular_price' => '21.99',
            'virtual' => true,
            'downloadable' => true,
            'downloads' => [
                [
                    'name' => 'Woo Single',
                    'file' => 'http://demo.woothemes.com/56/2013/06/cd_4_angle.jpg'
                ]
            ],
            'categories' => [
                [
                    'id' => 11
                ],
                [
                    'id' => 13
                ]
            ],
            'images' => [
                [
                    'src' => 'http://demo.woothemes.com/56/2013/06/cd_4_angle.jpg',
                    'position' => 0
                ]
            ]
        ],
        [
            'name' => 'New Premium Quality',
            'type' => 'simple',
            'regular_price' => '21.99',
            'description' => 'Pellentesque habitant morbi tristique senectus et netus',
            'short_description' => 'Pellentesque habitant morbi tristique senectus et',
            'categories' => [
                [
                    'id' => 9
                ],
                [
                    'id' => 14
                ]
            ],
            'images' => [
                [
                    'src' => 'http://demo.woothemes.com/56/2013/06/T_2_front.jpg',
                    'position' => 0
                ],
                [
                    'src' => 'http://demo.woothemes.com/56/2013/06/T_2_back.jpg',
                    'position' => 1
                ]
            ]
        ]
    ],
    'update' => [
        [
            'id' => 799,
            'default_attributes' => [
                [
                    'id' => 6,
                    'name' => 'Color,
                    'option' => 'Green'
                ],
                [
                    'id' => 0,
                    'name' => 'Size',
                    'option' => 'M'
                ]
            ]
        ]
    ],
    'delete' => [
        794
    ]
];
```

Lo interesante de la estructura, es que se tiene que especificar la acción a realizar mediante los keys `create`, `update`, `delete`, y dentro de cada clave, enviar un arreglo multidimensional con las propiedades a modificar.

Con esta introducción a la API, es posible realizar las acciones más sencillas de creación de productos.
