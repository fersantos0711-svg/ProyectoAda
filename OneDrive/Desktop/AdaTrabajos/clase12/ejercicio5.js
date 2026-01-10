//Ejercicio 5: Uso de Arrays y Condicionales 
//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en 
//un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se 
//encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su 
//desarrollo)


const prompt = require('prompt-sync')();
let nombres = [];

for (let i = 0; i < 5; i++) {
    nombres[i] = prompt("Ingresa el nombre " + (i + 1) + ": ");
}   

let nombreBuscar = prompt("Ingresa un nombre para buscar en la lista: ");
if (nombres.includes(nombreBuscar)) {
    console.log(`El nombre "${nombreBuscar}" se encuentra en la lista.`);
} else {
    console.log(`El nombre "${nombreBuscar}" no se encuentra en la lista.`);
}

