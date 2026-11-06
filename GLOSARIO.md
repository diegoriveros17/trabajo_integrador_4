# Algunos términos de los temas investigados.

## any

Tipo que desactiva la verificación: acepta cualquier valor y TypeScript deja de avisar errores. Conviene evitarlo.

```ts
let cualquierCosa: any = "texto";
cualquierCosa = 17; // no da error, pero se pierde la seguridad de los tipos
```

## unknown

Tipo seguro para valores de tipo desconocido: acepta cualquier valor pero obliga a verificarlo antes de usarlo.

```ts
let dato: unknown = "texto";
if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}
```

## void

Tipo de retorno de una función que no devuelve ningún valor.

```ts
function mostrar(mensaje: string): void {
  console.log(mensaje);
}
```

## Array con tipo

Permite definir una lista de valores que son todos del mismo tipo. Se declara el tipo seguido de `[]`.

```ts
let numeros: number[] = [1, 2, 3];
```

## TypeScript Compiler `tsc`

Compilador de TypeScript, traduce el código TypeScript a JavaScript, además verifica los tipos.

```terminal
npx tsc   # genera los archivos .js en dist/
```

## `tsx`

Herramienta que ejecuta archivos .ts en tiempo de desarrollo con recarga automática (watch), permite sintaxis mas avanzada como enum que node no soporta, y tsx tampoco no verifica los tipos

```terminal
npx tsx src/app.ts
```

## enum

Conjunto de constantes nombradas (Ej: estados de un pedido: PENDIENTE, COMPLETADO). A diferencia de otros tipos, los enum sí generan un objeto real en el código JavaScript compilado.

```ts
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
}
let estadoTarea: Estado = Estado.PENDIENTE;
```

## interface

Describe la forma de un objeto: qué propiedades tiene y de qué tipo. Se puede extender con `extends`.

```ts
interface Usuario {
  id: number;
  nombre: string;
}
const user: Usuario = { id: 1, nombre: "María" };
```

## Parámetro opcional

Parámetro de una función que se puede omitir. Se define con `?` y dentro de la función puede valer `undefined`.

```ts
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

## Parámetro por defecto

Parámetro que toma un valor ya definido si al llamar la función no se envía ninguno.

```ts
function crear(nombre: string, rol: string = "USER"): string {
  return `${nombre} (${rol})`;
}
```

## Propiedad opcional

Propiedad de un objeto que puede o no estar. Al igual que los parámetros opcionales se define con `?` después del nombre.

```ts
interface Persona {
  nombre: string;
  edad?: number;
}
```

## Tipo de retorno

Es el tipo que devuelve una función. Se escribe después de los paréntesis. Si no devuelve nada, es `void`.

```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

## Tipo literal

Tipo cuyo valor es uno concreto o una lista de valores concretos. La variable no puede obtener otros valores que sea alguno de los especificados. No genera código JavaScript

```ts
type Rol = "ADMIN" | "USER" | "GUEST";
let rol: Rol = "USER";
```

## Tipo unión

Tipo que permite que un valor sea de uno u otro tipo, separados por `|`.

```ts
let id: string | number = "ABC123";
id = 456;
```

## type (alias de tipo)

Nombre que se le da a un tipo. Sirve para objetos, uniones, intersecciones y tipos literales.

```ts
type Coordenada = { x: number; y: number };
const punto: Coordenada = { x: 10, y: 20 };
```

## tsconfig.json

Archivo de configuración del proyecto TypeScript: indica qué archivos incluir, qué tan estricto verificar, donde y cómo generar el JavaScript (`target`).

```json
{
  "compilerOptions": { "target": "ES2022", "strict": true, "outDir": "./dist" },
  "include": ["src"]
}
```
