---
layout: post
current: post
cover: assets/images/cover/coderwall.jpg
navigation: true
title: "Coderwall Tip: Mixed content issue - Content must be served as HTTPS in Laravel"
date: 2018-07-29
tags: [Computer Science, Coderwall]
class: post-template
subclass: 'post'
author: eleazar
---

Quiero recordar lo siguiente:

> Cuando se pasa de http a https, generalmente se experimenta el problema: Mixed content issue - Content must be served as HTTPS.

Entonces, primero modificar `APP_URL` en el archivo `.env`, con ésto, si utilizamos el helper `assets` ya no debe dar ningún problema con las URLs.

```
APP_URL=https://mydomain.com
```

Finalmente, agregar lo siguiente al inicio de `api.php` o `web.php`:

```php
if (App::environment('production')) {
    URL::forceScheme('https');
}
```
