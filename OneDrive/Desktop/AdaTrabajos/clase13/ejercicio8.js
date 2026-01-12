//⦁	Ejercicio 8: Convertir grados Celsius a Fahrenheit //(Ejercicio entrevista)
//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.


const prompt = require('prompt-sync')();
const convertirCelsiusAFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
}   


const celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius: "));
const fahrenheit = convertirCelsiusAFahrenheit(celsius);
console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`);


