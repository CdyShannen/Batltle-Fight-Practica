// Definir objetos para los personajes
let personajes = [
  { nombre: "Pikachu", vida: 500, golpe: 170 },
  { nombre: "Link", vida: 550, golpe: 150 },
  { nombre: "Mario", vida: 600, golpe: 155 },
  { nombre: "Mewtwo", vida: 500, golpe: 165 },
  { nombre: "Yoshi", vida: 500, golpe: 150 },
];

// Función para validar la opción
function valido(opcion) {
  return opcion >= 1 && opcion <= personajes.length;
}

// Función para obtener un personaje por su índice
function obtenerPersonaje(index) {
  return personajes[index];
}

// Función para realizar la batalla
function realizarBatalla(personaje1, personaje2) {
  while (personaje1.vida > 0 && personaje2.vida > 0) {
    personaje1.vida -= personaje2.golpe;
    personaje2.vida -= personaje1.golpe;
    if (personaje1.vida < 0) {
      personaje1.vida = 0;
    }
    if (personaje2.vida < 0) {
      personaje2.vida = 0;
    }
    console.log(personaje2.nombre + " ataca");
    console.log("A " + personaje1.nombre + " le queda " + personaje1.vida + " de vida");
    console.log(personaje1.nombre + " ataca");
    console.log("A " + personaje2.nombre + " le queda " + personaje2.vida + " de vida");
  }
  if (personaje1.vida <= 0 || personaje2.vida <= 0) {
    if (personaje1.vida <= 0) {
      console.log("El ganador es " + personaje2.nombre);
      personajes = personajes.filter(personaje => personaje !== personaje1);
    } else {
      console.log("El ganador es " + personaje1.nombre);
      personajes = personajes.filter(personaje => personaje !== personaje2);
    }
  }
}

// Función para preguntar si desea continuar
function continuar() {
  const respuesta = prompt("¿Deseas continuar? (S/N)").toUpperCase();
  return respuesta === "S";
}

// Obtener la selección del usuario
let seleccion1 = parseInt(prompt(
  "Elige el personaje con el que deseas luchar seleccionando el número asignado:\n1. Pikachu\n2. Link\n3. Mario\n4. Mewtwo\n5. Yoshi"
));
while (!valido(seleccion1)) {
  seleccion1 = parseInt(prompt(
    "Por favor, ingrese una opción válida para el personaje que deseas usar:"
  ));
}
let personaje1 = obtenerPersonaje(seleccion1 - 1);
console.log(personaje1.nombre + " ha sido seleccionado");

let seleccion2 = parseInt(prompt(
  "Elige el personaje que va a usar tu contrincante:\n1 - Pikachu\n2 - Link\n3 - Mario\n4 - Mewtwo\n5 - Yoshi"
));
while (!valido(seleccion2)) {
  seleccion2 = parseInt(prompt(
    "Por favor, ingrese una opción válida para el personaje que va a usar tu contrincante:"
  ));
}
let personaje2 = obtenerPersonaje(seleccion2 - 1);
console.log(personaje2.nombre + " ha sido seleccionado");

// Iniciar la batalla
realizarBatalla(personaje1, personaje2);

// Filtrar los personajes que quedaron con vida
const personajesConVida = personajes.filter(personaje => personaje.vida > 0);
console.log("Personajes con vida:", personajesConVida);

// Mostrar un prompt con los nombres de los personajes con vida
const seleccion3 = parseInt(prompt(
  "Elige el personaje con el que deseas luchar seleccionando el número asignado:\n" +
  personajesConVida.map((personaje, index) => (index + 1) + ". " + personaje.nombre).join("\n")
));

// Obtener el personaje seleccionado
const personaje3 = obtenerPersonaje(personajes.indexOf(personajesConVida[seleccion3 - 1]));
console.log(personaje3.nombre + " ha sido seleccionado");