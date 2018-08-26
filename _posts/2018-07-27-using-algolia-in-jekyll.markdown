---
layout: post
current: post
cover: assets/images/cover/search.png
navigation: True
title: ¿Cómo usar Algolia en Jekyll?
date: 2018-07-27
tags: [Computer Science, Web Development]
class: post-template
subclass: 'post'
author: eleazar
---

Algolia es un servicio que hace que la búsqueda avanzada sea muy sencilla. Está bien documentado y es rapidísimo. Puedes ver algunos ejemplos impresionantes en su [sitio](https://www.algolia.com/).

Para usar Algolia en Jekyll, se utilizará el plugin `jekyll-algolia` que permite enviar contenidos a nuestro index.

### Requerimientos

- Jekyll >= 3.6.0
- Ruby >= 2.3.0
- [Bundler](http://bundler.io/)

### Instalación

Agregar `jekyll-algolia` en el archivo `Gemfile`

```bash
source 'https://rubygems.org'

gem 'jekyll', '~> 3.6'

group :jekyll_plugins do
  gem 'jekyll-algolia'
end
```

Ejecutar `bundle install` para actualizar las dependencias.

### Configuración

Ahora es necesario proporcionar las credenciales de Algolia para empezar a indexar el sitio.

Si aún no tienes una cuenta de Algolia, puedes abrir un Community plan gratuito [aquí](https://www.algolia.com/users/sign_up/hacker). Una vez iniciado sesión, puedes obtener las credenciales en el dashboard.

Con las credenciales, se debe definir el `application_id` e `index_name` dentro del archivo `_config.yml` como este:

```yml
# _config.yml

algolia:
  application_id: your_application_id
  index_name:     jekyll # You can replace that with whatever name you want
```

### Uso

Con las credenciales establecidas, ahora se puede actualizar el index mediante el siguiente comando:

```bash
ALGOLIA_API_KEY='your_admin_api_key' bundle exec jekyll algolia
```

`ALGOLIA_API_KEY` es una clave de administrador. Tiene acceso de escritura al index, por lo que es posible enviar nuevos datos. Por este motivo se establece en línea de comando y no en el archivo `_config.yml`, se debe mantener en secreto y no cargarla al sistema de control de versiones.

El plugin solo se encarga de extraer los datos y llevarlos a un índice en Algolia. Ahora, sólamente es necesario crear el front-end que permita a los usuarios buscar esos datos.

Más información:

- [Algolia for Jekyll](https://community.algolia.com/jekyll-algolia/getting-started.html)

### Issues

Si por alguna razón tu sitio Jekyll utiliza el plugin desactualizado `jekyll-paginate` tendrás el siguiente error: `jekyll 3.6.2 | Error:  Infinity`, este problema se trata en el siguiente Issue en GitHub y prácticamente lo que se tiene que hacer es cambiar al plugin a `jekyll-paginatev2`

- [FloatDomainError: Infinity when trying to build an index](https://github.com/algolia/jekyll-algolia/issues/64)

