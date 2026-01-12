//⦁	Ejercicio 2: Calcular promedio de calificaciones
//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.


const prompt = require("prompt-sync")();

const calcularPromedio = (calificaciones) => {
    const suma = calificaciones.reduce((acum, calif) => acum + calif, 0);
    return suma / calificaciones.length;
}   
const calificaciones = [];  
for (let i = 0; i < 5; i++) {
    const calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`));
    calificaciones.push(calificacion);
}
const promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${promedio}`);

    