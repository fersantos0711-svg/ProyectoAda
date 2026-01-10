// Ejercicio 1: While 
//Crea un programa que solicite al usuario ingresar números continuamente hasta 
//que el usuario ingrese un número negativo. Luego, imprime la suma de todos los 
//números ingresados.

const prompt = require('prompt-sync')();

let suma = 0;
let numero = 0;
while (true) {
    numero = parseFloat(prompt("Ingresa un número :")); 
    if (numero < 0) {
        break;
    }
    suma += numero;
}
console.log("La suma de los números ingresados es: " + suma);



