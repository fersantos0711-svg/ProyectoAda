//Ejercicios de Arrow Function:
//⦁	Ejercicio 1: Calcular el precio final con IVA
//Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.

const prompt = require("prompt-sync")();


const calcularPrecioFinal = (precio, iva) => {
    return precio + (precio * iva / 100);
}   

const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
const porcentajeIva = parseFloat(prompt("Ingrese el porcentaje de IVA:"));
const precioFinal = calcularPrecioFinal(precioProducto, porcentajeIva);
console.log(`El precio final con IVA es: ${precioFinal}`);
