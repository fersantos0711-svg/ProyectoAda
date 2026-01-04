//Enunciado: 
//En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes escribir 
//un programa en JavaScript que: 
//////1. 
//////Solicite al usuario que ingrese un número cualquiera. 
//////2. Calcule el doble de ese número. 
//////3. Muestre el resultado en la consola. 
//////Requisitos: 
//////● Utiliza la función prompt() para solicitar el dato al usuario. 
//////● Almacená el número ingresado en una variable. 
//////● Utiliza un operador aritmético para calcular el doble del número. 

const prompt = require("prompt-sync")({sigint: true});  

//Solicitar al usuario que ingrese un número
let inputNum = parseFloat(prompt("Por favor, ingrese un número cualquiera:"));

//Calcular el doble del número ingresado
let doubleNum = inputNum*2;

//Mostrar el resultado en la consola    
console.log("El doble de " + inputNum + " es: " + doubleNum);