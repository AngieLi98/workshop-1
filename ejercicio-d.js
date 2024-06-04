//Declaracion de variables 
let nombreDelEmpleado = prompt("Nombre del empleado");
let salarioHora = Number(prompt("¿Cuantos ganas por hora?"));
let horasLaboradoradas = Number(prompt("¿Cuantos horas laboraste al mes?"));
//operaciones
let salarioMensual = salarioHora * horasLaboradoradas;
let subsiduo = salarioMensual <= 700000;


console.log("Nombre del empleado: " + nombreDelEmpleado); // Muestra en la consola el nombre del empleado
console.log("Salario basico mensual " + salarioMensual); // Muestra en la consola el salario básico mensual del empleado
console.log("Recibe subsidio: " + subsiduo); // Muestra en la consola si el empleado recibe subsidio
