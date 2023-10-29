// Definir objetos para los personajes
const personajes = [
{ nombre: "Pikachu",
vida: 500,
golpe: 170,
},

{ nombre: "Link",
vida: 550,
golpe: 150,
},

{ nombre: "Mario",
vida: 600,
golpe: 155,
},

{ nombre: "Mewtwo",
vida: 500,
golpe: 165,
},

{ nombre: "Yoshi",
vida: 500,
golpe: 150,
},
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
function batalla(personaje1, personaje2) {
let contenedor1 = personaje1.vida;
let contenedor2 = personaje2.vida;

while (contenedor1 > 0 && contenedor2 > 0) {
contenedor1 -= personaje2.golpe;
contenedor2 -= personaje1.golpe;

console.log(personaje2.nombre + " ataca");
console.log("A " + personaje1.nombre + " le queda " + contenedor1 + " de vida");

console.log(personaje1.nombre + " ataca");
console.log("A " + personaje2.nombre + " le queda " + contenedor2 + " de vida" );
}
if (contenedor1 <= 0 || contenedor2 <= 0) {
    if (contenedor1 <= 0) {
        console.log("El ganador es " + personaje2.nombre);
    } else {
        console.log("El ganador es " + personaje1.nombre);
    }
}
}

// Obtener la selección del usuario
let seleccion1 = prompt("Elije el personaje con el que deseas luchar seleccionando el numero asignado:\n1. Pikachu\n2. Link\n3. Mario\n4. Mewtwo\n5. Yoshi");

while (!valido(seleccion1)) {
seleccion1 = prompt("Por favor, ingrese una opción válida para el personaje que deseas usar:");
}

let personaje1 = obtenerPersonaje(seleccion1 - 1);

console.log(personaje1.nombre + " ha sido seleccionado");

let seleccion2 = prompt("Elige el personaje que va a usar tu contrincante:\n1 - Pikachu\n2 - Link\n3 - Mario\n4 - Mewtwo\n5 - Yoshi"
);

while (!valido(seleccion2)) {
seleccion2 = prompt( "Por favor, ingrese una opción válida para el personaje que va a usar tu contrincante:");
}

let personaje2 = obtenerPersonaje(seleccion2 - 1);

console.log(personaje2.nombre + " ha sido seleccionado");

// Iniciar la batalla
batalla(personaje1, personaje2);
