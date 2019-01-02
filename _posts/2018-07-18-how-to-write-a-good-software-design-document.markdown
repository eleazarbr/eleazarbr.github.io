---
layout: post
current: post
cover: assets/images/cover/workstation.jpg
navigation: True
title: ¿Cómo Escribir Un Buen Documento De Diseño De Software?
date: 2018-07-18
tags: [Technology, Software Design]
class: post-template
subclass: 'post'
author: eleazar
---

Angela Zhang en su [blog post](https://medium.freecodecamp.org/how-to-write-a-good-software-design-document-66fcf019569c) comenta las mejores prácticas para escribir un buen documento de especificaciones de software.

Después de haber revisado cientos de estos documentos, ella ha observado una fuerte correlación entre los buenos documentos y el éxito final del proyecto.

El artículo se divide en 4 secciones:

- ¿**Por qué** escribir un documento de diseño?
- ¿**Qué** incluir en un documento de diseño?
- ¿**Cómo** escribirlo?
- El **proceso** a su alrededor

### ¿Por qué escribir un documento de diseño?

Un documento de diseño, —también conocido como especificación técnica—, es una descripción de cómo se planea resolver un problema.

Existen muchos artículos acerca del por qué es importante escribir un documento de diseño antes de sumergirse en la codificación. Entonces todo lo que diré aquí es:

> Un documento de diseño es la herramienta más útil para asegurarse de que se realice el trabajo correcto. - [Click to Tweet](https://ctt.ac/at87Y)

El objetivo principal de un documento de diseño es hacerte más efectivo forzándote a pensar en el diseño y a obtener retroalimentación de los demás. La gente a menudo piensa que el objetivo de un documento de diseño es enseñar a otros acerca de algún sistema o servir como documentación más adelante. Si bien estos pueden ser efectos secundarios beneficiosos, no son el objetivo en sí mismos.

Como regla general, si se está trabajando en un proyecto que podría tomar a 1 ingeniero mes o más, debe escribir un documento de diseño. Pero no te detengas allí: muchos proyectos más pequeños también podrían beneficiarse de un mini documento de diseño.

¡Estupendo! Si todavía está leyendo, crees en la importancia de los documentos de diseño. Sin embargo, diferentes equipos de ingeniería, e incluso ingenieros dentro del mismo equipo, a menudo escriben documentos de diseño de manera muy diferente. Entonces, hablemos sobre el contenido, el estilo y el proceso de un buen documento de diseño.

### ¿Qué incluir en un documento de diseño?

Un documento de diseño describe la solución a un problema. Dado que la naturaleza de cada problema es diferente, naturalmente querrá estructurar su documento de diseño de manera diferente.

Para comenzar, la siguiente es una lista de secciones que, al menos, debería considerar incluir en su próximo documento de diseño:

#### Título y Gente

El título de su documento de diseño, los nombres de los autores (debe ser el mismo que la lista de personas que planean trabajar en este proyecto), los revisores del documento (hablaremos más sobre eso en la sección Proceso) y la fecha en que este documento fue actualizado por última vez.

#### Resumen

Un resumen de alto nivel que todos los ingenieros deben entender y usar para decidir si les resulta útil leer el resto del documento. Debe ser de 3 párrafos como máximo.

#### Contexto

Una descripción del problema en cuestión, por qué es necesario este proyecto, qué necesita saber la gente para evaluar este proyecto y cómo encaja en la estrategia técnica, la estrategia del producto o los objetivos trimestrales del equipo.

#### Objetivos y no objetivos

La sección de Metas debería:

- describir el impacto del proyecto orientado a los usuario, donde su usuario podría ser otro equipo de ingeniería o incluso otro sistema técnico
- especificar cómo medir el éxito mediante métricas: puntos extra si puede vincularse a un panel que rastrea esas métricas.

Los no objetivos son igualmente importantes para describir qué problemas no se solucionarán para que todos estén en sintonía.

#### Hitos

Una lista de checkpoints medibles, para que su PM y el gerente de su gerente puedan echarle un vistazo y saber aproximadamente cuándo se realizarán las diferentes partes del proyecto. Te ánimo a dividir el proyecto en grandes hitos para el usuario si el proyecto tiene más de un mes de duración.

Debería verse algo como esto:

```
Start Date: June 7, 2018
Milestone 1 — New system MVP running in dark-mode: June 28, 2018
Milestone 2 - Retire old system: July 4th, 2018
End Date: Add feature X, Y, Z to new system: July 14th, 2018
```

#### Solución actual

Además de describir la implementación actual, también debe realizar un ejemplo de alto nivel para ilustrar cómo los usuarios interactúan con este sistema y/o cómo los datos fluyen a través de él.

Una _historia de usuario_ es una excelente manera de enmarcar esto. Tenga en cuenta que su sistema puede tener diferentes tipos de usuarios con diferentes _casos de uso_.

#### Solución propuesta

Muchas personas llaman a esto la sección de **Arquitectura Técnica**. Nuevamente, intente profundizar en las historias de usuario para concretar esto. Siéntase libre de incluir muchas subsecciones y diagramas.

Proporcione una idea general primero, luego complete muchos detalles. Imagina un mundo en donde escribas esto, luego tomas unas vacaciones en una isla desierta, y otro ingeniero del equipo puede simplemente leerlo e implementar la solución como se describió.

#### Soluciones alternativas

¿Qué más consideraste al encontrar la solución anterior? ¿Cuáles son los pros y los contras de las alternativas?

#### Monitoreo y Alerta

Me gusta incluir esta sección, porque a menudo la gente lo trata como una ocurrencia tardía, y casi siempre vuelve para morderlos más tarde cuando las cosas se rompen y no tienen idea de cómo o por qué.

#### Impacto entre equipos

¿Cómo aumentará esto en la carga de llamadas y de desarrollo?
¿Cuánto dinero va a costar?
¿Esto causa alguna regresión de latencia al sistema?
¿Expone alguna vulnerabilidad de seguridad?
¿Cuáles son algunas consecuencias negativas y efectos secundarios?
¿Cómo podría el equipo de soporte comunicar esto a los clientes?

#### Discusión

Cualquier tema abierto sobre el que no esté seguro, decisiones polémicas en las que le gustaría que los lectores influyan, sugerencias de trabajo futuro, etc.

#### Alcance detallado y línea de tiempo

Esta sección será leída principalmente por los ingenieros que trabajan en este proyecto, sus líderes tecnológicos y sus gerentes. Por lo tanto, esta sección se encuentra al final del documento.

Básicamente, este es el desglose de cómo y cuándo planea ejecutar cada parte del proyecto.

También intento tratar esta sección del documento de diseño como un rastreador de tareas de proyectos en curso, así que actualizo esto cada vez que cambia mi estimación de alcance. Pero eso es más una preferencia personal.

![How to Write]({{ "/assets/images/blog-content/typewriter.jpg" | relative_url }})

### ¿Cómo escribirlo?

#### Escribe lo más simple posible

No intente escribir como los documentos académicos que ha leído. Están escritos para impresionar a los revisores. Su documento está escrito para describir su solución y recibir comentarios de sus compañeros de equipo. Puedes lograr claridad usando:

- Palabras simples
- Oraciones cortas
- Listas con viñetas y / o listas numeradas
- Ejemplos concretos, como "El usuario Alice conecta su cuenta bancaria, luego ..."

#### Agrega muchos diagramas y gráficos

Los gráficos a menudo pueden ser útiles para comparar varias opciones posibles, y los diagramas generalmente son más fáciles de analizar que el texto. He tenido buena suerte con [Google Drawing](https://docs.google.com/drawings/) para crear diagramas.

_Consejo profesional_: recuerde agregar un enlace a la versión editable del diagrama debajo de la captura de pantalla, para que pueda actualizarlo fácilmente más adelante cuando las cosas inevitablemente cambien.

#### Incluir números

La escala del problema a menudo determina la solución. Para ayudar a los revisores a tener una idea del estado del proyecto, incluya números reales como # de filas de bases de datos, # de errores de usuario, latencia, y cómo estas escalan con el uso (¿recuerdan la notación O-Grande?).

#### Intenta ser gracioso

**Una especificación no es un documento académico**. Además, a las personas les gusta leer cosas divertidas, así que esta es una buena manera de mantener al lector involucrado. No exageres hasta el punto de alejarte de la idea central.

Si tú, como yo, tenemos problemas para ser graciosos, Joel Spolsky (obviamente conocido por sus talentos de comedia ...) tiene este consejo:

> Una de las maneras más fáciles de ser gracioso es ser específico cuando no se lo solicita [... Ejemplo:] En lugar de decir "intereses especiales", diga "agricultores de aguacates zurdos".

#### Haz la prueba escéptica

Antes de enviar su documento de diseño a otros para que lo revisen, finge ser el revisor. ¿Qué preguntas y dudas podría tener sobre este diseño? Luego dirígelos preventivamente.

#### Haz la prueba de vacaciones

Si vas de vacaciones largas a un lugar sin acceso a Internet, ¿alguien en tu equipo puede leer el documento e implementarlo como quisieras?

El objetivo principal de un documento de diseño no es el intercambio de conocimiento, pero esta es una buena forma de evaluar la claridad para que otros realmente puedan brindarle comentarios útiles.

![Vacations]({{ "/assets/images/blog-content/vw-camper.jpg" | relative_url }})

#### El Proceso

Por ahora, vamos a hablar específicamente sobre cómo escribir el documento de diseño y obtener comentarios al respecto.

En primer lugar, todos los que trabajen en el proyecto deberían ser parte del proceso de diseño. Está bien si el líder tecnológico termina impulsando muchas de las decisiones, pero todos deberían participar en la discusión y aceptar el diseño. Entonces, el "tú" a lo largo de este artículo es un "tú" realmente plural que incluye a todas las personas en el proyecto.

En segundo lugar, el proceso de diseño no significa que estés mirando las ideas teóricas del pizarrón. No dude en ensuciarse las manos y proteste las soluciones potenciales. Esto no es lo mismo que comenzar a escribir el código de producción para el proyecto antes de escribir un documento de diseño. No hagas eso. Pero absolutamente debes sentirte libre de escribir algún código desechable para validar una idea. Para asegurarse de que solo escribe el código exploratorio, establezca como regla que nada de este código prototipo se combina con _master_.

Después de eso, cuando empiece a tener una idea de cómo llevar a cabo su proyecto, haga lo siguiente:

1. Solicite a un ingeniero o técnico experimentado en su equipo que sea su crítico. Idealmente, sería alguien respetado y/o familiarizado con los casos extremos del problema. 
2. Ve a una sala de conferencias con una pizarra blanca.
3. Describe el **problema** que estás abordando con este ingeniero (este es un paso muy importante, ¡no lo saltes!).
4. Luego, explica la **implementación** que tienes en mente y convénceles de que es lo correcto para construir.

Hacer todo esto **antes** de comenzar a escribir su documento de diseño permite obtener retroalimentación tan pronto como sea posible, antes de invertir más tiempo y apegarse a cualquier solución específica. A menudo, incluso si la implementación sigue siendo la misma, su revisor puede señalar otros casos que necesita cubrir, indicar posibles áreas de confusión y anticiparse a las dificultades que puede encontrar más adelante.

Luego, después de haber escrito un borrador de su documento de diseño, solicite al mismo revisor que lo lea nuevamente, y apúntelo añadiendo su nombre como revisor en la sección Título y Personas del documento de diseño. Esto crea incentivos adicionales y responsabilidad para el revisor.

En ese sentido, considere agregar revisores especializados (como SRE e ingenieros de seguridad) para aspectos específicos del diseño.

Una vez que usted y los revisores hayan finalizado la sesión, siéntase libre de enviar el documento de diseño a su equipo para obtener comentarios adicionales y compartir conocimientos. Sugiero limitar el tiempo de este proceso de recopilación de comentarios a alrededor de 1 semana para evitar retrasos prolongados. Comprométete a abordar todas las preguntas y comentarios que las personas dejen dentro de esa semana. Dejar comentarios colgados = karma malo.

Por último, si hay mucha controversia entre usted, su revisor y otros ingenieros que leen el documento, le recomiendo que consolide todos los puntos de contención en la sección de Discusión de su documento. Luego, organice una reunión con las diferentes partes para hablar sobre estos desacuerdos en persona.

¡Una vez que haya hecho todo lo anterior, es hora de continuar con la implementación! Para obtener puntos extra, trate este documento de diseño como un documento vivo a medida que implementa el diseño. Actualice el documento cada vez que aprenda algo que lo lleve a realizar cambios en la solución original o actualice su alcance. Me agradecerás más tarde cuando no tengas que explicar las cosas una y otra vez a todas las partes interesadas.

_Finalmente, ¿cómo evaluamos el éxito de un documento de diseño?_

Un documento de diseño exitoso podría conducir a un resultado como este:

1. Pasas 5 días escribiendo el documento de diseño, esto te obliga a pensar en diferentes partes de la arquitectura técnica
2. Recibes comentarios de los revisores de que X es la parte más arriesgada de la arquitectura propuesta
3. Decides implementar X primero para eliminar el riesgo del proyecto
4. 3 días después, descubres que X no es posible o es mucho más difícil de lo que originalmente pensabas
5. Decide dejar de trabajar en este proyecto y priorizar otro trabajo en su lugar

Al comienzo del artículo, dijimos que el objetivo de un documento de diseño es asegurarse de que se realice el trabajo correcto. En el ejemplo anterior, gracias a este documento de diseño, en lugar de desperdiciar potencialmente meses solo para abortar este proyecto, solo ha pasado 8 días. Parece un resultado bastante exitoso para mí.