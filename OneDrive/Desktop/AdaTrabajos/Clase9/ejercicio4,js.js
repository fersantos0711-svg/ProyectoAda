//Ejercicio 4:  
////Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si ////
///el nombre ingresado es igual a tu nombre. 

const prompt = require("prompt-sync")({sigint: true});

let name = prompt("Hola! Cual es tu nombre? ");
const myName = "Fer";
if (name === myName) {
    console.log("Hola Fer, bienvenido de nuevo!");
} else {
    console.log(`Hola ${name}, bienvenido!`);

}   


