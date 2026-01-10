//Ejercicio 9: Última aparición de un modelo de auto 
//Se está realizando el desarrollo de una aplicación para control de gastos. Cada 
//día, el usuario ingresa sus gastos cotidianos. 
//La idea es solo registrar el total de los gastos, al finalizar la jornada. 
//Para simplificar, vamos a considerar que todos los meses tienen cuatro 
//semanas. 
//Los gastos estarán en una matriz de 4x7, cada fila representa una semana y 
//cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, 
//día 1, columna 1, día 2, etcétera.  
//a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos 
//que cada fila representa una semana, es decir, si nos indican semana 2 
//tenemos que sumar la fila 1 de la matriz. Recordar que las matrices 
//comienzan siempre en posición 0. 
//b) La aplicación también tendrá una parte de estadísticas, para esto nos 
//solicitan dar el total de un día en particular, por ejemplo del día 3, acá 
//también tengamos en cuenta lo que ocurre con las filas, ya que las columnas 
//también comienzan en 0. 
//c) Por último, es necesario tener el total de gastos realizados en el mes. 
//✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para 
//resolver este último punto? 
//d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día 
//que más gastos se realizaron. 




const prompt = require('prompt-sync')();
let gastos = [  
    [100, 200, 150, 300, 250, 400, 350], // Semana 1

    [120, 220, 180, 320, 270, 420, 370], // Semana 2

    [130, 230, 190, 330, 280, 430, 380], // Semana 3    
    [140, 240, 200, 340, 290, 440, 390]  // Semana 4
];
let semana = parseInt(prompt("Ingresa el número de semana (1-4): ")) - 1;
if (semana >= 0 && semana < 4) {
    let totalSemana = 0;    
    for (let dia = 0; dia < 7; dia++) {
        totalSemana += gastos[semana][dia];
    }
    console.log("El total de gastos en la semana " + (semana + 1) + " es: " + totalSemana);
} else {

    console.log("Número de semana inválido. Por favor ingresa un número entre 1 y 4.");
}
let dia = parseInt(prompt("Ingresa el número de día (1-7): ")) - 1;
if (dia >= 0 && dia < 7) {
    let totalDia = 0;   
    for (let semana = 0; semana < 4; semana++) {
        totalDia += gastos[semana][dia];
    }
    console.log("El total de gastos en el día " + (dia + 1) + " es: " + totalDia);
} else {
    console.log("Número de día inválido. Por favor ingresa un número entre 1 y 7.");
}   
let totalMes = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
        totalMes += gastos[i][j];
    }
}
console.log("El total de gastos en el mes es: " + totalMes);
let maxSemana = 0;
let semanaMaxGastos = 0;
for (let i = 0; i < 4; i++) {
    let totalSemana = 0;

    for (let j = 0; j < 7; j++) {
        totalSemana += gastos[i][j];
    }
    if (totalSemana > maxSemana) {
        maxSemana = totalSemana;
        semanaMaxGastos = i;
    }
}
console.log("La semana con más gastos es la semana " + (semanaMaxGastos + 1) + " con un total de " + maxSemana);
let maxDia = 0;
let diaMaxGastos = 0;
for (let j = 0; j < 7; j++) {
    let totalDia = 0;



    for (let i = 0; i < 4; i++) {
        totalDia += gastos[i][j];
    }
    if (totalDia > maxDia) {
        maxDia = totalDia;

        diaMaxGastos = j;
    }
}
console.log("El día con más gastos es el día " + (diaMaxGastos + 1) + " con un total de " + maxDia);


    
