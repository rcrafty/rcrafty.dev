---
title: Tell, Don't Ask 
date: 2023-02-16
excerpt: This is my post about tell don't ask
---

**Tell, Don't Ask** es un principio de la programación orientada a objetos, se dice que el principio quiere decir que no usemos los getters y setters, pero en verdad lo que dice es que no abusemos de estos metodos, entonces para **"No usar getters y setters"** tendriamos que agrupar datos con las funciones que operan en esos datos.

La traducción de **Tell, don't ask** significa **Dilo, no preguntes**, "No preguntes" quiere decir que no pidamos a un objeto los getters y setters para actuar sobre datos, entonces por eso porque mejor simplemente decimos como actuar sobre los datos dentro de la misma clase de los getters y setters, de este modo solo escribiriamos una funcion que opere con los datos y asi simplemente diriamos que queremos del objeto, y asi se aplicaria el "Dilo" de este principio

#### Ejemplo sin aplicar el principio de Tell, don't ask
<pre tabindex="0">
<code data-lang="java">public class Cuadrado 
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
}</code>
</pre>
<pre tabindex="0">
<code data-lang="java">public class Program
{
    public static void main(String[] args) {
        Cuadrado ob = new Cuadrado();
        ob.setLongitud(4);
        System.out.println(4*ob.getLongitud());
	}

}</code>
</pre>

#### Ejemplo aplicando el principio de Tell, don't ask
<pre tabindex="0">
<code data-lang="java">public class Cuadrado 
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
}</code>
</pre>
<pre tabindex="0">
<code data-lang="java">public class Program
{
  public static void main(String[] args) {
    Cuadrado ob = new Cuadrado();
    ob.area(4);
  }

}
</code>
</pre>

En conclusión **Tell, don't ask** este es un principio que nos permite mejorar nuestro código y incluso discutiblemente la seguridad del mismo, este principio se puede sacar provecho en el desarrollo de aplicaciones grandes ya que podremos encuentrar los datos y su comportamiento en una misma clase 


