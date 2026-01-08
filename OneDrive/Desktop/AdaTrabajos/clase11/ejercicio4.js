//Ejercicio 4: ¿Es par o impar? 
//Consigna: 
//Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un 
//número y determine si es par o impar. Muestra un mensaje explicativo indicando qué 
//significa cada caso.

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Por favor, ingrese un número entero: "));

let tipoNum = (numero % 2 === 0) ? "par" : "impar";

console.log(`El número ${numero} es ${tipoNum}. Un número par es aquel que es divisible por 2 sin dejar residuo, mientras que un número impar deja un residuo de 1 cuando se divide por 2.`);


