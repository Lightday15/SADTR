const readline = require('readline');
function esEdadValida(edad) {
    return edad >= 1 && edad <= 120; // validando rango de edad 
}
function obtenerEstadisticas(edades) {
    let menoresEdad = 0;
    let mayoresEdad = 0;
    let adultosMayores = 0;
    let totalEdades = 0;
    let edadMinima = 120;  // La edad más alta posible
    let edadMaxima = 1;    // La edad más baja posible
    // Recorrer el vector para obtener estadísticas
    edades.forEach(edad => {
        if (edad < 18) {
            menoresEdad++;
        } else if (edad >= 60) {
            adultosMayores++;
        } else {
            mayoresEdad++;
        }
        if (edad < edadMinima) {
            edadMinima = edad;
        }
        if (edad > edadMaxima) {
            edadMaxima = edad;
        }
        totalEdades += edad;
    });
    let promedioEdad = totalEdades / edades.length;
    return {
        menoresEdad: menoresEdad,
        mayoresEdad: mayoresEdad,
        adultosMayores: adultosMayores,
        edadMinima: edadMinima,
        edadMaxima: edadMaxima,
        promedioEdad: promedioEdad
    };
}
//principal
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let edades = [];
    let cantidadPersonas = 10;
    function pedirEdad(i) {
        if (i < cantidadPersonas) {
            rl.question(`Ingrese la edad de la persona ${i + 1} (1 a 120 años): `, (respuesta) => {
                let edad = parseInt(respuesta, 10);
                if (!esEdadValida(edad)) {
                    console.log("Edad no válida. Debe estar entre 1 y 120.");
                    pedirEdad(i); // Volver a pedir la edad si no es válida
                } else {
                    edades.push(edad);
                    pedirEdad(i + 1); // Pedir la siguiente edad
                }
            });
        } else {
            let estadisticas = obtenerEstadisticas(edades);
            console.log("Cantidad de menores de edad:", estadisticas.menoresEdad);
            console.log("Cantidad de mayores de edad:", estadisticas.mayoresEdad);
            console.log("Cantidad de adultos mayores:", estadisticas.adultosMayores);
            console.log("Edad mínima:", estadisticas.edadMinima);
            console.log("Edad máxima:", estadisticas.edadMaxima);
            console.log("Promedio de edades:", estadisticas.promedioEdad.toFixed(2));    
            rl.close(); // Cerrar la interfaz
        }
    }
    pedirEdad(0); // Empezar pidiendo la primera edad
}
main();
