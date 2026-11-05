### Tema 1: ¿Qué es TypeScript?

- ¿Qué es TypeScript y quién lo desarrolla?
  TypeScript es un superconjunto de JavaScript desarrollado por Microsoft. Agrega tipado estático opcional, que nos permite definir los tipos de datos (números, textos, etc.) que maneja nuestro código para detectar errores mientras escribimos y antes de ejecutar el programa

- ¿Qué diferencias tiene con JavaScript?
  JavaScript es un lenguaje de tipado dinámico y se ejecuta directamente en los navegadores o en Node.js. TypeScript extiende JavaScript permitiendo definir los tipos de datos
  En JavaScript los errores de tipo aparecen al ejecutar, en Typescript los errores de tipo aparecen al escribir el código.
  Todo código JavaScript es TypeScript válido, pero el navegador o Node no entienden TypeScript nativamente: el código .ts debe convertirse (transpilarse) a JavaScript puro antes de ejecutarse, momento en el cual los tipos se eliminan

- ¿Qué ventajas ofrece?
  Detecta errores mientras se escribe, antes de ejecutar
  Mejora el autocompletado y la refactorización en el editor
  Hace el código más mantenible y escalable
  Los tipos funcionan como documentación: se ve qué datos recibe y devuelve cada función

- ¿Cuál es su versión actual?
  La versión actual de referencia es TypeScript 7 (lanzada el 8 de julio de 2026), reescrita en Go lo que lo hace más rápida

### Tema 2: Crear y ejecutar un proyecto

- ¿Cómo se instala TypeScript en un proyecto?
  Se instala localmente dentro de la carpeta del proyecto como una dependencia de desarrollo utilizando npm i -D typescript @types/node@24 tsx

- ¿Para qué sirve el archivo tsconfig.json?
  Es el archivo principal de configuración del proyecto en Typescript. Le indica al compilador qué archivos debe incluir (include), qué reglas aplicar al verificar los tipos de datos (strict, noEmitOnError) y cómo generar el código JavaScript versión (target), sistema de módulos (module) y carpeta de salida (outDir)

- ¿Qué hace el comando tsc?
  tsc (TypeScript Compiler) es la herramienta de compilación. Busca el tsconfig.json en la carpeta actual. Toma los archivos indicados en include. Verifica los tipos de todo el código y muestra los errores. Genera los archivos .js en la carpeta outDir (dist/)

- ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
  tsc: Analiza y verifica estrictamente los tipos del proyecto y genera el código JavaScript traducido. No ejecuta directamente el programa
  tsx: Ejecuta los archivos .ts en tiempo de desarrollo con recarga automática (watch), permite sintaxis mas avanzada como enum que node no soporta, y tsx tampoco no verifica los tipos
  node: Ejecuta directamente el JavaScript final (o archivos .ts simples mediante type stripping eliminando anotaciones). No verifica tipos y no soporta cierta sintaxis de TS como los enum sin transformar

## Tema 3: Tipos básicos

- ¿Qué son los tipos string, number y boolean?
  Son los tres tipos primitivos fundamentales de TypeScript:  
  string: Representa cadenas de texto ("hola")
  number: Representa valores numéricos, enteros o decimales (25, 3.14)
  boolean: Representa valores lógicos (true o false)

- ¿Cómo se declara un array con tipo?
  Se añade corchetes [] al tipo base de los elementos. Ej: let numeros: number[] = [1, 2, 3]; o let nombres: string[] = ["Ana", "Juan"];

- ¿Qué es un tipo unión?
  Permite que una variable acepte 2 o más tipos de datos distintos mediante el operador |. Ej.: let id: string | number; admite tanto textos como números

- ¿Por qué se recomienda evitar any?
  Porque any omite la verificación de tipos de TypeScript. Al usarlo, se pierde la protección contra errores en tiempo de desarrollo, haciendo que el código vuelva a ser impredecible como en JavaScript no tipado. En su lugar se recomienda usar unknown si el dato no se conoce con certeza

### Tema 4: Funciones

- ¿Cómo se indican los tipos de los parámetros?
  Se colocan dos puntos : y el tipo de dato al lado de cada parámetro. Ej. function sumar(a: number, b: number)

- ¿Cómo se indica el tipo de retorno?
  Se escribe después de los paréntesis de los parámetros, antes de abrir las llaves. Ej: function sumar(a: number, b: number): number { ... }. Si no devuelve nada, se usa : void

- ¿Qué es un parámetro opcional?
  Es un parámetro que puede o no ser enviado al invocar la función. Se declara añadiendo un signo de interrogación ? antes de los dos puntos (Ej: apellido?: string). Dentro de la función su tipo será string | undefined.

- ¿Qué es un parámetro por defecto?
  Es un parámetro al que se le asigna un valor inicial por si quien llama a la función no le pasa el argumento (Ej: a: number = 1).

### Tema 5: Interfaces y type

- ¿Qué es una interfaz y para qué sirve?
  Una interface define la forma que debe cumplir un objeto (sus propiedades y métodos).Las interfaces son similares a los alias de tipo, con la diferencia de que solo se aplican a object los tipos. Ej:

  ```ts
  interface User {
    name: string;
    age?: number;
  }

  const user: User = {
    name: Diego,
    age: 28,
  };
  ```

- ¿Qué es un type?
  Los alias de tipo permiten definir tipos con un nombre personalizado. Los alias de tipo se pueden usar para tipos primitivos como string o tipos más complejos como objects y arrays.
  Ej:

```ts
type Coordenada = {
  x: number;
  y: number;
};
```

- ¿Cómo se declara una propiedad opcional?
  Tanto en una interface como en un type, agregando el signo ? tras el nombre de la propiedad (Ej: age?: number;).

- ¿Cuándo conviene usar cada uno?
  Interface: conviene para definir objetos.
  Type: conviene para uniones de tipos literales, Ej. type ID = string | number;

### Fuentes:

[Introducción a TypeScript]("https://drive.google.com/file/d/1AR0TMOxDbUlrNzbYsJqY7y29ibv3hkzc/view")
[TypeScript W3Schools](https://www.w3schools.com/typescript/typescript_intro.php)
