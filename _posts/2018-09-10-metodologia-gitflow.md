---
layout: post
current: post
cover: assets/images/cover/gitflow.png
navigation: true
title: GitFlow - Flujo de trabajo
description:
date: 2018-09-10
tags: [Computer Science, Git]
class: post-template
subclass: 'post'
author: eleazar
---

Gitflow es solo una idea abstracta de un flujo de trabajo con git publicada por [Vincent D](http://nvie.com/posts/a-successful-git-branching-model/). Básicamente define un estricto modelo de branching centrado en el release del proyecto, provee un framework para gestionar grandes proyectos.

## Table of contents

- [Table of contents](#table-of-contents)
- [Keypoints](#keypoints)
- [¿Cómo funciona?](#%C2%BFc%C3%B3mo-funciona)
    - [Feature branch](#feature-branch)
    - [Terminando una feature branch](#terminando-una-feature-branch)
    - [Hotfix branches](#hotfix-branches)
- [En resumen](#en-resumen)
- [Herramientas](#herramientas)
- [Más información](#m%C3%A1s-informaci%C3%B3n)

## Keypoints

- Asigna roles específicos a cada rama.
- Define cuando y como deben interactuar.
- Usa ramas individuales para preparar, mantener y guardar releases.
- Aconseja que tipo de ramas configurar y como deben ser mezcladas.

## ¿Cómo funciona?

En lugar de usar solamente la rama `master`, este flujo de trabajo utiliza dos ramas para registrar el historial del proyecto. La rama `master` almacena el historial de versiones oficial, y la rama `develop` sirve como una rama de integración de nuevas características.

### Feature branch

Cada nueva característica debe residir en su propia rama. También, en lugar de crearse de `master`, la `feature` branch se creará de `develop`. Cuando la característica este completa, se mezcla con develop. Las `features` no deben de interactuar nunca con `master`.

```
git checkout develop
git checkout -b feature_branch
```

### Terminando una feature branch

Cuando se termine la nueva característica, ahora es necesario mezclarla con develop.

```
git checkout develop
git merge feature_branch
```

Una vez que el desarrollo ha adquirido las características suficientes para un release (o se acerca una fecha de lanzamiento predeterminada), se crea una rama `release` de `develop`. La creación de esta rama inicia el siguiente ciclo de lanzamientos, por lo que no se pueden agregar nuevas características después de este punto; solo las correcciones de errores, la generación de documentación y otras tareas orientadas a la versión deberían ir en esta rama. Una vez que está todo listo, la rama de `release` se fusiona en `master` y se etiqueta con un número de versión. Además, debería fusionarse nuevamente en `develop`, que puede haber progresado desde que se inició el release.

El uso de una rama dedicada para preparar lanzamientos permite que un equipo pueda pulir la versión actual mientras que otro equipo continúa trabajando en las funciones para la próxima versión. También crea fases de desarrollo bien definidas (por ejemplo, es fácil decir: "Esta semana nos estamos preparando para la versión 4.0" y verla realmente en la estructura del repositorio).

Hacer ramas de `release` es otra operación directa de ramificación. Al igual que las ramas de `features`, las ramas de `release` se basan en la rama `develop`. Se puede crear una nueva rama de `release` utilizando los siguientes métodos.

```
git checkout develop
git checkout -b release/0.1.0
```

Una vez que el `release` esté listo, se fusionará en `master` y `develop`, luego se eliminará la rama de `release`. Es importante fusionarse nuevamente en `develop` porque las actualizaciones críticas se pueden haber agregado a la rama de `release` y deben ser accesibles a las nuevas características.

Para finalizar una rama de `release`, use los siguientes métodos:

```
git checkout develop
git merge release/0.1.0
```

### Hotfix branches

-

## En resumen


## Herramientas

- [Tool](#tool)

## Más información

- [¿Cómo funciona?](#%C2%BFc%C3%B3mo-funciona)
- [Hotfix branches](#hotfix-branches)
