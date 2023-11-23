// Objetos para los personajes
let personajes = [
  { nombre: "PIKACHU", vida: 500, golpe: 170 },
  { nombre: "LINK", vida: 550, golpe: 150 },
  { nombre: "MARIO", vida: 600, golpe: 155 },
  { nombre: "MEWTWO", vida: 500, golpe: 165 },
  { nombre: "YOSHI", vida: 500, golpe: 150 },
];

//Botones de personajes
let PIKACHU1 = document.querySelector("[data-personaje='PIKACHU']");
let LINK1 = document.querySelector("[data-personaje='LINK']");
let MARIO1 = document.querySelector("[data-personaje='MARIO']");
let MEWTWO1 = document.querySelector("[data-personaje='MEWTWO']");
let YOSHI1 = document.querySelector("[data-personaje='YOSHI']");

// Función para mostrar información de la batalla en el DOM
function iniciarBatallaInfo(personajeUsuario, personajeContrincante) {
  let resultadoBatalla = document.getElementById("resultado-batalla");
  resultadoBatalla.innerHTML = `
    <p>${personajeUsuario} vs ${personajeContrincante.nombre}</p>
    <p>¡La batalla ha comenzado!</p>
  `;
}

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

// Función para iniciar la batalla
function iniciarBatalla(personajeSeleccionado) {
  console.log("INICIAR BATALLA: " + personajeSeleccionado);
  [PIKACHU1, LINK1, MARIO1, MEWTWO1, YOSHI1].forEach(personajeBtn => {
    personajeBtn.style.display = "none";
  });
  document.querySelector(`[data-personaje='${personajeSeleccionado}']`).style.display = "block";
  console.log("2 " + personajeSeleccionado);
  let personaje = personajes.find(personaje => personaje.nombre === personajeSeleccionado);
  const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
  this.realizarBatalla(personaje, personajeAleatorio);
}

//Evento click a los botones de selección
const seleccionarBtns = document.querySelectorAll(".seleccionar-btn");
seleccionarBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("ENTRO");
    const personajeSeleccionado = btn.getAttribute("data-personaje");
    iniciarBatalla(personajeSeleccionado);
  });
});

// Batallas hasta que quede un único ganador
let ganadorFinal;
for (let i = 0; i < personajes.length - 1; i++) {
  let personaje1 = personajes.filter(personaje => personaje.vida > 0)[0];
  let personajesDisponibles = personajes.filter(personaje => personaje !== personaje1 && personaje.vida > 0);
  if (personajesDisponibles.length === 0) { 
    break;
  }
  let personaje2 = personajesDisponibles[Math.floor(Math.random() * personajesDisponibles.length)];
  ganadorFinal = realizarBatalla(personaje1, personaje2);
  console.log("--------------------------------------------");
}

// Ganador final
console.log("El ganador final es " + ganadorFinal.nombre);