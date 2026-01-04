// Ejercicio 2:  
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores 
//numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está 
//dentro del rango definido por las constantes.


const prompt = require ('prompt-sync')({sigint: true   });


//Definir las constantes RANGO_MINIMO y RANGO_MAXIMO
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;

//Solicitar al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número:"));

//Verificar si el número está dentro del rango definido por las constantes
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango definido.");
} else {
    console.log("El número no está dentro del rango definido.");
}   
