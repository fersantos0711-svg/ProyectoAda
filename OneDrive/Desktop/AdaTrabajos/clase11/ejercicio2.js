//Ejercicio 2: Semáforo inteligente 
//Consigna: 
//Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un 
//color del semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, el programa 
//debe imprimir un mensaje con la acción correspondiente: 
//● Rojo: "Alto, no puedes avanzar." 
//● Amarillo: "Precaución, prepárate para avanzar." 
//● Verde: "Avanza con seguridad." 
//Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color 
//no reconocido, ingresa rojo, amarillo o verde.

//Utiliza un switch para resolver este ejercicio.


const prompt = require("prompt-sync")({sigint: true});

// Solicitar al usuario que ingrese un color del semáforo
let color = prompt("Por favor, ingresa un color del semáforo (rojo, amarillo, verde): ").toLowerCase();

// Determinar la acción correspondiente según el color ingresado
let mensaje;
switch (color) {
    case "rojo":
        mensaje = "Alto, No puedes avanzar.";
        break;
    case "amarillo":
        mensaje = "Precaución, prepárate para avanzar.";
        break;
    case "verde":
        mensaje = "Avanza con seguridad.";
        break;  

    default:
        mensaje = "Color no reconocido, ingresa rojo, amarillo o verde.";
        break;
}

// Mostrar el mensaje al usuario
console.log(mensaje);


