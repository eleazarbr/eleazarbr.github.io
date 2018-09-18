---
layout: post
current: post
cover: assets/images/cover/docker.png
navigation: true
title: Docker - Introducción
description:
date: 2018-09-10
tags: [Computer Science, Laravel]
class: post-template
subclass: 'post'
author: eleazar
---

Docker es una plataforma que permite separar las aplicaciones de la infraestructura, reduciendo el tiempo entre escribir código y administrar producción.

Una ventaja que me gusta es que deja el equipo limpio, al no instalar tantas cosas, ni cambiar la configuración del sistema.

### Table of contents
- [Table of contents](#table-of-contents)
- [Requerimientos](#requerimientos)
- [Terminología](#terminolog%C3%ADa)
- [Run your containers](#run-your-containers)
- [Más información](#m%C3%A1s-informaci%C3%B3n)

### Requerimientos

- [Instalar Docker >= 17.12](https://www.docker.com/products/docker-engine)

### Terminología

Más información: [Docker glossary](https://docs.docker.com/glossary/)

- **Service**: Es una definición de como quieres ejecutar los containers de tu aplicación, define que imagen ejecutar.
- **Image**: Es una colección ordenada de instrucciones que se usarán en el tiempo de ejecución de un container. Se pueden almacenar local o remotamente. Son de diferentes tamaños porque en esencia son el sistema completo.
- **Container**: es una instancia de una imagen, es stand-alone, es una pieza ejecutable de software que contiene todo lo que necesitas para: code, runtime, herramientas del sistema, librerías del sistema, configuraciones.
- **Volumes**: es un directorio designado dentro de uno o más containers, estan diseñados para conservar los datos, independientemente del ciclo de vida del container. Hay tres tipos de volumes: _host, anonymous y named_.

### Run your containers

`docker-compose up -d`

### Más información

- [Docker for development: Getting started (Part 1)](https://blog.pusher.com/docker-for-development-getting-started/)

