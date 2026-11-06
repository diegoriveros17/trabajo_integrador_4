// Tema 5: Interfaces y type
export {};

console.log(``);
console.log(`=== Tema 5: Interfaces y type ===`);

// Interface
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number; // Opcional
  readonly createdAt: Date; // Solo lectura
}

const user: Usuario = {
  id: 1,
  nombre: "María",
  email: "maria@example.com",
  createdAt: new Date(),
};
console.log("Usuario sin edad (opcional):", user.nombre, user.edad);

// Una interface se puede extender con extends
interface Empleado extends Usuario {
  legajo: string;
  salario: number;
}

const empleado: Empleado = {
  id: 2,
  nombre: "Carlos",
  email: "carlos@example.com",
  edad: 28,
  createdAt: new Date(),
  legajo: "L-100",
  salario: 1000000,
};
console.log("Empleado con legajo:", empleado.nombre, empleado.legajo);

// type: le da un nombre a cualquier tipo
type ID = string | number; // unión
type Rol = "ADMIN" | "USER" | "GUEST"; // tipo literal
type Coordenada = {
  x: number;
  y: number;
};

const punto: Coordenada = { x: 10, y: 20 };
const idUsuario: ID = "U-001";
const rol: Rol = "ADMIN";

console.log("Coordenada:", punto);
console.log("ID y rol:", idUsuario, rol);

// type también permite combinar tipos con & (intersección)
type EmpleadoConDepto = Empleado & { departamento: string };
const conDepto: EmpleadoConDepto = { ...empleado, departamento: "Sistemas" };
console.log("Con departamento:", conDepto.departamento);

// - interface: objetos y clases, sobre todo cuando se necesita extends.
// - type: uniones (|), intersecciones (&), tipos literales y alias de primitivos.
