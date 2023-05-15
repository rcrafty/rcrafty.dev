---
title: Tell, Don't Ask, un principio de la programación orientada a objetos
date: 2023-02-16
excerpt: This is my post about tell don't ask
tags: 
- java
---

**Tell, Don't Ask** es un principio de la programación orientada a objetos, se trata de que no usar getters y setters mediante un objeto, con eso no quiero decir que debas de dejar de crear estos metodos, si no que debes de darle un mejor uso y lo cual mejorara la calidad de tu código 

La traducción de **Tell, don't ask** significa **Dilo, no preguntes**, "No preguntes" quiere decir que no pidamos a un objeto los getters y setters para actuar sobre datos, cuando mejor podriamos decir mediante un metodo como van a actuar los datos dentro de la misma clase en la que estan definidos los getters y setters, asi simplemente traeriamos del objeto un metodo que nos entrege un resultado, de esta manera se aplicaria el "Dilo" del principio

#### Ejemplo sin aplicar el principio de Tell, don't ask
```
{
  private int longitud;

  public int getLongitud()
  {
    return longitud;
  }
  public void setLongitud(String nombre)
  {
    this.longitud = longitud;
  }
}
```
```
{
    public static void main(String[] args) {
        Cuadrado ob = new Cuadrado();
        ob.setLongitud(4);
        System.out.println(4*ob.getLongitud());
	}

}
```

#### Ejemplo aplicando el principio de Tell, don't ask
```
{
  private int longitud;

  public int getLongitud()
  {
    return longitud;
  }
  public void setLongitud(String nombre)
  {
    this.longitud = longitud;
  }

  public void area(int longitud){
    System.out.println(4*longitud);
  }
}
```
```
{
  public static void main(String[] args) {
    Cuadrado ob = new Cuadrado();
    ob.area(4);
  }

}
```

En conclusión **Tell, don't ask** ees un principio clave en la programación orientada a objetos que puede ayudarnos a escribir un código más claro, eficiente y fácil de mantener, al seguir este principio, podemos minimizar la cantidad de comunicación entre objetos, reducir la complejidad y aumentar la cohesión en nuestro código. También podemos mejorar la reutilización de nuestro código, ya que los objetos pueden ser más fácilmente adaptados y reutilizados en diferentes contextos
