//⦁	Ejercicio 4: Número par o impar
//Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.

const prompt = require("prompt-sync")();


function esPar(numero) {
    let resultado;
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }
    return resultado;
}

// Solicitar al usuario que ingrese un número
const numeroIngresado = parseInt(prompt("Ingresa un número: "));

// Llamar a la función y mostrar el resultado
const resultado = esPar(numeroIngresado);
console.log(resultado);





