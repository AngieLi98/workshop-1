let sueldo = prompt("¿Cuanto es tu sueldo?");
let anos = prompt("¿Cuanto años has trabajado?");

let resultado1 = sueldo < 2000 && anos >= 10;
let resultado2 = sueldo < 2000 && anos < 10;
let resultado3 = sueldo >= 2000;

console.log(resultado1); 
console.log(resultado2);
console.log(resultado3);