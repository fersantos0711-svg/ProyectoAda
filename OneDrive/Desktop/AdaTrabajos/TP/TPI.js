//1. Estructura de Datos 
//a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro 
//debe tener las siguientes propiedades:  
//✔ id (número) 
//✔ título (string),  
//✔ autor (string),  
//✔ año (número),  
//✔ género (string),  
///✔ disponible (booleano). 

const prompt = require("prompt-sync")();



const libros = [] ;
libros.push({id: 1, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, género: "Realismo Mágico", disponible: true});
libros.push({id: 2, titulo: "1984", autor: "George Orwell", año: 1949, género: "Distopía", disponible: false});
libros.push({id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, género: "Novela", disponible: true});
libros.push({id: 4, titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald", año: 1925, género: "Novela", disponible: true});
libros.push({id: 5, titulo: "Matar a un Ruiseñor", autor: "Harper Lee", año: 1960, género: "Novela", disponible: false});
libros.push({id: 6, titulo: "La Odisea", autor: "Homero", año: -800, género: "Épica", disponible: true});
libros.push({id: 7, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, género: "Fábula", disponible: true});
libros.push({id: 8, titulo: "Crimen y Castigo", autor: "Fiódor Dostoyevski", año: 1866, género: "Novela", disponible: false});
libros.push({id: 9, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", año: 1813, género: "Novela", disponible: true});
libros.push({id: 10, titulo: "El Hobbit", autor: "J.R.R. Tolkien", año: 1937, género: "Fantasía", disponible: true});

//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario 
//debe tener: 
//✔ id (número) 
//✔ nombre (string) 
//✔ email (string) 
//✔ librosPrestados (array de ids de libros).
const usuarios = [];
usuarios.push({id: 1, nombre: "Juan Pérez", email: "juan.perez23@gmail.com", librosPrestados: [1, 2]});
usuarios.push({id: 2, nombre: "Ana García", email: "ana.garcia23@gmail.com", librosPrestados: [3, 4]});
usuarios.push({id: 3, nombre: "Carlos López", email: "carlos.lopez23@gmail.com", librosPrestados: [5, 6]});
usuarios.push({id: 4, nombre: "María Rodríguez", email: "maria.rodriguez23@gmail.com", librosPrestados: [7, 8]});
usuarios.push({id: 5, nombre: "Pedro Martínez", email: "pedro.martinez23@gmail.com", librosPrestados: [9, 10]});    


module.exports = {libros, usuarios};

//2. Funciones de Gestión de Libros 
//a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un 
//nuevo libro al array libros.

function agregarLibro(id, titulo, autor, año, género) {
    libros.push({id, titulo, autor, año, género, disponible: true});
}   

//b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, 
//autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor) {
    const resultados = [];
    for (let libro of libros) {
        if (libro[criterio] && libro[criterio].toString().toLowerCase() === valor.toString().toLowerCase()) {
            resultados.push(libro);
        }
    }
    return resultados;
}       

//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año 
//utilizando el algoritmo de ordenamiento burbuja (bubble //sort) y luego muestre los 
//libros ordenados en la consola.


function ordenarLibros(criterio) {
    const n = libros.length;    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                // Intercambiar libros[j] y libros[j + 1]
                const temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }   

        }
    }
    return libros;
}       
module.exports = {agregarLibro, buscarLibro, ordenarLibros};

//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por 
//parámetro. 

function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);       
    if (index !== -1) {
        libros.splice(index, 1);
        return true;
    }
    return false;
}
module.exports = {borrarLibro};

//3. Gestión de Usuarios 
//a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo 
//usuario al array usuarios. 


function registrarUsuario(nombre, email) {
    const id = usuarios.length + 1; 
    usuarios.push({id, nombre, email, librosPrestados: []});
}       
module.exports = {registrarUsuario};
//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array 
//completo de usuarios

function mostrarTodosLosUsuarios() {
    return usuarios;
}
module.exports = {mostrarTodosLosUsuarios};


//c) Crear una función buscarUsuario(email) que devuelva la información de un usuario 
//dado su email.
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
}       

module.exports = {buscarUsuario};

//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario 
//seleccionado. 

function borrarUsuario(email) {
    const index = usuarios.findIndex(usuario => usuario.email.toLowerCase() === email.toLowerCase());   
    if (index !== -1) {
        usuarios.splice(index, 1);
        return true;
    }   
    return false;
}
module.exports = {borrarUsuario};
//3. Gestión de Usuarios 
//a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo 
//usuario al array usuarios. 

function registrarUsuario(nombre, email) {
    const id = usuarios.length + 1; 
    usuarios.push({id, nombre, email, librosPrestados: []});
}       
module.exports = {registrarUsuario};
//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array 
//completo de usuarios

function mostrarTodosLosUsuarios() {
    return usuarios;
}       
module.exports = {mostrarTodosLosUsuarios}; 
    //c) Crear una función buscarUsuario(email) que devuelva la información de un usuario 
//dado su email. 

function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
}   
module.exports = {buscarUsuario};

//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario 
//seleccionado.

function borrarUsuario(email) {
    const index = usuarios.findIndex(usuario => usuario.email.toLowerCase() === email.toLowerCase());       
    if (index !== -1) {
        usuarios.splice(index, 1);
        return true;
    }   
    return false;
}   

module.exports = {borrarUsuario};

//4. Sistema de Préstamos 
//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no 
//disponible y lo agregue a la lista de libros prestados del usuario. 
//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como 
//disponible y lo elimine de la lista de libros prestados del usuario.


function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);       
    const usuario = usuarios.find(usuario => usuario.id === idUsuario); 
    if (libro && usuario && libro.disponible) {
        libro.disponible = false;
        usuario.librosPrestados.push(idLibro);
        return true;
    }



    return false;
}module.exports = {prestarLibro};

function devolverLibro(idLibro, idUsuario) {    

    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (libro && usuario) {
        libro.disponible = true;
        const index = usuario.librosPrestados.indexOf(idLibro);
        if (index !== -1) {
            usuario.librosPrestados.splice(index, 1);
            return true;
        }
    }
    return false;
}   
module.exports = {devolverLibro};


//5. Reportes 
//a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays 
//(.map(), .filter(), .reduce()) para generar un reporte con la siguiente información: 
//✔ Cantidad total de libros. 
//✔ Cantidad de libros prestados. 
//✔ Cantidad de libros por género. 
//✔ Libro más antiguo y más nuevo


function generarReporteLibros() {
    const totalLibros = libros.length;  
    const librosPrestados = libros.filter(libro => !libro.disponible).length;
    const librosPorGenero = libros.reduce((acc, libro) => {
        acc[libro.género] = (acc[libro.género] || 0) + 1;
        return acc;
    }, {}); 
    const libroMasAntiguo = libros.reduce((antiguo, libro) => (libro.año < antiguo.año ? libro : antiguo), libros[0]);
    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.año > nuevo.año ? libro : nuevo), libros[0]);  
    return {
        totalLibros,
        librosPrestados,
        librosPorGenero,
        libroMasAntiguo,
        libroMasNuevo
    };
}   
module.exports = {generarReporteLibros};    

//6. Identificación Avanzada de libros 
//a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre 
//todos los libros cuyo título contiene más de una palabra (no títulos que contengan 
//números ni otros caracteres). 
//b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la 
//consola.


function librosConPalabrasEnTitulo() {
    const resultados = libros.filter(libro => {
        const palabras = libro.titulo.split(" ");
        return palabras.length > 1 && palabras.every(palabra => /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(palabra));
    }).map(libro => libro.titulo);  
    return resultados;
}   
module.exports = {librosConPalabrasEnTitulo};


//7. Cálculos Estadísticos 
//a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular 
//y mostrar: 
//✔ Promedio de años de publicación de los libros. 
//✔ Año de publicación más frecuente. 
//✔ Diferencia en años entre el libro más antiguo y el más nuevo. 

function calcularEstadisticas() {
    const totalAnios = libros.reduce((acc, libro) => acc + libro.año, 0);
    const promedioAnios = Math.round(totalAnios / libros.length);       
    const frecuenciaAnios = libros.reduce((acc, libro) => {
        acc[libro.año] = (acc[libro.año] || 0) + 1;
        return acc;
    }
    , {});
    let añoMasFrecuente = null;
    let maxFrecuencia = 0;  

    for (const año in frecuenciaAnios) {
        if (frecuenciaAnios[año] > maxFrecuencia) {
            maxFrecuencia = frecuenciaAnios[año];
            añoMasFrecuente = parseInt(año);
        }   
    }   
    const años = libros.map(libro => libro.año);    
    const añoMasAntiguo = Math.min(...años);
    const añoMasNuevo = Math.max(...años);    
    const diferenciaAnios = añoMasNuevo - añoMasAntiguo;  
    return {
        promedioAnios,
        añoMasFrecuente,
        diferenciaAnios
    };  
}       
module.exports = {calcularEstadisticas};


//8. Manejo de Cadenas 
//a) Crear una función normalizarDatos() que utilice métodos de strings para: 
//✔ Convertir todos los títulos a mayúsculas. 
//✔ Eliminar espacios en blanco al inicio y final de los nombres de autores. 
//✔ Formatear los emails de los usuarios a minúsculas.

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    }); 
}  
module.exports = {normalizarDatos}; 

//9. Interfaz de Usuario por Consola 
//a) Implementar una función menuPrincipal() que muestre un menú de opciones al 
//usuario y permita interactuar con el sistema utilizando prompt(). 
//b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar 
//estructuras de control (if, switch, ciclos) para manejar la lógica. 

function menuPrincipal() {
    let opcion; 
    do {
        console.log("Menú Principal:");
        console.log("1. Agregar Libro");        
        console.log("2. Buscar Libro");
        console.log("3. Ordenar Libros");
        console.log("4. Borrar Libro");

        console.log("5. Registrar Usuario");
        console.log("6. Mostrar Todos los Usuarios");
        console.log("7. Buscar Usuario");
        console.log("8. Borrar Usuario");
        console.log("9. Prestar Libro");
        console.log("10. Devolver Libro");
        console.log("11. Generar Reporte de Libros");
        console.log("12. Identificar Libros con Palabras en Título");
        console.log("13. Calcular Estadísticas");
        console.log("14. Normalizar Datos");
        console.log("0. Salir");
        opcion = prompt("Seleccione una opción: "); 

        switch (opcion) {
            case "1":       
                const id = parseInt(prompt("Ingrese ID del libro: "));
                const titulo = prompt("Ingrese título del libro: ");
                const autor = prompt("Ingrese autor del libro: ");
                const año = parseInt(prompt("Ingrese año de publicación del libro: "));
                const género = prompt("Ingrese género del libro: ");
                agregarLibro(id, titulo, autor, año, género);       
                console.log("Libro agregado exitosamente.");
                break;  
            case "2":
                const criterio = prompt("Ingrese criterio de búsqueda (titulo, autor, género): ");
                const valor = prompt("Ingrese valor de búsqueda: ");
                const resultados = buscarLibro(criterio, valor);        
                console.log("Resultados de la búsqueda:", resultados);
                break;

            case "3":
                const criterioOrden = prompt("Ingrese criterio de ordenamiento (titulo, año): ");
                const librosOrdenados = ordenarLibros(criterioOrden);       
                console.log("Libros ordenados:", librosOrdenados);
                break;
            case "4":
                const idBorrar = parseInt(prompt("Ingrese ID del libro a borrar: "));
                const exitoBorrar = borrarLibro(idBorrar);
                console.log(exitoBorrar ? "Libro borrado exitosamente." : "Libro no encontrado.");
                break;
            case "5":
                const nombreUsuario = prompt("Ingrese nombre del usuario: ");
                const emailUsuario = prompt("Ingrese email del usuario: ");
                registrarUsuario(nombreUsuario, emailUsuario);
                console.log("Usuario registrado exitosamente.");
                break;  
            case "6":
                const todosUsuarios = mostrarTodosLosUsuarios();
                console.log("Lista de usuarios:", todosUsuarios);
                break;
            case "7":
                const emailBuscar = prompt("Ingrese email del usuario a buscar: ");
                const usuarioEncontrado = buscarUsuario(emailBuscar);
                console.log(usuarioEncontrado ? "Usuario encontrado:" : "Usuario no encontrado.", usuarioEncontrado);
                break;      
            case "8":
                const emailBorrar = prompt("Ingrese email del usuario a borrar: "); 
                const exitoBorrarUsuario = borrarUsuario(emailBorrar);
                console.log(exitoBorrarUsuario ? "Usuario borrado exitosamente." : "Usuario no encontrado.");
                break;
            case "9":
                const idLibroPrestar = parseInt(prompt("Ingrese ID del libro a prestar: "));    
                const idUsuarioPrestar = parseInt(prompt("Ingrese ID del usuario: "));
                const exitoPrestar = prestarLibro(idLibroPrestar, idUsuarioPrestar);
                console.log(exitoPrestar ? "Libro prestado exitosamente." : "Error al prestar el libro.");
                break;
            case "10":
                const idLibroDevolver = parseInt(prompt("Ingrese ID del libro a devolver: "));
                const idUsuarioDevolver = parseInt(prompt("Ingrese ID del usuario: "));
                const exitoDevolver = devolverLibro(idLibroDevolver, idUsuarioDevolver);    
                console.log(exitoDevolver ? "Libro devuelto exitosamente." : "Error al devolver el libro.");
                break;
            case "11":
                const reporte = generarReporteLibros();
                console.log("Reporte de Libros:", reporte);
                break;
            case "12":  
                const librosConPalabras = librosConPalabrasEnTitulo();
                console.log("Libros con palabras en el título:", librosConPalabras);
                break;
            case "13":
                const estadisticas = calcularEstadisticas();
                console.log("Estadísticas de Libros:", estadisticas);
                break;
            case "14":
                normalizarDatos();
                console.log("Datos normalizados exitosamente.");
                break;      
            case "0":
                console.log("Saliendo del sistema. ¡Hasta luego!");
                break;
            default:
                console.log("Opción inválida. Por favor, intente de nuevo.");
        }   

    } while (opcion !== "0");
}
module.exports = {menuPrincipal};

// Iniciar el menú principal
menuPrincipal();





