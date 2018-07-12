---
layout: post
current: post
cover: assets/images/cover/survey-form.jpg
navigation: True
title: Responsive Web Design Projects - Build a Survey Form
date: 2018-07-11 09:04:01
tags: [Computer Science, Frontend, Projects]
class: post-template
subclass: 'post'
author: eleazar
---

Objetivo: Construir una app en [CodePen.io](https://codepen.io/#) con una funcionalidad similar a: [https://codepen.io/freeCodeCamp/full/VPaoNP](https://codepen.io/freeCodeCamp/full/VPaoNP).

* URL del proyecto (editor view): [@eleazarbr ~ Build a Survey Form](https://codepen.io/eleazarbr/pen/jpEpoB)
* URL del proyecto (full page):   [@eleazarbr ~ Build a Survey Form](https://codepen.io/eleazarbr/full/jpEpoB/)
* Estado: **En progreso**

Herramientas usadas en este proyecto:

- HTML
- Javascript
- CSS

Para este proyecto se utilizó CSS plano porque es el tema principal en las lecciones de freeCodeCamp, excluyendo el uso de jQuery, React, Angular y Vue.

A continuación, un progreso del HTML:

```html
	<h1 id="title">Survey Form</h1>
	<p id="description">
		Thanks for your time, I'm doing some research on 
		"people between 20 and 35 have desire to hire a dessert table for events". 
		Before we start, can you tell me a bit about yourself?
	</p>
	<form id="survey-form">
		<label for="name" id="name-label"> * Name </label>
		<input type="text" name="name" id="name" placeholder="Enter your name" required autofocus>
		<label for="email" id="email-label"> * Email </label>
		<input type="email" name="email" id="email" placeholder="Enter your email" required>
		<label for="age" id="age-label"> * Age </label>
		<input type="number" name="age" id="number" min="20" max="35" placeholder="You must be between 20 and 35 :)">

		<label for="question-1">
			When was the last time you hired a dessert table?
		</label>
		<select id="dropdown" name="question-1">
			<option>Since 1 to 3 months</option>
			<option>Since 3 to 6 months  </option>
			<option>Since 6 months</option>
		</select>

		<label for="question-2">
			What’s the biggest challenge you face when hiring a dessert table?
		</label>
		<textarea id="question-2" name="question-2"></textarea>

		<label for="question-3">
			Why is this a problem for you?
		</label>
		<input type="text" id="question-3" name="quesiton-3">
		<label for="question-4">
			How often does this happen?
			<input type="radio" name="rarely">Rarely
			<input type="radio" name="occasionally">Occasionally
			<input type="radio" name="very-often">Very often
		</label>
	</form>
```

Hasta el momento, es una simple encuesta para probar una hipotesis cualquiera, para conocer si las personas tienen ese problema.

> Personas entre 20 y 35 años tienen el deseo de contratar una mesa de postres

<!-- Puedes contestar la encuesta en [ingles](#) o en [español](#). -->