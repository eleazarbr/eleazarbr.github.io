---
layout: post
current: post
cover: assets/images/cover/git.png
navigation: true
title: Una recopilación de comandos git que me han ayudado
date: 2018-07-22
tags: [Computer Science, Git]
class: post-template
subclass: 'post'
author: eleazar
---

En esta entrada voy a recopilar algunas caracteristicas de git que me han ayudado.

### Cómo eliminar últimos commits y volver a hacer push

<br>

> Cuando el último commit **no** es el primer commit:

Para remover el último commit, podemos hacer simplemente `git reset --soft HEAD^`. Si vamos a remover multiples commits del top, entonces `git reset --soft HEAD~2` para remover los últimos dos commits. Podemos incrementar el número para eliminar más commits.

> Cuando el último commit **es** el primer commit:

Ejecuta `git update-ref -d HEAD`.

Finalmente, forzamos push usando `git push origin +branchName`.

### Cómo recuperar algo eliminado accidentalmente

Imagina que algo raro pasó y archivos fueron eliminados, es posible regresar en el tiempo donde las cosas funcionaban correctamente.

```
git reflog
# verás una lista de lo que has hecho en git, en todas tus ramas
# cada cual tiene un index HEAD@{index}
# encuentra el index antes de que todo se rompiera

git reset HEAD@{index}
# magic time machine
```

## Basics

### Crear una nueva rama y saltar a ella

```
git checkout -b branchname

// Lo anterior es un atajo a:
git branch branchname
git checkout branchname
```

### Eliminar una rama local

```
git branch -d branchname
```

### Eliminar una rama remota

```
git push origin --delete branchname
```



