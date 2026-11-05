Tema 1: ¿Qué es TypeScript?

- ¿Qué es TypeScript y quién lo desarrolla?
  TypeScript es un superconjunto de JavaScript desarrollado por Microsoft. Agrega tipado estático opcional, que nos permite definir los tipos de datos (números, textos, etc.) que maneja nuestro código para detectar errores mientras escribimos y antes de ejecutar el programa.

- ¿Qué diferencias tiene con JavaScript?
  JavaScript es un lenguaje de tipado dinámico y se ejecuta directamente en los navegadores o en Node.js. TypeScript extiende JavaScript permitiendo definir los tipos de datos.
  En JavaScript los errores de tipo aparecen al ejecutar, en Typescript los errores de tipo aparecen al escribir el código.
  Todo código JavaScript es TypeScript válido, pero el navegador o Node no entienden TypeScript nativamente: el código .ts debe convertirse (transpilarse) a JavaScript puro antes de ejecutarse, momento en el cual los tipos se eliminan.

- ¿Qué ventajas ofrece?
  Detecta errores mientras se escribe, antes de ejecutar.
  Mejora el autocompletado y la refactorización en el editor.
  Hace el código más mantenible y escalable.
  Los tipos funcionan como documentación: se ve qué datos recibe y devuelve cada función.

- ¿Cuál es su versión actual?
  La versión actual de referencia es TypeScript 7 (lanzada el 8 de julio de 2026), reescrita en Go lo que lo hace más rápida.

Tema 2: Crear y ejecutar un proyecto

- ¿Cómo se instala TypeScript en un proyecto?
  Se instala localmente dentro de la carpeta del proyecto como una dependencia de desarrollo utilizando npm i -D typescript @types/node@24 tsx.

- ¿Para qué sirve el archivo tsconfig.json?
  Es el archivo principal de configuración del proyecto en Typescript. Le indica al compilador qué archivos debe incluir (include), qué reglas aplicar al verificar los tipos de datos (strict, noEmitOnError) y cómo generar el código JavaScript versión (target), sistema de módulos (module) y carpeta de salida (outDir).

- ¿Qué hace el comando tsc?
  tsc (TypeScript Compiler) es la herramienta de compilación. Busca el tsconfig.json en la carpeta actual. Toma los archivos indicados en include. Verifica los tipos de todo el código y muestra los errores. Genera los archivos .js en la carpeta outDir (dist/).

- ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
  tsc: Analiza y verifica estrictamente los tipos del proyecto y genera código JavaScript traducido. No ejecuta directamente el programa. tsx: Ejecuta los archivos .ts en tiempo de desarrollo al vuelo y con recarga automática (watch), permitiendo sintaxis avanzada como enum, pero no verifica los tipos. node: Ejecuta directamente el JavaScript final (o archivos .ts simples mediante type stripping eliminando anotaciones). No verifica tipos y no soporta cierta sintaxis de TS como los enum sin transformar.
