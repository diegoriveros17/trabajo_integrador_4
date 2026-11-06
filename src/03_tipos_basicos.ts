// Tema 3: Tipos básicos
export {};

// string, number y boolean
let nombre: string = "Diego";
let edad: number = 30;
let activo: boolean = true;
console.log("Primitivos:", nombre, edad, activo);

// Arrays con tipo
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Ana", "Luis"];
numeros.push(4);
console.log("Array de números:", numeros);
console.log("Array de textos:", nombres);

// Tipo unión: puede ser uno u otro tipo
let id: string | number = "ABC123";
console.log("id como texto:", id);
id = 123;
console.log("id como número:", id);

// any: desactiva la verificación (evitar)
let cualquierCosa: any = "texto";
cualquierCosa = 17; // TypeScript no se queja de nada
// cualquierCosa.metodoQueNoExiste(); // No da error al escribir, pero falla al ejecutar
console.log("any acepta cualquier valor:", cualquierCosa);

// unknown: la alternativa segura. Obliga a verificar antes de usar el valor.
let dato: unknown = "texto";
// dato.toUpperCase(); // Error: primero hay que verificar el tipo
if (typeof dato === "string") {
  console.log("unknown verificado:", dato.toUpperCase());
}
