// Inicialización de variables booleanas para P y Q
const p1 = true;
const p2 = true;
const p3 = false;
const p4 = false;

const q1 = true;
const q2 = false;
const q3 = true;
const q4 = false;

// Ejercicio A: Operación NOT sobre P
console.log("NOT P");

console.log(!p1); // Muestra el valor negado de p1
console.log(!p2); // Muestra el valor negado de p2
console.log(!p3); // Muestra el valor negado de p3
console.log(!p4); // Muestra el valor negado de p4


// Ejercicio A: Operación NOT P AND Q
console.log("NOT P AND Q");


console.log(!p1 && q1); // Muestra el resultado de la operación !p1 AND q1
console.log(!p2 && q2); // Muestra el resultado de la operación !p2 AND q2
console.log(!p3 && q3); // Muestra el resultado de la operación !p3 AND q3
console.log(!p4 && q4); // Muestra el resultado de la operación !p4 AND q4


console.log("Aquí empieza el ejercicio B");

// Ejercicio B: Operación NOT sobre P
console.log("NOT P");

console.log(!p1);
console.log(!p2);
console.log(!p3);
console.log(!p4);

console.log("NOT Q");

console.log(!q1); // Muestra el valor negado de q1
console.log(!q2); // Muestra el valor negado de q2
console.log(!q3); // Muestra el valor negado de q3
console.log(!q4); // Muestra el valor negado de q4
 

console.log("NOT P AND NOT Q");

console.log(!p1 && !q1); // Muestra el resultado de la operación !p1 AND !q1
console.log(!p2 && !q2); // Muestra el resultado de la operación !p2 AND !q2
console.log(!p3 && !q3); // Muestra el resultado de la operación !p3 AND !q3
console.log(!p4 && !q4); // Muestra el resultado de la operación !p4 AND !q4
