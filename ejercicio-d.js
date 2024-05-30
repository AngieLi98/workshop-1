let nombreDelEmpleado = prompt("Nombre del empleado");
let salarioHora = prompt("¿Cuantos ganas por hora?");
let horasLaboradoradas = prompt("¿Cuantos horas laboraste al mes?");

let salarioMensual = salarioHora * horasLaboradoradas;
let subsiduo = salarioMensual <= 700000;

console.log("Nombre del empleado: "+ nombreDelEmpleado);
console.log("Salario basico mensual " + salarioMensual);
console.log("Recibe subsidio: " + subsiduo);
