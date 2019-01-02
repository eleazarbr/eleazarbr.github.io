---
layout: post
current: post
cover: assets/images/cover/gitlab.jpg
navigation: true
title: Configurando Jekyll en GitLab Pages
description: En esta entrada se va a configurar un proyecto local de Jekyll para alojarse en GitLab Pages.
date: 2018-08-18
tags: [Technology, Jekyll]
class: post-template
subclass: 'post'
author: eleazar
---

[GitLab Pages](https://about.gitlab.com/features/pages/) es un servicio para crear y alojar websites gratis para tus proyectos, donde es posible utilizar generadores de sitios estáticos, como Jekyll, Middleman, Hexo, Hugo, etc. y conectarlo con un dominio.

Para cargar un proyecto Jekyll nuevo o existente con GitLabs Pages vamos a comenzar desde un proyecto Jekyll local:

- [Instalar](https://jekyllrb.com/docs/installation/) Jekyll.
- Usar `jekyll new` para crear un nuevo Proyecto Jekyll.
- Agregar el [archivo](https://gitlab.com/pages/jekyll/blob/master/.gitlab-ci.yml) `.gitlab-ci.yml` a la raíz del proyecto.
- `Push` el repositorio con los cambios a GitLab.

### GitLab CI

La clave de GitLab Pages es el archivo `.gitlab-ci.yml`, algo que le otorga un control absoluto sobre el proceso de compilación. Puedes ver la creación del sitio web en vivo siguiendo los rastros del job de CI.

En simple forma el archivo `.gitlab-ci.yml` se ve así:

```php
image: ruby:2.3

variables:
  JEKYLL_ENV: production

pages:
  script:
  - bundle install
  - bundle exec jekyll build -d public
  artifacts:
    paths:
    - public
  only:
  - master
```

Recuerda que debes esperar a que el sitio se construya antes de que puedas ver sus cambios. Puedes rastrear la compilación en la pestaña Pipelines.

### Visita tu sitio!

Abre el navegador y visita https://username.gitlab.io/projectname o https://username.gitlab.io dependiendo si es una página de proyecto o página de usuario.

