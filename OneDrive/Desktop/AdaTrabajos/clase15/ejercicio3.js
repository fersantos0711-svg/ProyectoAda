//⦁	Ejercicio 3: Agregar y eliminar a la fila de mascotas
//Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.



const prompt = require('prompt-sync')();
let mascotas = ["Perro", "Gato", "Conejo"]; 
// Agregar "Hámster" al inicio de la lista
mascotas.unshift("Hámster");
// Atender a la primera mascota de la fila
let mascotaAtendida = mascotas.shift();
console.log("Mascota atendida:", mascotaAtendida);
console.log("Lista actualizada de mascotas:", mascotas);    
        