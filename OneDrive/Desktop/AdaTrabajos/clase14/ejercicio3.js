//⦁	Ejercicio 3: Clasificación de edades
//Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.


const prompt = require('prompt-sync')();
const clasificarEdad = (edad) => {
    if (edad >= 0 && edad <= 12) {
        return 'niño';

    } else if (edad >= 13 && edad <= 19) {
        return 'adolescente';
    }

    else if (edad >= 20 && edad <= 59) {
        return 'adulto';
    }
    else if (edad >= 60) {
        return 'adulto mayor';
    }
    else {
        return 'edad no válida';
    }


};

const edadUsuario = parseInt(prompt('Por favor, ingresa una edad: '));
const clasificacion = clasificarEdad(edadUsuario);
console.log(`La clasificación de la edad ${edadUsuario} es: ${clasificacion}.`);



    