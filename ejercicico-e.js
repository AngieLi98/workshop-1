// Solicita al usuario que ingrese una letra
let letra = prompt("Escribe una letra");
// Verifica si la letra ingresada es una vocal (a, e, i, o, u)
let formula = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ;
// Muestra en la consola si la letra ingresada es una vocal
console.log(formula);