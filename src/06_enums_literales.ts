// Tema 6: Enums y tipos literales
export {};

console.log(``);
console.log(`=== Tema 6: Enums y tipos literales ===`);

// ENUM: conjunto de valores con nombre.
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
  CANCELADO = "CANCELADO",
}

let estadoTarea: Estado = Estado.PENDIENTE;
console.log("Estado con enum:", estadoTarea);
estadoTarea = Estado.COMPLETADO;
console.log("Estado actualizado:", estadoTarea);

// TIPO LITERAL: el valor mismo es el tipo. No genera código JavaScript.
type Rol = "ADMIN" | "USER" | "GUEST";

let rol: Rol = "USER";
console.log("Rol con tipo literal:", rol);
rol = "ADMIN";
console.log("Rol actualizado:", rol);
// rol = "SUPERADMIN"; // Error: ese valor no está permitido

// Los literales también pueden ser números
type Dado = 1 | 2 | 3 | 4 | 5 | 6;
const tirada: Dado = 4;
console.log("Dado:", tirada);

// Alternativa moderna al enum: objeto "as const" + tipo literal.
// funciona con cualquier herramienta.
const Prioridad = {
  BAJA: "BAJA",
  ALTA: "ALTA",
} as const;

type Prioridad = (typeof Prioridad)[keyof typeof Prioridad];

const prioridadTarea: Prioridad = Prioridad.ALTA;
console.log("Prioridad:", prioridadTarea);
