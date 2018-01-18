---
title:  "Verificar una fecha de expiración"
date:   2018-01-17 15:04:23
categories: [backend]
tags: [laravel, php]
---
A veces es necesario verificar la fecha de expiración de algo, por ejemplo un token. 

En este blurb sencillo, comparto la funcion que utiliza Laravel para verificar si su password reset token ha expirado.

Por otro lado, desconocía la existencia de la función `isPast` de [Carbon](http://carbon.nesbot.com/), por lo que cual, es necesario volver a revisar su [documentación](http://carbon.nesbot.com/docs/).

La función `tokenExpired($created_at, $token)` que puede ser encontrada en la carpeta vendor de la clase `DatabaseTokenRepository` en el `namespace Illuminate\Auth\Passwords;` ejecuta lo siguiente:

```php
return Carbon::parse($createdAt)->addSeconds($this->expires)->isPast();
```

Entonces, por ejemplo:

```php
$created_at = DB::table('password_resets')->first()['created_at'];
// => 2018-01-08 09:59:26

// Carbon::now();
// => 2018-01-08 11:03:05

Carbon::parse($created_at)->addSeconds(config('auth.passwords.users.expire'*60))->isPast()
// => true (con una fecha de expiración de 1 hora)
```