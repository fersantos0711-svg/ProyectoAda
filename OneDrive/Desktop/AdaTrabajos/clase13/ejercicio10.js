//⦁	Ejercicio 10: Factorial de un número (Ejercicio entrevista)
//Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
//Fórmula del factorial:
//n! = n * (n - 1) * (n - 2) * ... * 1
const prompt = require('prompt-sync')();

const calcularFactorial = function(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }   
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}   

const numero = parseInt(prompt("Ingresa un número para calcular su factorial: "));
const resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);

