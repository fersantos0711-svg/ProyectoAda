//Ejercicio 2 - Comparación de Tres Números: Escribe un programa que 
//pida al usuario tres números y determine cuál es el mayor de los tres. 
//Muestra el número mayor en la consola. 
//Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides 
//usar “let” para definir variables. 
//Pista 2: Investiga que es parseFloat, ya que este ejercicio lo 
//necesitaras.

const prompt = require("prompt-sync")({ sigint: true }); 



let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

let mayor;
if (numero1 >= numero2 && numero1 >= numero3){ mayor =numero1; }
else if (numero2 >= numero1 && numero2 >= numero3){mayor =numero2;}
else {mayor =numero3;}
console.log("El número mayor es: " + mayor);


 