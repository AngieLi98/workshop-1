let pasaporte = prompt("Ingrese el primer digito de su pasaporte").toLowerCase();
let informacion = pasaporte === "a";

console.log("el usuario es nacional: " + informacion);

if (pasaporte === "a") {
    console.log("Toma la primera salida a la izquierda para vuelos nacionales");
 } else {
     console.log("Toma la primera salida a la derecha para vuelos internacionales");
    }