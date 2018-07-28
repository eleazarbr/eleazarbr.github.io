---
layout: post
current: post
cover: assets/images/cover/coderwall.jpg
navigation: True
title: "Coderwall Tip: .gitignore is not working"
date: 2018-07-21
tags: [Computer Science, Coderwall]
class: post-template
subclass: 'post'
author: eleazar
---

Algunas veces quiero ignorar un archivo, lo agrego a `.gitignore`  y el archivo no desaparece de mi lista de cambios. Lo siguiente es un tip que quiero recordar porque siempre termino entrando a StackOverflow para leer la respuesta a esta [pregunta](https://stackoverflow.com/questions/11451535/gitignore-is-not-working).

> Even if you haven't tracked the files so far, git seems to be able to "know" about them even after you add them to `.gitignore`.

> **NOTE** : First commit your current changes, or you will lose them. Then run the following commands from the top folder of your git repo:

```bash
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```
