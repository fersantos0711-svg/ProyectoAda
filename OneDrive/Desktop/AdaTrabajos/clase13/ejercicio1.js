//⦁	Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
//Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo.
//Pista: Usa la fórmula:



const prompt = require('prompt-sync')();


//Área = (base * altura) / 2
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Ejemplo de uso:
const base = 5;
const altura = 10;
const area = calcularAreaTriangulo(base, altura);
console.log(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`); // Salida: El área del triángulo con base 5 y altura 10 es: 25
// Área = (base * altura) / 2


    