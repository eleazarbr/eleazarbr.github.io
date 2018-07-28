---
layout: post
current: post
cover: assets/images/cover/programmer.png
navigation: true
title: Hacer deploy de Jekyll a GH Pages con plugins y TravisCI
date: 2018-07-28
tags: Template
class: post-template
subclass: 'post'
author: eleazar
---

Después de probar muchas soluciones inefectivas para hacer deploy del sitio en GH-Pages, por la cuestión que Jekyll en GitHub corre en safe-mode y no es posible instalar _plugins_ por razones de seguridad, llegué al siguiente [post de Josh Frankel](http://joshfrankel.me/blog/deploying-a-jekyll-blog-to-github-pages-with-custom-plugins-and-travisci/) para hacer deploy utilizando [TravisCI](http://travis-ci.org/).

Para no re-escribir el post, lo más importante es lo siguiente:

## Configuración de ramas en Github

Lo primero es crear una nueva rama de `master` llamada `source`. (El nombre no es importante, pero elegir algo que recordarás). Una vez creada la rama `source`, ya no será necesario usar la rama `master` para este repositorio.

Ahora `source` se convertirá en el lugar donde se escriben los post del blog (todo el proyecto en sí), mientras que en `master` reside el sitio estático que carga Github Pages, `master` solo incluirá el directorio `_site`.

Se recomienda cambiar la rama predeterminada del repositorio a `source` y opcionalmente, proteger la rama para evitar que se elimine o se sobrescriba accidentalmente.

## Token de acceso personal de Github

Ahora, es necesario darle a TravisCI algo para autenticarnos y que pueda realizar `git push` por nosotros. Para hacer esto, creemos un token de acceso personal.

Esto se genera en [GitHub Personal Token](https://github.com/settings/tokens/new), otorgándole sólamente permisos de `repo`. Asegúrate de copiar el nuevo token en el portapapeles porque después no será posible volver a visualizarlo.

## Configuración en Jekyll

Necesitamos configurar algunas cosas para que nuestro sitio Jekyll funcione adecuadamente con TravisCI.

Primero agrega lo siguiente al `Gemfile`.

```ruby
source "https://rubygems.org"
ruby RUBY_VERSION

# Necesitaremos rake para construir el sitio en TravisCI
gem "rake", "~> 12"
gem "jekyll"

# Ejemplo Opcional: Agregar los plugins dentro del grupo jekyll_plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-paginate-v2"
  gem "jekyll-seo-tag"
  gem "jekyll-compose", "~> 0.5"
  gem "jekyll-redirect-from"
end
```

Además, vamos excluir ciertos archivos y directorios para que no terminen en la rama `master` una vez que TravisCI construya de la rama `source`.

Usando el ejemplo anterior, el `_config.yml` podría verse así:

```yaml
# otras configuraciones
# ...

# Los plugins del grupo jekyll_plugin del archivo Gemfile
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-paginate-v2
  - jekyll-seo-tag
  - jekyll-compose
  - jekyll-redirect-from

# Exclude los siguientes archivos del proceso de construcción.
exclude:
  - vendor
  - Gemfile
  - Gemfile.lock
  - LICENSE
  - README.md
  - Rakefile
```

Por último, y lo más importante, necesitamos un archivo `.travis.yml` para que TravisCI sepa que queremos que se ejecute.

```yaml
language: ruby
rvm:
- 2.3.1
install:
- bundle install
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN
  local_dir: _site
  target_branch: master
  on:
    branch: source
```

De lo anterior:

`github_token: $GITHUB_TOKEN` : Nuestro token de acceso personal. Esta es actualmente una referencia a una variable de entorno que se agregará en la sección de configuración de TravisCI a continuación.

Todo esto básicamente dice: "Usando la rama `source` de este repositorio, inserte todos los archivos encontrados dentro del directorio `_site` en la rama `master` del repositorio". Esto solo funciona al usar el siguiente `Rakefile` para construir manualmente el sitio.

```ruby
# filename: Rakefile
task :default do
  puts "Running CI tasks..."

  # Ejecuta el comando jekyll build para producción
  # TravisCI ahora tendrá un directorio con nuestros
  # archivos estáticos generados.
  sh("JEKYLL_ENV=production bundle exec jekyll build")
  puts "Jekyll successfully built"
end
```

El `Rakefile` de arriba se ejecuta en cada compilación. Es posible agregar otras comprobaciones que se requerirán que estas pasen sin fallas antes de que TravisCI terminé la construcción.

## Configuración en TravisCI

Ahora que tenemos nuestra configuración del sitio, se debe conectarla a TravisCI.

Para ello, se ingresa a TravisCI iniciando sesión con su cuenta github. Esto le dará una lista de todos sus repositorios. Selecciona el repositorio que debe estar en el formato de `username.github.io` y habilítalo.

Finalmente, en la página de configuración de TravisCI se crea una nueva variable de entorno llamada `GITHUB_TOKEN`.

¡Eso es todo!
