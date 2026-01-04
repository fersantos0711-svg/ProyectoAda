//Ejercicio 7:  
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra 
//el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462) 


import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question('Por favor, ingresa tu peso en kilogramos: ', (pesoKg) => {
    const pesoEnKg = parseFloat(pesoKg);        
    const pesoEnLibras = pesoEnKg * 2.20462;
    console.log(`Tu peso en libras es: ${pesoEnLibras.toFixed(2)} lbs`);
    rl.close();
});
