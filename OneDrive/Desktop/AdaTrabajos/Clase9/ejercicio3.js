//Ejercicio 3: 
//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que 
//ingrese dos valores booleanos (true o false) y muestra el resultado de diversas 
//combinaciones lógicas.


const prompt = require("prompt-sync")({sigint: true});

let cond1 = prompt( "Ingresa el primer valor booleano (true/false): " );
let cond2 = prompt( "Ingresa el segundo valor booleano (true/false): " );   

cond1 = ( cond1.toLowerCase() === 'true' );
cond2 = ( cond2.toLowerCase() === 'true' ); 
console.log( `cond1 AND cond2: ${ cond1 && cond2 }` );
console.log( `cond1 OR cond2: ${ cond1 || cond2 }` );
console.log( `NOT cond1: ${ !cond1 }` );
console.log( `NOT cond2: ${ !cond2 }` );
console.log( `cond1 XOR cond2: ${ (cond1 || cond2) && !(cond1 && cond2) }` );       
console.log( `cond1 NAND cond2: ${ !(cond1 && cond2) }` );





