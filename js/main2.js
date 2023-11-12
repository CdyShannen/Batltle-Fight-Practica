// Objetos para los personajes
let personajes = [
  { nombre: "Pikachu", vida: 500, golpe: 170 },
  { nombre: "Link", vida: 550, golpe: 150 },
  { nombre: "Mario", vida: 600, golpe: 155 },
  { nombre: "Mewtwo", vida: 500, golpe: 165 },
  { nombre: "Yoshi", vida: 500, golpe: 150 },
];

// Función para la batalla
function realizarBatalla(personaje1, personaje2) {
  console.log("Comienza la batalla entre " + personaje1.nombre + " y " + personaje2.nombre);
  console.log(personaje1.nombre + " tiene " + personaje1.vida + " puntos de vida");
  console.log(personaje2.nombre + " tiene " + personaje2.vida + " puntos de vida");
  while (personaje1.vida > 0 && personaje2.vida > 0) {
    personaje1.vida -= personaje2.golpe;
    personaje2.vida -= personaje1.golpe;
    if (personaje1.vida < 0) {
      personaje1.vida = 0;
    }
    if (personaje2.vida < 0) {
      personaje2.vida = 0;
    }
    console.log(personaje2.nombre + " ataca a " + personaje1.nombre);
    console.log(personaje1.nombre + " tiene " + personaje1.vida + " puntos de vida");
    console.log(personaje1.nombre + " ataca a " + personaje2.nombre);
    console.log(personaje2.nombre + " tiene " + personaje2.vida + " puntos de vida");
  }
  if (personaje1.vida <= 0) {
    console.log("El ganador de la batalla es " + personaje2.nombre);
    return personaje2;
  } else {
    console.log("El ganador de la batalla es " + personaje1.nombre);
    return personaje1;
  }
}

// Función para mostrar los personajes disponibles y obtener la selección del usuario
function seleccionarPersonaje(personajesDisponibles) {
  let opciones = "";
  for (let i = 0; i < personajesDisponibles.length; i++) {
    opciones += (i + 1) + ". " + personajesDisponibles[i].nombre + "\n";
  }
  let seleccion = parseInt(prompt(
    "Elige el personaje con el que deseas jugar seleccionando el número asignado:\n" +
    opciones
  ));
  while (isNaN(seleccion) || seleccion < 1 || seleccion > personajesDisponibles.length) {
    seleccion = parseInt(prompt("Por favor, ingresa una opción válida:"));
  }
  return personajesDisponibles[seleccion - 1];
}

// Batallas hasta que quede un único ganador
let ganadorFinal;
for (let i = 0; i < personajes.length - 1; i++) {
  let personaje1 = seleccionarPersonaje(personajes.filter(personaje => personaje.vida > 0));
  let personajesDisponibles = personajes.filter(personaje => personaje !== personaje1 && personaje.vida > 0);
  if (personajesDisponibles.length === 0) { 
    break;
  }
  let personaje2 = seleccionarPersonaje(personajesDisponibles);
  ganadorFinal = realizarBatalla(personaje1, personaje2);
  console.log("--------------------------------------------");
}

// Ganador final
console.log("El ganador final es " + ganadorFinal.nombre);