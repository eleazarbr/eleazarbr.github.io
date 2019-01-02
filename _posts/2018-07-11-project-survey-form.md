---
layout: post
current: post
cover: assets/images/cover/survey-form.jpg
navigation: true
title: Responsive Web Design Projects - Build a Survey Form
date: 2018-07-11
tags: [Projects, Frontend]
class: post-template
subclass: 'post'
author: eleazar
---

Objetivo: Construir una app en [CodePen.io](https://codepen.io/#) con una funcionalidad similar a: [https://codepen.io/freeCodeCamp/full/VPaoNP](https://codepen.io/freeCodeCamp/full/VPaoNP).

* URL del proyecto (editor view): [Build a Survey Form - CodePen.io/eleazarbr](https://codepen.io/eleazarbr/pen/mjejQQ)
* URL del proyecto (full page):   [Build a Survey Form - CodePen.io/eleazarbr](https://codepen.io/eleazarbr/full/mjejQQ/)
* Estado del proyecto: **Terminado**

Herramientas usadas:

- HTML
- CSS (FlexBox)

Para este proyecto se utilizó CSS plano porque es el tema principal en las lecciones de freeCodeCamp, excluyendo el uso de jQuery, React, Angular y Vue.

A continuación, el código HTML final:

```html
<div class="container">
	<form id="survey-form" class="form-container">
		<h1 id="title">Survey Form</h1>
		<p id="description">
			Thanks for your time, I'm doing some research on
			<br>"People between 20 and 35 have desire to hire a dessert table for events".
			<br>Before we start, can you tell me a bit about yourself?
		</p>
		<div class="flex-items">
			<div class="left-item">
				<label for="name" id="name-label"> * Name </label>
			</div>
			<div class="right-item">
				<input type="text" class="text-input" name="name" id="name"
					placeholder="Enter your name" required autofocus>
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="email" id="email-label"> * Email </label>
			</div>
			<div class="right-item">
				<input type="email" class="text-input" name="email" id="email"
					placeholder="Enter your email" required>
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="age" id="age-label"> * Age </label>
			</div>
			<div class="right-item">
				<input  class="text-input" type="number" name="age" id="number" min="20" max="35"
					placeholder="You must be between 20 and 35 :)">
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="question-1">
					When was the last time you hired a dessert table?
				</label>
			</div>
			<div class="right-item">
			<select id="dropdown" class="text-select" name="question-1">
				<option>Since 1 to 3 months</option>
				<option>Since 3 to 6 months  </option>
				<option>Since 6 months</option>
			</select>
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="question-2">
					What’s the biggest challenge you face when hiring a dessert table?
				</label>
			</div>
			<div class="right-item">
				<textarea class="text-input" id="question-2" name="question-2"></textarea>
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="question-3"> Why is this a problem for you? </label>
			</div>
			<div class="right-item">
				<input type="text" class="text-input" id="question-3" name="question-3">
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="question-4">
					How often does this happen?
				</label>
			</div>
			<div class="right-item">
				<div><input type="radio" name="question-4">Rarely</div>
				<div><input type="radio" name="question-4">Occasionally</div>
				<div><input type="radio" name="question-4">Very often</div>
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="question-5">
					I’m actually exploring a solution to solve your problem.
					Can I contact you for feedback if we find a solution?
				</label>
			</div>
			<div class="right-item">
				<div><input type="radio" name="question-5">Yes</div>
				<div><input type="radio" name="question-5">No, thank you</div>
			</div>
		</div>

		<div class="flex-items">
			<div class="left-item">
				<label for="question-6"> Any Comments or Suggestions? </label>
			</div>
			<div class="right-item">
				<textarea class="text-input" name="question-6" id="question-6"></textarea>
			</div>
		</div>
		<button id="submit" class="btn btn-blue">Submit</button>
	</form>
</div>
```

En resumen de la parte CSS:

* Hay una división llamada `container` con un `width: 100%;` y `display: flex;`, dentro del mismo, un formulario con `width: 50%;`
* Se aplica una clase para los items de la izquierda y otra para los items de derecha
* Para los items de derecha se utiliza `flex-direction: column;` para que los input radio se muestren en vertical
* El input tiene un `border-color: #9561e2;` en hover
* Finalmente, se utilizó la propiedad `box-shadow:  0 2px 4px 0 rgba(0,0,0,0.10);` para aplicar una sombra a los _text areas_

```css
.container {
	background-color: white;
	width: 100%;
	padding: 2rem;
	display: flex;
	justify-content: center;
}

.form-container {
	width: 50%;
	max-widht: 20rem;
  	display: flex;
  	flex-direction: column;
  	align-items: stretch;
}

.flex-items {
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
	margin: 1rem;
}

.left-item {
	width: 33.33333%;
	text-align: right;
	padding-right: 1rem;
}

.right-item {
	width: 66.66667%;
  	display: flex;
  	flex-direction: column;
}

body {
	font-family: system-ui, BlinkMacSystemFont,
		Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

h1 {
	font-size: 1.875rem;
	color: #22292f;
	text-align: center;
}

p {
	font-size: 1rem;
	color: #606f7b;
	line-height: 1.5;
	text-align: center;
}

label {
	color: #b8c2cc;
	font-weight: 700;
}

.text-input {
 	width: auto;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	color: #22292f;
	line-height: 1.25;
}

.text-input:hover {
	border-color: #9561e2;
}

.text-select {
	width: auto;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-right: 2rem;
}


.btn {
	border-radius: .25rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
}

.btn-blue {
	background-color: #3490dc;
	color: white;
}
```

Ver el proyecto terminado en: [Build a Survey Form - CodePen.io/eleazarbr](https://codepen.io/eleazarbr/full/mjejQQ/)
