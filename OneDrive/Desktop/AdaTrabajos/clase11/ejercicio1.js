//Ejercicio 1: ¿Positivo, negativo o cero? 
//Consigna: 
//Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida 
//al usuario un número cualquiera. El programa deberá analizar si el número ingresado es 
//positivo, negativo o cero. Utiliza estructuras if ternario para resolverlo y muestra un mensaje 
//explicativo en cada caso.


const prompt = require("prompt-sync")({sigint: true});


// Solicitar al usuario que ingrese un número
let numero = parseFloat(prompt("Por favor, ingresa un número:"));

// Verificar si el número es positivo, negativo o cero  
  
let resultado = (numero > 0) ? "El número es positivo." :
                (numero < 0) ? "El número es negativo." :       
                
                "El número es cero.";

// Mostrar el resultado al usuario
console.log(resultado); 


