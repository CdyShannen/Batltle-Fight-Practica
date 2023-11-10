// Filtrar los personajes que quedaron con vida
const personajesConVida = personajes.filter(personaje => personaje.vida > 0);

// Crear un array con los nombres de los personajes con vida
const nombresConVida = personajesConVida.map(personaje => personaje.nombre);

// Mostrar un prompt con los nombres de los personajes con vida
const seleccion3 = parseInt(prompt(
  "Elige el personaje con el que deseas luchar seleccionando el número asignado:\n" +
  nombresConVida.map((nombre, index) => (index + 1) + ". " + nombre).join("\n")
));

// Obtener el personaje seleccionado
const personaje3 = obtenerPersonaje(personajes.indexOf(personajesConVida[seleccion3 - 1]));
console.log(personaje3.nombre + " ha sido seleccionado");