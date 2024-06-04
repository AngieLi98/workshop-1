// Solicita al usuario que ingrese su sueldo
let sueldo = prompt("¿Cuanto es tu sueldo?");
// Solicita al usuario que ingrese los años que ha trabajado
let anos = prompt("¿Cuanto años has trabajado?");

// operaciones 
let resultado1 = sueldo < 2000 && anos >= 10;
let resultado2 = sueldo < 2000 && anos < 10;
let resultado3 = sueldo >= 2000;

//resultados
console.log(resultado1); 
console.log(resultado2);
console.log(resultado3);