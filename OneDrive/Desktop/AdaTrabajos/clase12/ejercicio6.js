//Ejercicio 6: Iguales a 10 pero menores de 1000 
//Dada una matriz, recorrer sus valores y sumar solo los números que estén por 
//encima o sean iguales a 10, pero menores que 1000.



const prompt = require('prompt-sync')();


let matriz = [

    [5, 12, 3000],
    [150, 8, 999],
    [7, 10, 500],
    [2000, 15, 20]
];

let suma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let valor = matriz[i][j];   
        if (valor >= 10 && valor < 1000) {
            suma += valor;
        }   


    }

}
console.log("La suma de los números entre 10 y 1000 es: " + suma);


