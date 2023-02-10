---
title: Instalar un gestor de versiones de node
date: 2022-12-18
excerpt: This is my second post
---

### ¿Qué es un gestor de versiones de Node?

Un gestor de versiones de Node es una herramienta que permite a los desarrolladores administrar diferentes versiones de Node.js en una sola máquina. Esto es útil cuando se trabaja en proyectos que requieren versiones específicas de Node.js o cuando se desea experimentar con versiones más nuevas o antiguas de Node.js sin afectar otras aplicaciones o proyectos.

Hay varios gestores de versiones de Node disponibles como: 

- [Node version Manager (nvm)](https://github.com/nvm-sh/nvm) 
- [Fast Node Manager (fnm)](#https://github.com/Schniz/fnm)

En lo personal yo prefiero usar **fnm** ya que practicamente es una mejora a **nvm**

## Fast node Manager (fnm)

### About

**fnm** es un administrador de versiones de node.js, funciona igual que **nvm**, pero fnm es mas rapido gracias a que esta escrito con el lenguaje de programacion rust, ademas su instalación es mas facil que **nvm**.

### Install fnm

#### Using a script (macOS/Linux)

<pre>
<code>curl -fsSL https://fnm.vercel.app/install | bash</code>
</pre>

#### Using Homebrew (macOS/Linux)

<pre>
<code>brew install fnm</code>
</pre>

#### Usando Chocolatey (Linux/macOS/Windows)

<pre>
<code>choco install fnm</code>
</pre>

#### Usando Cargo (Linux/macOS/Windows)

<pre>
<code>cargo install fnm</code>
</pre>


