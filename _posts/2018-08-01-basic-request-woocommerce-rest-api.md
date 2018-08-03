---
layout: post
current: post
cover: assets/images/cover/ecommerce.png
navigation: True
title: ¿Cómo hacer una request básica con la REST API de WooCommerce?
date: 2018-08-01
tags: [Computer Science, WooCommerce]
class: post-template
subclass: 'post'
author: eleazar
---

De acuerdo a la buena documentación de la [REST API](https://docs.woocommerce.com/document/woocommerce-rest-api/) de [WooCommerce](https://woocommerce.com/), prácticamente lo que se necesita para empezar es lo siguiente:

- Activar los permalinks en WordPress: **Settings > Permalinks**.
- Activar la opción REST API en **WooCommerce > Settings > Advanced > Legacy API**.
- Generar las API Keys en **WooCommerce > Settings > Advanced > REST API**.
- Elegir el scope de cada llave (lectura y/o escritura) y asignar a un usuario.
- Listo, con estas Keys es posible realizar la siguiente prueba.

## Testing API

Una request básica: en un ambiente local tengo un solo producto. La [API de productos](http://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties) permite crear, ver, actualizar y eliminar productos individuales o por lotes.

> HTTP Request **GET**: Listar todos los productos

```
/wp-json/wc/v2/products
```

Voy a realizar la prueba con [Postman](https://www.getpostman.com/apps), pero antes es necesario configurar la pestaña de _Authorization_.

- Elegir _basic auth_
- Agregar nuestro _consumer key_ y _secret key_ en los campos de _username_ y _password_.

![Postman]({{ "/assets/images/blog-content/postman.png" | relative_url }})

Listo, con lo anterior ya es posible hacer la petición y ver que se obtiene un código 200 success.

```json
[
    {
        "id": 19,
        "name": "Producto de prueba",
        "slug": "producto-de-prueba",
        "permalink": "http://woocommerce.local/product/producto-de-prueba/",
        "date_created": "2018-08-03T17:00:43",
        "date_created_gmt": "2018-08-03T17:00:43",
        "date_modified": "2018-08-03T17:00:43",
        "date_modified_gmt": "2018-08-03T17:00:43",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Testing API</p>\n",

        ...
    }
]
```

## Recursos de utilidad

- [Test if the API is working. Guía paso a paso](https://github.com/woocommerce/woocommerce/wiki/Getting-started-with-the-REST-API).
- [Documentación para desarrolladores](http://woocommerce.github.io/woocommerce-rest-api-docs/)
- [PHP Library](https://github.com/woocommerce/wc-api-php)
- [Node.js Library](https://www.npmjs.com/package/woocommerce-api)
- [Python Library](https://pypi.python.org/pypi/WooCommerce)
- [Ruby Library](https://rubygems.org/gems/woocommerce_api)
- [Tutorial Setting Up Basic Auth](https://code.tutsplus.com/es/tutorials/wp-rest-api-setting-up-and-using-basic-authentication--cms-24762)
