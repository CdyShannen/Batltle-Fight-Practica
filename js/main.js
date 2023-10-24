function obtenerDineroDisponible() {
    let dinero = parseFloat(prompt("Ingrese la cantidad disponible en dólares:"));
    
    while (isNaN(dinero)) {
        dinero = parseFloat(prompt("Por favor, ingrese un número válido:"));
    }

    return dinero;
}

function comprarTelefono(precio, nombre) {
    if (dineroDisponible >= precio) {
        console.log(`Puedes comprar un ${nombre}!`);
        dineroDisponible -= precio;
    } else {
        console.log(`No tienes suficiente dinero para un ${nombre}`);
        console.log("Puedes considerar otros teléfonos disponibles");
    }
}

let dineroDisponible = obtenerDineroDisponible();
const precioIphone13 = 700;
const precioOtroTelefono = 600;

comprarTelefono(precioIphone13, "iPhone 13");

const formaDePago = prompt("Ingresa la forma de pago (efectivo, tarjeta, dolares):");

switch (formaDePago) {
    case "efectivo":
        console.log("Has elegido pagar con efectivo.");
        break;
    case "tarjeta":
        console.log("Has elegido pagar con tarjeta de crédito");
        break;
    case "dolares":
        console.log("Has elegido pagar con dólares");
        break;
    default:
        console.log("Forma de pago no válida, por favor elige entre: Efectivo, tarjeta o dólares");
}

while (dineroDisponible >= precioOtroTelefono) {
    comprarTelefono(precioOtroTelefono, "otro teléfono");
}

console.log(`Dinero restante: ${dineroDisponible} dólares.`);



