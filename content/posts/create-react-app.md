---
title: Formas para crear un proyecto con REACT 
date: 2022-12-12
excerpt: This is my first post
tags: 
- react
---

Olvídalo, ahora mismo no deberíamos de pensar en crear un proyecto de React, la documentación recomienda crear un proyecto con Frameworks de React como next, remix o gatsby ya que algunos de estos cuentan con Server Components que de hecho es el futuro del desarrollo web.

Sin embargo, te indicaré las 2 alternativas que existen de momento por si insistes en usar puramente React y además te indicare algunas desventajas

## Vite

Vite es una herramienta para el desarrollo fronted, que nos permite crear proyectos de React simplificado y muy veloz para 
el desarrollador, es decir, solo mejora la ejecución en desarrollo pero en producción depende de Webpack, el único problema que tiene es que no viene con algunas configuraciones, se dio el caso de que en la última versión se agregó ESLint, pero es porque React mensionó que esta herramienta es fundamental en un proyecto de React, y tampoco se tiene pensado extender mas configuraciones de parte del equipo de **vite**, ya que consideran que ese no es su trabajo. Entonces tú deberías de crear o buscar un template con las configuraciones que requieras.

### npm
```
npm create vite@latest
```
### pnpm
```
pnpm create vite
```
### yarn
```
pnpm create vite
```
## Create React App

En este caso es todo negativo, ya no tiene continuidad, tiene una configuración del proyecto que no es tan buena y es muy lento a comparación de  **vite**

### npm - pnpm - yarn 
```
Ni lo intentes
```
