//Ejercicio 10: Adivina el número 
//Consigna: 
//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, 
//pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera 
//de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no 
//acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver 
//este ejercicio.


const prompt = require("prompt-sync")({ sigint: true });


const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let acertado = false;

for (let intento = 1; intento <= 3; intento++) {
    let adivinanza = parseInt(prompt(`Intento ${intento}: Adivina el número (entre 1 y 10): `));


    if (adivinanza === numeroSecreto) {
        console.log("¡Felicidades! ¡Has adivinado el número!");
        acertado = true;
        break;
    }

    console.log("Número incorrecto. Intenta de nuevo.");
}
if (!acertado) {
    console.log(`Lo siento, no has adivinado el número. El número secreto era: ${numeroSecreto}`);
}
    
        