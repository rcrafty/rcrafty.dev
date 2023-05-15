---
title: Porque no deberirias de usar lombok en tus proyectos
date: 2023-02-16
excerpt: This is my post about loombok
tags: 
- java
---

Lombok es una biblioteca de código abierto muy popular en Java que se utiliza para simplificar el proceso de desarrollo mediante la generación automática de código repetitivo, como getters, setters y constructores. Si bien Lombok puede ser una herramienta útil para algunos desarrolladores, hay varias razones por las que debería considerar evitar su uso en su proyecto Java.

En primer lugar, Lombok puede ocultar detalles importantes del código subyacente, lo que hace que sea más difícil de leer y mantener. La biblioteca utiliza anotaciones para generar automáticamente el código, lo que significa que los desarrolladores que no están familiarizados con Lombok pueden tener dificultades para entender cómo funciona el código en realidad. Esto puede llevar a errores y malentendidos, lo que puede ser especialmente problemático en proyectos de gran envergadura.

Además, Lombok puede tener un impacto negativo en la compatibilidad de la biblioteca con otros marcos y herramientas de Java. Debido a que Lombok modifica el código de compilación, puede haber conflictos con otras bibliotecas y herramientas que también realizan modificaciones similares. Esto puede causar problemas al intentar integrar nuevas bibliotecas en un proyecto existente o al actualizar a nuevas versiones de Java.

Otro problema común con Lombok es que puede generar código que no se adhiere a las convenciones de nomenclatura de Java, lo que puede hacer que sea más difícil para otros desarrolladores leer y entender el código. Por ejemplo, la biblioteca puede generar campos con nombres que comienzan con un guión bajo (_), lo que va en contra de las convenciones de Java. Esto puede hacer que el código sea más difícil de mantener y puede causar problemas al trabajar con otros desarrolladores o al compartir el código.

Finalmente, Lombok puede llevar a la creación de código redundante e innecesario. Aunque la biblioteca está diseñada para reducir la cantidad de código que los desarrolladores deben escribir manualmente, a menudo genera código que ya se puede crear fácilmente usando las herramientas integradas de Java. Esto puede hacer que el código sea más difícil de entender y mantener, lo que puede llevar a problemas a largo plazo.

En resumen, aunque Lombok puede parecer una herramienta útil para simplificar el proceso de desarrollo en Java, hay varias razones por las que debería considerar evitar su uso en su proyecto. Desde ocultar detalles importantes del código hasta generar conflictos con otras bibliotecas y herramientas, Lombok puede causar más problemas de los que resuelve. Al evitar su uso, los desarrolladores pueden asegurarse de que su código sea más fácil de leer, mantener y compartir con otros desarrolladores.
