const vidaPikachu = 500;
const vidaLink = 550;
const vidaMario = 600;
const vidaMewtwo = 500;
const vidaYoshi = 500;

const golpePikachu = 170;
const golpeLink = 150;
const golpeMario = 155;
const golpeMewtwo = 165;
const golpeYoshi = 150;

let contenedor1 = 0;
let golpe1 = 0;
let nombreLuchador = "";

let contenedor2 = 0;
let golpe2 = 0;
let nombreContrincante = "";

let Battle = prompt("Elije el personaje con el que deseas luchar seleccionando el numero asignado: \n1. Pikachu \n2. Link \n3. Mario \n4. Yoshi \n5. Mewtwo ");

function valido(opcion) {
    if (opcion === "1" || opcion === "2" || opcion === "3" || opcion === "4" || opcion === "5") {
        return true;
    } else {
        console.log("Por favor ingrese una opción válida");
        return false;
    }
}
while (!valido(Battle)) {
    Battle = prompt("Por favor, ingrese una opción válida para el personaje que deseas usar:");
}


switch (Battle) {
    case "1":
        console.log("Pikachu ha sido seleccionado");
        contenedor1 = vidaPikachu;
        golpe1 = golpePikachu;
        nombreLuchador = "Pikachu";
        break;
    case "2":
        console.log("Link ha sido seleccionado");
        contenedor1 = vidaLink;
        golpe1 = golpeLink;
        nombreLuchador = "Link";
        break;
    case "3":
        console.log("Mario ha sido seleccionado");
        contenedor1 = vidaMario;
        golpe1 = golpeMario;
        nombreLuchador = "Mario";
        break;
    case "4":
        console.log("Mewtwo ha sido seleccionado");
        contenedor1 = vidaMewtwo;
        golpe1 = golpeMewtwo;
        nombreLuchador = "Mewtwo";
        break;
    case "5":
        console.log("Yoshi ha sido seleccionado");
        contenedor1 = vidaYoshi;
        golpe1 = golpeYoshi;
        nombreLuchador = "Yoshi";
        break;
}

let BattleFight = prompt("Elige el personaje que va a usar tu contrincante:\n1 - Pikachu\n2 - Link\n3 - Mario\n4 - Mewtwo\n5 - Yoshi");

while (!valido(BattleFight)) {
    contrincante = prompt("Por favor, ingrese una opción válida para el personaje que va a usar tu contrincante:");
}

switch (BattleFight) {
    case "1":
        console.log("Pikachu ha sido seleccionado");
        contenedor2 = vidaPikachu;
        golpe2 = golpePikachu;
        nombreContrincante = "Pikachu";
        break;
    case "2":
        console.log("Link ha sido seleccionado");
        contenedor2 = vidaLink;
        golpe2 = golpeLink;
        nombreContrincante = "Link";
        break;
    case "3":
        console.log("Mario ha sido seleccionado");
        contenedor2 = vidaMario;
        golpe2 = golpeMario;
        nombreContrincante = "Mario";
        break;
    case "4":
        console.log("Mewtwo ha sido seleccionado");
        contenedor2 = vidaMewtwo;
        golpe2 = golpeMewtwo;
        nombreContrincante = "Mewtwo";
        break;
    case "5":
        console.log("Yoshi ha sido seleccionado");
        contenedor2 = vidaYoshi;
        golpe2 = golpeYoshi;
        nombreContrincante = "Yoshi";
        break;
}

while ((contenedor1 > 0 ) && (contenedor2 > 0)) {
    if (contenedor1 <= 0 || contenedor2 <= 0) {
        break; 
    }

    contenedor1 -= golpe2;
    contenedor2 -= golpe1;

    console.log(nombreContrincante + " ataca");
    console.log("A " + nombreLuchador + " le queda " + contenedor1 + " de vida");

    console.log(nombreLuchador + " ataca");
    console.log("A " + nombreContrincante + " le queda " + contenedor2 + " de vida");
}

if (contenedor2 <= 0) {
    console.log("El ganador es " + nombreLuchador);
} else if (contenedor1 <= 0) {
    console.log("El ganador es " + nombreContrincante);
}
