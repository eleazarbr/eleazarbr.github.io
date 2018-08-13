---
layout: post
current: post
cover: assets/images/cover/ecommerce.png
navigation: True
title: ¿Cómo hacer una request básica con la REST API de WooCommerce?
description: En este artículo vamos a utilizar la REST API de WooCommerce 2.6 para obtener todos los productos en formato JSON.
date: 2018-08-01
tags: [Computer Science, WooCommerce]
class: post-template
subclass: 'post'
author: eleazar
---

De acuerdo a la buena documentación de la [REST API](https://docs.woocommerce.com/document/woocommerce-rest-api/) de [WooCommerce](https://woocommerce.com/), prácticamente lo que se necesita para empezar es lo siguiente:

- WooCommerce 2.6+.
- WordPress 4.4+.
- Acceder mediante HTTP o HTTPS, HTTPS se recomienda más.
- Activar los permalinks en WordPress: **Settings > Permalinks**. *Con los permalinks de default no funcionará*.
- Activar la opción REST API en **WooCommerce > Settings > Advanced > Legacy API**.
- [Generar API Keys](http://woocommerce.github.io/woocommerce-rest-api-docs/#rest-api-keys) en **WooCommerce > Settings > Advanced > REST API**.
- Elegir el scope para cada llave (lectura y/o escritura) y asignar a un usuario.

Listo, con estas Keys (_Consumer Key_ y _Consumer Secret_) es posible realizar la siguiente prueba.

## Testing API - Una request básica

En un ambiente local tengo un solo producto. La [API de productos](http://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties) permite crear, ver, actualizar y eliminar productos individuales o por lotes.

> HTTP Request **GET**: Listar todos los productos

```
/wp-json/wc/v2/products
```

Para esta prueba se utilizó [Postman](https://www.getpostman.com/apps), pero antes es necesario configurar la pestaña de _Authorization_.

- Elegir _basic auth_
- Agregar nuestro _consumer key_ y _secret key_ en los campos de _username_ y _password_.

![Postman]({{ "/assets/images/blog-content/postman.png" | relative_url }})

Una vez hecho lo anterior, ya es posible hacer la petición y ver que se obtiene un estado HTTP `200 OK` (successful). Y finalmente, se realizó una pequeña prueba con la API de WooCommerce.

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

- La API facilita un Index con información de todos los endpoints, no necesita autenticación para acceder: `/wp-json/wc/v2`
- [Guía paso a paso. Test if the API is working.](https://github.com/woocommerce/woocommerce/wiki/Getting-started-with-the-REST-API)
- [Documentación para desarrolladores.](http://woocommerce.github.io/woocommerce-rest-api-docs/)
- [Tutorial Setting Up Basic Auth.](https://code.tutsplus.com/es/tutorials/wp-rest-api-setting-up-and-using-basic-authentication--cms-24762)

## Librerías y herramientas

- [PHP Library](https://github.com/woocommerce/wc-api-php)
- [Node.js Library](https://www.npmjs.com/package/woocommerce-api)
- [Python Library](https://pypi.python.org/pypi/WooCommerce)
- [Ruby Library](https://rubygems.org/gems/woocommerce_api)
- [Postman](https://www.getpostman.com/)

Si utilizas Laravel, te recomiendo el paquete [pixelpeter/laravel5-woocommerce-api-client](https://github.com/pixelpeter/laravel5-woocommerce-api-client) que puede ser instalado vía composer. Es un wrapper para la API y con los datos obtenidos anteriormente se agregan al archivo `.env`.

```
WOOCOMMERCE_STORE_URL=http://example.org
WOOCOMMERCE_CONSUMER_KEY=ck_your-consumer-key
WOOCOMMERCE_CONSUMER_SECRET=cs_your-consumer-secret
WOOCOMMERCE_VERIFY_SSL=false
WOOCOMMERCE_VERSION=v2
WOOCOMMERCE_WP_API=true
WOOCOMMERCE_WP_QUERY_STRING_AUTH=false
WOOCOMMERCE_WP_TIMEOUT=15
```

Por ejemplo, para ver el Index con la información de todos los endpoints disponibles:

```php
use Woocommerce;

return Woocommerce::get('');
```

Es todo.

