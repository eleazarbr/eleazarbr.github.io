---
layout: post
current: post
cover: assets/images/cover/email-notification.png
navigation: true
title: "Laravel 5.6: Enviar notificaciones por correo con Mailtrap.io"
description: En este ejemplo vamos a enviar una notificación por correo electrónico utilizando Mailtrap en Laravel 5.6
date: 2018-08-14
tags: [Technology, Laravel]
class: post-template
subclass: 'post'
author: eleazar
---

[Mailtrap](https://mailtrap.io) es una solución que permite probar notificaciones por correo electrónico sin enviarlas a los usuarios reales de la aplicación. También permite ver todos sus correos electrónicos en línea, reenviarlos a su buzón habitual, compartirlos con el equipo y más. [Ver cómo funciona](https://mailtrap.io/how-it-works).

Con el conocimiento de que es y como funciona Mailtrap, al ingresar a nuestra cuenta, guardamos las credenciales SMTP para añadirlas en el archivo `.env`.

```
MAIL_DRIVER=smtp
MAIL_HOST= smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=smtp.mailtrap.username
MAIL_PASSWORD=smtp.mailtrap.password
MAIL_ENCRYPTION=null
```

Con los recursos que proporciona Laravel sobre [Notificaciones](https://laravel.com/docs/5.6/notifications), vamos a utilizar el método `notify`, el cual espera una instancia de notificación.

```php
$request->user()->notify(new SimpleNotification);
```

> `notify` se encuentra implementada en el trait `Notifiable` -> `RoutesNotifications` del modelo `User`.

El siguiente comando artisan `php artisan make:notification SimpleNotification`, creará una nueva clase en el carpeta Notifications. Con la ejecución del código anterior, las notificaciones ya deben de llegar a la bandeja de entrada en Mailtrap.

Si se requiere personalizar el contenido de la notificación, pasamos un arreglo de la siguiente forma:

```php
$request->user()->notify(new SimpleNotification([
  'subject' => 'Asunto: Notificación simple',
  'action' => route('user.edit', $id),
  'gretting' => 'Gracias por usar nuestra aplicación!',
]));
```

Y en la clase `SimpleNotification`, modificar:

```php
    protected $data;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line($this->data['subject'])
                    ->action('Más información', $this->data['url'])
                    ->line($this->data['gretting']);
    }
```

Finalmente, cualquier otro texto debe ser modificado directamente en la vista.

Dado que Mailtrap es concebido para ser utilizado en un ambiente de desarrollo y si tienes una aplicación que envía muchos correos, Mailtrap tiene una restricción que solamente es posible enviar 2 emails por segundo. Entonces, si esperas más de 5 correos electrónicos y no tienes la opción de cambiar Mailtrap, intenta:

```php
foreach ($emails as $email) {
     ...

     Mail::send(...$email);

     if (env('MAIL_HOST', false) == 'smtp.mailtrap.io') {
         sleep(1); // o usleep (500000) para medio segundo
     }
}
```

El código anterior solo debe ejecutarse en un entorno de prueba.
