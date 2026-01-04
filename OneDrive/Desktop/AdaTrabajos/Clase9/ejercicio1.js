//Ejercicio 1:  
//Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese 
//dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({sigint: true});

//Solicitar al usuario que ingrese dos números

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

//Comparar los números e informar cuál es mayor o si son iguales


if (num1 > num2) {
    console.log("El primer número es mayor:", num1);
}   else if (num2 > num1) {
    console.log("El segundo número es mayor:", num2);
} else {
    console.log("Ambos números son iguales.");
}
