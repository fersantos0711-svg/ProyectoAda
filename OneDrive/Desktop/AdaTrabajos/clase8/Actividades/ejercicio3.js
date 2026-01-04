//Ejercicio 3: Suma de dos números ingresados por el usuario 
//Enunciado: 
//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
//aritméticos. Escribe un programa que: 
//1. 
///Pida al usuario que ingrese dos números. 
//2. Sume ambos números. 
//3. Muestre el resultado de la suma. 
//Requisitos: 
//● Utiliza prompt() para recibir los números. 
//● Utiliza parseFloat() para convertir las entradas a números. 
//● Almacena los resultados en variables adecuadas y muestra el resultado.

const prompt = require("prompt-sync")({sigint: true});

//Pedir al usuario que ingrese el primer número
let firstAmt = parseFloat(prompt("Ingresa la primera cantidad: "));

//Pedir al usuario que ingrese el segundo número
let secondAmt = parseFloat(prompt("Ingresa la segunda cantidad: "));

//Sumar ambos números y mostrar el resultado
let sum = firstAmt + secondAmt;
console.log("La suma de", firstAmt, "y", secondAmt, "es:", sum);    

//Mostrar el resultado de la suma
