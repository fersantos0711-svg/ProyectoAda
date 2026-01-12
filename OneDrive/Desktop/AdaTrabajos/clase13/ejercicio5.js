//⦁	Ejercicio 5: Concatenar nombres (función expresada)
//Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.


const prompt = require('prompt-sync')();

const concatenarNombres = function(nombre, apellido) {
    return nombre + ' ' + apellido;
}
const nombre = prompt("Ingrese su nombre: ");
const apellido = prompt("Ingrese su apellido: ");   

const nombreCompleto = concatenarNombres(nombre, apellido);
console.log("El nombre completo es: " + nombreCompleto);



