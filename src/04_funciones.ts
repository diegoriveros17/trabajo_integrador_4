// Tema 4: Funciones
export {};
console.log(``);
console.log(`=== Tema 4: Funciones ===`);
// Tipos en los parámetros (a y b) y tipo de retorno (después de los paréntesis)
function sumar(a: number, b: number): number {
  return a + b;
}
console.log("sumar(2, 3) =", sumar(2, 3));

// Parámetro opcional: lleva "?" y se puede omitir.
// Dentro de la función es string | undefined, por eso se verifica.
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
console.log(saludar("Diego"));
console.log(saludar("Diego", "Riveros"));

// Parámetro por defecto: si no se envía, toma el valor indicado
function crearUsuario(nombre: string, rol: string = "user"): string {
  return `Usuario ${nombre} con rol ${rol}`;
}
console.log(crearUsuario("Luis"));
console.log(crearUsuario("Marta", "ADMIN"));

// void: la función no devuelve ningún valor
function mostrarMensaje(mensaje: string): void {
  console.log("Mensaje:", mensaje);
}
mostrarMensaje("Esta función no retorna nada");

// Arrow function tipado
const multiplicar = (a: number, b: number): number => a * b;
console.log("multiplicar(4, 5) =", multiplicar(4, 5));

// Función asíncrona: siempre devuelve una Promise
async function obtenerTitulo(): Promise<string> {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const datos: unknown = await respuesta.json();
  if (typeof datos === "object" && datos !== null && "title" in datos) {
    return String(`Titulo: ${datos.title}`);
  }
  return "Sin título";
}
obtenerTitulo().then(console.log);
