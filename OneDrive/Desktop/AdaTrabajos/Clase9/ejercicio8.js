//Ejercicio 8:  
//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga 
//sobre los triángulos para determinar la formula)

const prompt = require('prompt-sync')();
let ladoA= parseFloat( prompt('Cuanto mide el lado A del triángulo?: ') );
let ladoB= parseFloat( prompt('Cuanto mide el lado B del triángulo?: ') );
let ladoC= parseFloat( prompt('Cuanto mide el lado C del triángulo?: ') );

if (ladoA === ladoB && ladoB === ladoC) {
    console.log("El triángulo es equilátero.");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("El triángulo es isósceles.");
} else {
    console.log("El triángulo es escaleno.");
}

