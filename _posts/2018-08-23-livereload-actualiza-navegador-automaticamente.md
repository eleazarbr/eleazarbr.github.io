---
layout: post
current: post
cover: assets/images/cover/livereload.jpg
navigation: true
title: LiveReload actualiza el navegador automáticamente y ahorra tiempo
description: "Actualiza el navegador automáticamente con LiveReload, haz cambios en tus archivos y deja de dar refresh al navegador"
date: 2018-08-23
tags: [Computer Science, Javascript]
class: post-template
subclass: 'post'
author: eleazar
---

[LiveReload](http://livereload.com/), el país de las maravillas para los desarrolladores web, un lugar increíble donde los navegadores no necesitan un botón de Refresh.

Hace algunos meses utilicé [Browsersync](https://browsersync.io/), una herramienta similar a LiveReload, pero con más características y recuerdo que no obtenía el resultado deseado porque el navegador se actualizaba muy lento, probablemente por una mala configuración y como no disponía tiempo para adentrar en la documentación lo dejé así.

Solamente necesitaba que el navegador se actualizara automáticamente y eso es lo que hace LiveReload; supervisa los cambios en el sistema de archivos y tan pronto como se guarda un archivo, se preprocesará según sea necesario y el navegador se actualizará. También, cuando cambias un archivo CSS o una imagen, el navegador se actualiza al instante sin volver a cargar la página.

- Para más información: [livereload.com/](http://livereload.com/#compilers).
- [LiveReload plugins](https://github.com/livereload/livereload-plugins)
- [LiveReload source code](https://github.com/livereload/LiveReload)
- [LiveReload getting started](http://livereload.com/#getting-started)

Para utilizar en un proyecto Jekyll, simplemente se agrega en el `Gemfile` y se instala mediante `bundle install`.

```ruby
group :jekyll_plugins do
  # ... others plugins ...
  gem 'jekyll-livereload'
end
```

<iframe src="https://giphy.com/embed/1BG0hiW7taCxS6tCEX" width="480" height="122" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/1BG0hiW7taCxS6tCEX"></a></p>

