---
layout: post
current: post
cover: assets/images/cover/mini-crm.png
navigation: true
title: Mini-CRM con Laravel 5.6 y AdminBSB
date: 2018-07-23
tags: [Computer Science, Web Development, Projects]
class: post-template
subclass: 'post'
author: eleazar
---

Objetivo: Construir un mini CRM utilizando [Laravel 5.6](https://laravel.com/) y [AdminBSB](https://gurayyarar.github.io/AdminBSBMaterialDesign/).

* URL del proyecto en GitHub: [Laravel MiniCRM](https://github.com/eleazarbr/laraveldaily-minicrm)
* Estado del proyecto: **En progreso**

Herramientas usadas:

- [Laravel 5.6](https://laravel.com/)
- [Laravel Mix](https://laravel.com/docs/5.6/mix)
- [AdminBSB](https://gurayyarar.github.io/AdminBSBMaterialDesign/)

AdminBSB es un admin panel _libre_ hecho con _Bootstrap 3.x_ y _Material Design_.

- [Acerca del proyecto](#acerca-del-proyecto)
- [Instalación](#instalaci%C3%B3n)
- [Instalación de AdminBSB en otro proyecto con Laravel Mix](#instalaci%C3%B3n-de-adminbsb-en-otro-proyecto-con-laravel-mix)

### Acerca del proyecto

El proyecto contiene las siguientes caracteristicas:

- [x] _Autenticación básica_ de Laravel, posibilidad de iniciar sesión como administrador o usuario, se removio la habilidad para registrarse.
- [x] Uso de _seeders_ para crear primer usuario con email "admin@admin.com" y contraseña "password".
- [x] Tabla de `Employees` con campos: First name (required), last name (required), Company (foreign key a Companies), email, phone.
- [x] Tabla `Companies` contiene campos: Name (required), email, logo (min 100×100) y website.
- [x] Funcionalidad _CRUD_ para Companies y Employees.
- [x] Uso de _migraciones_ para crear el esquema de la base de datos.
- [x] Logos de las empresas se almacenan en la carpeta `storage/app/public` y son accesibles desde `public`.
- [x] Uso de validaciones de Laravel en clases `Request`.
- [x] ~~Uso de paginación de Laravel para mostrar 10 recursos por página~~. Uso de la librería [Datatables.net](https://datatables.net/).
- [x] Uso del tema front-end AdminBSB. (pendiente aplicar a todas las vistas)
- [x] Notificación por Email, usando Mailtrap.
- [ ] El proyecto es multi-lenguaje (usando la carpeta `resources/lang`).
- [ ] Pruebas básicas con `PHPUnit`.
{: style='list-style-type: none'}

### Instalación

1. Clona el repo `git clone https://github.com/eleazarbr/laraveldaily-minicrm`
2. Crea una base de datos MySQL para el proyecto
	* ```mysql -u root -p```,
	* ```create database minicrm;```
	* ```\q```
3. Desde el directorio raíz ejecuta `cp .env.example .env`
4. Configura tu archivo `.env`
5. Ejecuta `composer install` desde el directorio raíz
6. Desde el directorio raíz ejecuta `php artisan key:generate`
7. Desde el directorio raíz ejecuta `php artisan migrate`
8. Desde el directorio raíz ejecuta `php artisan make:auth`
9. Desde el directorio raíz ejecuta `composer dump-autoload`
10. Desde el directorio raíz ejecuta `php artisan db:seed`
11. Configura un virtual host o ejecuta `php artisan serve`

### Instalación de AdminBSB en otro proyecto con Laravel Mix

<iframe width="560" height="315" src="https://www.youtube.com/embed/-cmCydc2YFc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
