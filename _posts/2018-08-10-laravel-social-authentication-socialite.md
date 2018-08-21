---
layout: post
current: post
cover: assets/images/cover/social-auth.jpg
navigation: true
title: "Laravel 5.6: Autenticación social con Laravel Socialite"
description: Para iniciar sesión en Laravel mediante medios sociales como Facebook, Twitter, Github, Google, se recomienda utilizar Laravel Socialite.
date: 2018-08-10
tags: [Computer Science, Laravel]
class: post-template
subclass: 'post'
author: eleazar
---

Con una nueva instalación de Laravel y despues de ejecutar `php artisan make:auth` para generar el sistema de autenticación básico de Laravel, ahora vamos configurar una autenticación Social OAuth.

Contenido:
- [Configuración](#configuraci%C3%B3n)
- [Rutas](#rutas)
- [Migraciones](#migraciones)

Primero instalar el paquete `laravel/socialite` usando Composer:

```bash
composer require laravel/socialite
```

Laravel Socialite es una manera simple y conveniente de autenticarse con proveedores OAuth. Actualmente soporta autenticación con Facebook, Twitter, LinkedIn, Google, Github y Bitbucket. Para este ejemplo, se va a utilizar Google para iniciar sesión.

> Puedes ver más proveedores en [Socialite Providers](https://socialiteproviders.github.io/)

## Configuración

Antes de utilizar Socialite, se debe agregar credenciales para los servicios OAuth de la aplicación. Las credenciales deben colocarse en el archivo de configuración `config/services.php`, y deben usar la clave facebook, twitter, linkedin, google, github o bitbucket, según los proveedores que requiera la aplicación. Por ejemplo:

```php
'google' => [
    'client_id' => env('GOOGLE_ID'), // Your Google Client ID
    'client_secret' => env('GOOGLE_SECRET'), // Your Google Client Secret
    'redirect' => env('GOOGLE_REDIRECT'), // Google Redirect if Success
],
```

de igual manera en el archivo `.env`.

```
GOOGLE_ID=YOUR_APP_ID
GOOGLE_SECRET=YOUR_APP_SECRET
GOOGLE_REDIRECT=http://localhost:8000/login/google/callback
```

Para obtener las credenciales:

1. Ir a [https://console.developers.google.com](https://console.developers.google.com)
2. Pestaña de credenciales
3. Crear una credencial "ID de cliente OAuth".

Finalmente, es necesario activar Google+ API en [https://console.developers.google.com](https://console.developers.google.com), en la pestaña de Biblioteca.

![Activate Google+ API]({{ "/assets/images/blog-content/google+api.png" | relative_url }})

## Rutas

Ahora ya es posible autenticar usuarios! Se necesitan dos rutas: una para redireccionar al usuario al proveedor OAuth y otra para recibir la devolución de llamada del proveedor después de la autenticación.

```php
// web.php

Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider')->name('login.socialite');
Route::get('login/{provider}/callback', 'Auth\LoginController@handleProviderCallback')->name('login.callback');
```

## Migraciones

También necesitamos ejecutar las migraciones para crear la tabla de usuarios, pero antes de eso debemos modificarla para almacenar el token de OAuth. Para ello, vamos a editar las migración `CreateUsersTable` en `database/migrations`, quedaría así:

```php
public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password')->nullable(); // Cambiar a nullable
        $table->string('token'); // OAuth Token
        $table->rememberToken();
        $table->timestamps();
    });
}
```

Recuerda agregar el atributo `token` al arreglo `$fillable` en el modelo `User` para evitar la excepción de asignación de Eloquent.

```php
protected $fillable = [
    'name', 'email', 'password', 'token',
];
```

Solo falta añadir a la vista `login.blade.php` un simple botón para iniciar sesión con Google.

```php
<a class="btn btn-block btn-social btn-google" href="{!! route('login.socialite', ['provider' => 'google']) !!}">
  <i class="fa fa-google-plus"></i> Iniciar sesión G Suite
</a>
```

Y agregar las funciones al `LoginController.php`

```php
/**
 * Redirect the user to the GitHub authentication page.
 *
 * @return \Illuminate\Http\Response
 */
public function redirectToProvider($provider)
{
    return Socialite::driver($provider)->redirect();
}
/**
 * Obtain the user information from GitHub.
 *
 * @return \Illuminate\Http\Response
 */
public function handleProviderCallback($provider)
{
    $user = Socialite::driver($provider)->user();
    $user = User::updateOrCreate([
            'email' => $user->email
        ],[
            'token' => $user->token,
            'name'  =>  $user->name
        ]);

    auth()->login($user, true);
    return redirect()->to($this->redirectPath());
}
```

La función de `redirect()` se encarga de enviar al usuario al proveedor OAuth, mientras que el método `user()` leerá la solicitud entrante y recuperará la información del usuario del proveedor.

En el método `handleProviderCallback($provider)` se crea o se actualiza un nuevo usuario cuando sea redireccionado después de una autenticación exitosa desde la página OAuth.

¡Es todo!
