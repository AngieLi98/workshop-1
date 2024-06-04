// Solicita al usuario que ingrese el primer dígito de su pasaporte
// El valor ingresado se convierte a minúsculas para asegurar consistencia
let pasaporte = prompt("Ingrese el primer digito de su pasaporte").toLowerCase();

// Verifica si el primer dígito ingresado es una "a"
// La variable 'informacion' será true si el dígito es "a", de lo contrario, será false
let informacion = pasaporte === "a";

// Muestra en la consola si el usuario es nacional o no, basándose en el valor de 'informacion'
console.log("el usuario es nacional: " + informacion);

// Condicional que proporciona instrucciones de salida basadas en el primer dígito del pasaporte
if (pasaporte === "a") {
     // Si el dígito es "a", el usuario recibe instrucciones para tomar la primera salida a la izquierda
    console.log("Toma la primera salida a la izquierda para vuelos nacionales");
 } else {
    // Si el dígito no es "a", el usuario recibe instrucciones para tomar la primera salida a la derecha
     console.log("Toma la primera salida a la derecha para vuelos internacionales");
    }