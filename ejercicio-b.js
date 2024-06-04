// Solicita al usuario que ingrese el valor de compra
let compra = Number(prompt("Valor de la compra"));
// Verifica si el valor de la compra es mayor o igual a 100,000
let resultado = compra >= 100000
// Muestra en la consola si la cuenta es elegible para el descuento
console.log(`tu cuenta esta disponible para el descuento:  ${resultado}`);