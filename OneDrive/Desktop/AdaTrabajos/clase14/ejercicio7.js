//⦁	Ejercicio 7: Libros
//Define dos objetos libro1 y libro2 con las //siguientes ////propiedades y valores:
//	título: una cadena con el título del libro.
//⦁	autor: una cadena con el nombre del autor del libro.
//⦁	anioPublicacion: un número con el año de publicación del libro.
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.


const prompt = require('prompt-sync')();
const libro1 = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
};
const libro2 = {
    titulo: "1984",
    autor: "George Orwell",
    anioPublicacion: 1949
};      
const mostrarLibro = (libros) => {
    libros.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.anioPublicacion}`);
    });
}

const arregloLibros = [libro1, libro2];
mostrarLibro(arregloLibros);


