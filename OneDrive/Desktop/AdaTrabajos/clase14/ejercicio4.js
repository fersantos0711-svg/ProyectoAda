//⦁	Ejercicio 4: Calcular descuento por cantidad
//Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad.


const prompt = require('prompt-sync')();const cantidad = parseInt(prompt("Ingrese la cantidad de productos comprados: "));
const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: ")); 

const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let total = cantidad * precioUnitario;
    let descuento = 0;  
    if (cantidad >= 10 && cantidad < 20) {
        descuento = 0.10; 
    }
    else if (cantidad >= 20) {
        descuento = 0.20; 
    }

    total = total - (total * descuento);
    return total;
}

const totalConDescuento = calcularTotalConDescuento(cantidad, precioUnitario);
console.log(`El total con descuento es: $${totalConDescuento.toFixed(2)}`);




