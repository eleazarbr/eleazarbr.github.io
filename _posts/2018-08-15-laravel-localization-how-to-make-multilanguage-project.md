---
layout: post
current: post
cover: assets/images/cover/langs.jpg
navigation: true
title: "Laravel 5.6: Localization. Cómo hacer un proyecto multilenguaje"
description: Con el siguiente ejemplo será posible implementar traducciones en las vistas utilizando Laravel 5.6 Localization.
date: 2018-08-15
tags: [Computer Science, Laravel]
class: post-template
subclass: 'post'
author: eleazar
---

Las funciones de localización de Laravel proporcionan una forma conveniente de obtener cadenas de texto en varios idiomas, lo que permite admitir fácilmente varios idiomas dentro de la aplicación.

Las cadenas de texto se almacenan en archivos dentro del directorio `resources/lang`. Dentro de este directorio debe haber un subdirectorio para cada idioma admitido por la aplicación, por ejemplo:

```
/resources
    /lang
        /en
            messages.php
        /es
            messages.php
```

Entonces, es necesario traducir cada linea a su idioma correspondiente.

```php
<?php

// resources/lang/es/messages.php

return [
    'welcome' => 'Bienvenido a nuestra aplicación'
];
```

- [Crear un archivo locale.php en la carpeta config](#crear-un-archivo-localephp-en-la-carpeta-config)
- [Crear un controlador LanguageController y su ruta](#crear-un-controlador-languagecontroller-y-su-ruta)
- [Añadir select para lenguajes en el front-end](#a%C3%B1adir-select-para-lenguajes-en-el-front-end)
- [Crear un middleware: LocaleMiddleware](#crear-un-middleware-localemiddleware)

Para este ejemplo vamos a crear un archivo `locale.php` para administrar los idiomas de la aplicación:

## Crear un archivo locale.php en la carpeta config

```php
# locale.php
<?php

return [

    /*
     * Mostrar el seleccionador de lenguajes
     *
     * @var bool
     */
    'status' => true,

    /*
     * Lenguajes disponibles
     *
     * Agrega el código de lenguaje al siguiente array
     * El código debe tener el mismo nombre que en la carpeta de lenguajes
     * Asegurate de que estén en orden alfabetico
     *
     * El seleccionador de lenguaje no se verá en front si solo hay un lenguaje en el array
     *
     * @var array
     */
    'languages' => [
        /*
         * Key is the Laravel locale code
         * Index 0 del sub-array es el Carbon locale code
         * Index 1 del sub-array es el PHP locale code para setlocale()
         * Index 2 del sub-array es true o false si usa RTL (right-to-left) css para el lenguaje
         */

        'en'    => ['en', 'en_US', false],
        'es'    => ['es', 'es_ES', false],
    ],
];
```

## Crear un controlador LanguageController y su ruta

El siguiente paso es crear un controlador simple que almacene el lenguaje en la sesión:


```php
# LanguageController.php

/**
 * @param $lang
 *
 * @return \Illuminate\Http\RedirectResponse
 */
public function swap($lang)
{
    // Almacenar el lenguaje en la session
    session()->put('locale', $lang);
    return redirect()->back();
}
```

Su respectiva ruta:

```php
# web.php

// Switch entre los lenguajes incluidos
Route::get('lang/{lang}', 'LanguageController@swap')->name('lang.swap');
```

## Añadir select para lenguajes en el front-end

Con lo anterior, ahora es posible agregar un elemento en el front-end para poder seleccionar un lenguaje.

```html
<!-- Languages -->
@if (config('locale.status') && count(config('locale.languages')) > 1)
<li class="dropdown">
    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
        <i class="material-icons">language</i>
    </a>
    <ul class="dropdown-menu">
        <li class="header">LENGUAJES</li>
            <li class="body">
                <ul class="menu tasks">
                    @foreach (array_keys(config('locale.languages')) as $lang)
                        @if ($lang != App::getLocale())
                        <li>
                            <a href="{!! route('lang.swap', $lang) !!}">
                                <h4>
                                    {!! $lang !!}
                                    <small>{!! $lang !!}</small>
                                </h4>
                            </a>
                        </li>
                        @endif
                    @endforeach
                </ul>
            </li>
        </li>
    </ul>
</li>
@endif
```

Desde el front ahora es posible seleccionar lenguajes, al dar clic el key se guardará en la sesión, si verificas los datos de tu sesión mediante `session()->all()` obtendrías el siguiente resultado:

```json
_token : "eCvbkzkkL9JfyqlVIRPOtdW7FwYsWp9uXlsK2PJE"
_previous
url	"http://localhost:8000/sesion"
_flash
old	[]
new	[]
locale	"es"
```

## Crear un middleware: LocaleMiddleware

Este middleware se va a encargar de actualizar la variable `'locale' => 'es'` que se encuentra en el archivo `app.php` en tiempo de ejecución, con el dato `locale` almacenado en la sesión, en cada petición que realice la aplicación.

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;

/**
 * Class LocaleMiddleware.
 */
class LocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*
         * Locale esta activado
         */
        if (config('locale.status')) {
            if (session()->has('locale') &&
                in_array(session()->get('locale'), array_keys(config('locale.languages')))) {

                /*
                 * Establece el locale de Laravel
                 */
                app()->setLocale(session()->get('locale'));

                /*
                 * setLocale para php. Activa ->formatLocalized() con valores localized para fecha
                 */
                setlocale(LC_TIME, config('locale.languages')[session()->get('locale')][1]);

                /*
                 * setLocale para usar locales de Carbon. Activa el diffForHumans() localized
                 */
                Carbon::setLocale(config('locale.languages')[session()->get('locale')][0]);

                /*
                 * Establece la variable de sesión si tiene soporte RTL
                 */
                if (config('locale.languages')[session()->get('locale')][2]) {
                    session(['lang-rtl' => true]);
                } else {
                    session()->forget('lang-rtl');
                }
            }
        }

        return $next($request);
    }
}
```

Lo agregamos al grupo `web` en `kernel.php`

```php
protected $middlewareGroups = [
  'web' => [
      // ... otros middleware
    \App\Http\Middleware\LocaleMiddleware::class,
  ],
```

De esta manera, ya se encuentra todo terminado, finalmente es necesario utilizar el helper `trans()` en las vistas, para obtener los strings del idioma que esta seleccionado.

```html
<!-- En lugar de -->
<h4> Lenguaje </h4>

<!-- a Language con trans() -->
<h4> {!! trans('front.menus.language') !!} </h4> <!-- Language -->
```

Esto accederá al archivo `/resources/lang/{lang}/front.php` de la carpeta `es` o `en` y obtendrá el valor del key language.

```php
# /resources/lang/en/front.php
return [
    // menus

    'menus' => [
        'language' => 'Language',
    ]

    // other translations...

];
```

