//⦁	Ejercicio 2: Número mayor (función expresada)
//Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.


const prompt = require('prompt-sync')();

// preguntar al usuario por dos números
const numero1 = parseFloat(prompt("Ingresa el primer número: "));
const numero2 = parseFloat(prompt("Ingresa el segundo número: "));  
// función expresada para encontrar el número mayor
const encontrarMayor = function(num1, num2) {
    if (num1 > num2) {
        return num1;            
    } else {
        return num2;            
    }

};
// ejemplo de uso
const mayor = encontrarMayor(numero1, numero2);
console.log(`El número mayor entre ${numero1} y ${numero2} es: ${mayor}`);



