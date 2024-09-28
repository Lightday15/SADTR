const readline = require('readline');
// Clase Cancion para representar una canción favorita
class Cancion {
    constructor(artista, titulo) {
        this.artista = artista;
        this.titulo = titulo;
    }
}
// Clase Persona para representar a una persona con sus datos y canciones favoritas
class Persona {
    constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.cancionesFavoritas = []; // Arreglo para almacenar las canciones favoritas
    }
    // Método para agregar una canción favorita
    agregarCancion(artista, titulo) {
        let cancion = new Cancion(artista, titulo);
        if (this.cancionesFavoritas.length < 3) {
            this.cancionesFavoritas.push(cancion);
        } else {
            console.log("Ya se han agregado 3 canciones favoritas.");
        }
    }
    // Método para mostrar la información de la persona
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Cédula: ${this.cedula}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`Correo: ${this.correo}`);
        console.log(`Ciudad de residencia: ${this.ciudadResidencia}`);
        console.log(`Ciudad de origen: ${this.ciudadOrigen}`);
        console.log("Canciones favoritas:");
        this.cancionesFavoritas.forEach((cancion, index) => {
            console.log(`#${index + 1} Artista: ${cancion.artista}, Título: ${cancion.titulo}`);     });   }}
// Arreglo para almacenar objetos Persona
let personas = [];
// Función para leer la entrada del usuario
function leerEntrada(prompt, callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout});
    rl.question(prompt, (respuesta) => {
        rl.close();
        callback(respuesta); });}
// Función para agregar una nueva persona
function agregarPersona() {
    leerEntrada("Ingrese el nombre: ", (nombre) => {
        leerEntrada("Ingrese la cédula: ", (cedula) => {
            leerEntrada("Ingrese la fecha de nacimiento (DD/MM/AAAA): ", (fechaNacimiento) => {
                leerEntrada("Ingrese el correo electrónico: ", (correo) => {
                    leerEntrada("Ingrese la ciudad de residencia: ", (ciudadResidencia) => {
                        leerEntrada("Ingrese la ciudad de origen: ", (ciudadOrigen) => {
                            let persona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen);
                            // Agregar canciones favoritas a la persona
                            function agregarCanciones(indice) {
                                if (indice < 3) {
                                    leerEntrada(`Ingrese el nombre del artista de la canción favorita #${indice + 1}: `, (artista) => {
                                        leerEntrada(`Ingrese el título de la canción favorita #${indice + 1}: `, (titulo) => {
                                            persona.agregarCancion(artista, titulo);
                                            agregarCanciones(indice + 1); // Agregar la siguiente canción
                                        }); });  } else {
                                    personas.push(persona);
                                    console.log("Persona agregada con éxito.");
                                    menu(); // Regresar al menú después de agregar la persona
                                } }
                            agregarCanciones(0); // Iniciar el proceso de adición de canciones
                        });  });   });  });  });  });}
// Función para mostrar la información de una persona por su posición en el arreglo
function mostrarPersona() {
    leerEntrada("Ingrese la posición de la persona que desea ver: ", (posicion) => {
        posicion = parseInt(posicion, 10);
        if (posicion >= 0 && posicion < personas.length) {
            personas[posicion].mostrarInformacion();
        } else {
            console.log("Posición no válida."); }
        menu(); // Regresar al menú después de mostrar la información
    });}
function menu() {
    leerEntrada(`Menú:
        1. Agregar persona
        2. Mostrar información de una persona
        3. Salir
        Seleccione una opción: `, (opcion) => {
        switch (opcion) {
            case '1':
                agregarPersona();
                break;
            case '2':
                mostrarPersona();
                break;
            case '3':
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción no válida.");
                menu(); // Regresar al menú si la opción no es válida
        }});}
menu();
