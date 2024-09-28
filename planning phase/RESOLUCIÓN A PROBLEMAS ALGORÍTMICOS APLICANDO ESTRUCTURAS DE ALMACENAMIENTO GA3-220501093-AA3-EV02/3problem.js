const readline = require('readline');
// Función para leer la entrada del usuario
function leerEntrada(prompt, callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(prompt, (respuesta) => {
        rl.close();
        callback(respuesta);
    });
}
// Función para validar que el vector esté en orden ascendente
function validarAscendente(vector) {
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] < vector[i - 1]) {
            return false;
        }
    }
    return true;
}
// Función para leer y validar un vector de tamaño 5
function leerVector(nombreVector, callback) {
    let vector = [];
    function ingresarElemento(index) {
        if (index < 5) {
            leerEntrada(`Ingrese el número ${index + 1} del ${nombreVector} (en orden ascendente): `, (num) => {
                num = parseInt(num);
                if (isNaN(num)) {
                    console.log("Por favor, ingrese un número válido.");
                    ingresarElemento(index);
                } else {
                    vector.push(num);
                    if (index > 0 && num < vector[index - 1]) {
                        console.log("Los números deben estar en orden ascendente. Ingrese nuevamente.");
                        vector.pop();
                        ingresarElemento(index);
                    } else {
                        ingresarElemento(index + 1);}}
            });
        } else {
            callback(vector); }}
    ingresarElemento(0);}
// Función para mezclar dos vectores ordenados
function mezclarVectores(v1, v2) {
    let mezcla = [];
    let i = 0, j = 0;
    // Mezclamos los dos vectores ordenados
    while (i < v1.length && j < v2.length) {
        if (v1[i] <= v2[j]) {
            mezcla.push(v1[i]);
            i++;
        } else {
            mezcla.push(v2[j]);
            j++;  } }
    // Añadimos los elementos restantes de v1 o v2 si los hay
    while (i < v1.length) {
        mezcla.push(v1[i]);
        i++;}
    while (j < v2.length) {
        mezcla.push(v2[j]);
        j++;}
    return mezcla;}
// Función principal
function main() {
    leerVector("primer vector", (vector1) => {
        leerVector("segundo vector", (vector2) => {
            let vectorMezclado = mezclarVectores(vector1, vector2);
            console.log("La mezcla ordenada de los dos vectores es: ", vectorMezclado);
        });  });}
main();
