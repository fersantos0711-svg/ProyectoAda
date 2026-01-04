//Ejercicio 9:  
//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el 
//radio de un círculo y calcula su área y perímetro utilizando la constante PI. 

const prompt = require('prompt-sync')();
const PI = 3.14159;
const radio = parseFloat(prompt("Ingresa el radio del círculo: "));

const area = PI * Math.pow(radio, 2);
const perimetro = 2 * PI * radio;   
console.log(`El área del círculo es: ${area}`);
console.log(`El perímetro del círculo es: ${perimetro}`);
    