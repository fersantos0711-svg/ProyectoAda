//⦁	Ejercicio 6: El deportista
//Para este ejercicio deberán definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, experiencia.
//Ademas queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
//La función entrenarHoras tiene las siguientes tres características://
//⦁	Recibe por parámetro la cantidad de horas.
//⦁	Resta a su energía (this.energia) la cantidad de horas x 5.
//⦁	Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

const prompt = require('prompt-sync')();


const deportista = {
    nombre: "Juan",
    energia: 100,
    experiencia: 0,
    entrenarHoras: function(horas) {
        this.energia -= horas * 5;
        this.experiencia += horas * 2;
    }       

};

console.log(`Antes de entrenar: Energía = ${deportista.energia}, Experiencia = ${deportista.experiencia}`);
deportista.entrenarHoras(3); 
console.log(`Después de entrenar 3 horas: Energía = ${deportista.energia}, Experiencia = ${deportista.experiencia}`);       
deportista.entrenarHoras(5);
console.log(`Después de entrenar 5 horas: Energía = ${deportista.energia}, Experiencia = ${deportista.experiencia}`);
deportista.entrenarHoras(2);
console.log(`Después de entrenar 2 horas: Energía = ${deportista.energia}, Experiencia = ${deportista.experiencia}`);

//pedir al usuario cuantas horas quiere que entrene el deportista
const horasEntrenamiento = parseInt(prompt("Ingrese la cantidad de horas que desea que entrene el deportista: "));
deportista.entrenarHoras(horasEntrenamiento);
console.log(`Después de entrenar ${horasEntrenamiento} horas: Energía = ${deportista.energia}, Experiencia = ${deportista.experiencia}`);   

    



