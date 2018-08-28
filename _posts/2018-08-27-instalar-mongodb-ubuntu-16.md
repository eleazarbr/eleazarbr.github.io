---
layout: post
current: post
cover: assets/images/cover/mongodb.jpg
navigation: true
title: Instalar MongoDB Community Edition en Ubuntu 16.04 LTS
description: Use este tutorial para instalar MongoDB Community Edition en sistemas LTS Ubuntu Linux usando paquetes .deb.
date: 2018-08-27
tags: [Computer Science, NoSQL]
class: post-template
subclass: 'post'
author: eleazar
---

Instalar MongoDB Community Edition en Ubuntu:

> Importante: El paquete no oficial de mongodb provisto por Ubuntu no es mantenido por MongoDB. Siempre debes usar los paquetes oficiales de MongoDB mongodb-org, que se mantienen actualizados con las versiones de MongoDB mayores y menores más recientes.

MongoDB solo proporciona paquetes para LTS de 64 bits (soporte a largo plazo); lanzamientos de Ubuntu; por ejemplo, 14.04 LTS (de confianza) y 16.04 LTS (xenial). Consulte [Plataformas compatibles](https://docs.mongodb.com/manual/installation/#mongodb-supported-platforms) para obtener más información.

1. Importe la clave pública utilizada por el sistema de gestión de paquetes. Ver [Import the public key](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#import-the-public-key-used-by-the-package-management-system) Ejemplo: `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4`
2. Ubuntu 16.04: Ver [Create a list file for mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#create-a-list-file-for-mongodb) Ejemplo: `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list`
3. `sudo apt update`
4. `sudo apt install mongodb`
5. `sudo apt install -y mongodb-org`

En este punto obtengo lo siguiente:

```sh
mongod --version
db version v4.0.2
git version: fc1573ba18aee42f97a3bb13b67af7d837826b47
OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
allocator: tcmalloc
modules: none
build environment:
    distmod: ubuntu1604
    distarch: x86_64
    target_arch: x86_64
```


Por último, para iniciar mongo: `sudo service mongodb start`


## Crear un usuario administrador

En la base de datos `admin`, agregue un usuario con el rol `userAdminAnyDatabase`. Por ejemplo, lo siguiente crea el usuario `myUserAdmin` en la base de datos `admin`.

```javascript
use admin

db.createUser(
    {
        user: "myUserAdmin",
        pwd: "abc123",
        roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
    }
)
```

Vuelva a iniciar la instancia de `mongod` con la opción de línea de comando `--auth` o, si usa un archivo de configuración, la configuración `security.authorization`.

```
mongod --auth --port 27017 --dbpath /data/db1
```


- [Docs. MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
- [Enable Auth](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
