//⦁	Ejercicio 10: Flores Favoritas
//Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
//⦁	Inicializa un array vacío para almacenar las flores favoritas.
//⦁	Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
//⦁	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
//⦁	Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).



const prompt = require('prompt-sync')();
const floresFavoritas = [];
floresFavoritas[0] = prompt("Ingrese su primera flor favorita: ");
floresFavoritas[1] = prompt("Ingrese su segunda flor favorita: ");
floresFavoritas[2] = prompt("Ingrese su tercera flor favorita: ");      
const florEspecifica = prompt("Ingrese una flor específica para verificar si está entre sus favoritas: ");
let contador = 0;   
for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i].toLowerCase() === florEspecifica.toLowerCase()) {
        contador++;
    }   
}       


console.log(`La flor "${florEspecifica}" se mencionó ${contador} vez/veces entre sus flores favoritas.`);
console.log("Sus flores favoritas son:");
for (let i = 0; i < floresFavoritas.length; i++) {
    console.log(`- ${floresFavoritas[i]}`);
}

console.log(`Total de flores favoritas mencionadas: ${floresFavoritas.length}`);




