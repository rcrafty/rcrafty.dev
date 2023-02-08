---
title: Instalar un gestor de versiones de node
date: 2022-12-18
excerpt: This is my second post
---

### ¿Qué es un gestor de versiones de Node?

Un gestor de versiones de Node es una herramienta que permite a los desarrolladores administrar diferentes versiones de Node.js en una sola máquina. Esto es útil cuando se trabaja en proyectos que requieren versiones específicas de Node.js o cuando se desea experimentar con versiones más nuevas o antiguas de Node.js sin afectar otras aplicaciones o proyectos.

Hay varios gestores de versiones de Node disponibles como: 

- [Node version Manager (nvm)](#install-nvm) 
- [Fast Node Manager (fnm)](#install-fnm)

## Install nvm 

#### Using Curl
`` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
``

#### Using Wget
`` 
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
``

## Install fnm

### Using a script (macOS/Linux)

`` 
curl -fsSL https://fnm.vercel.app/install | bash
``

### Manually

#### Using Homebrew (macOS/Linux)
`` 
brew install fnm
``

#### Usando Chocolatey (Linux/macOS/Windows)
`` 
choco install fnm
``
#### Usando Cargo (Linux/macOS/Windows)
`` 
cargo install fnm
`` 


