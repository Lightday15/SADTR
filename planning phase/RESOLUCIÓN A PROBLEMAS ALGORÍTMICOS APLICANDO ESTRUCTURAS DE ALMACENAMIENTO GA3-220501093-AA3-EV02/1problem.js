const readline = require('readline');
// Función para calcular el área y perímetro de una figura
function calcularFigura(figura, dimensiones) {
    switch (figura.toLowerCase()) {
        case "cuadrado":
            const lado = parseFloat(dimensiones);
            return {
                area: lado * lado,
                perimetro: 4 * lado
            };
        case "rectangulo":
            const { base, altura } = dimensiones;
            return {
                area: base * altura,
                perimetro: 2 * (base + altura)
            };
        case "triangulo":
            const { base: baseTriangulo, altura: alturaTriangulo, lado1, lado2, lado3 } = dimensiones;
            return {
                area: (baseTriangulo * alturaTriangulo) / 2,
                perimetro: lado1 + lado2 + lado3
            };
        case "circulo":
            const radio = parseFloat(dimensiones);
            const pi = Math.PI;
            return {
                area: pi * radio * radio,
                perimetro: 2 * pi * radio
            };
        default:
            return "Figura no válida";
    }
}
// Crear interfaz de readline para entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Preguntar al usuario por la figura
rl.question("Ingrese el nombre de la figura (cuadrado, rectangulo, triangulo, circulo): ", (figura) => {
    // Preguntar por las dimensiones basadas en la figura
    switch (figura.toLowerCase()) {
        case 'cuadrado':
            rl.question("Ingrese el lado del cuadrado: ", (lado) => {
                const resultado = calcularFigura('cuadrado', lado);
                console.log(resultado);
                rl.close();
            });
            break;
        case 'rectangulo':
            rl.question("Ingrese la base del rectángulo: ", (base) => {
                rl.question("Ingrese la altura del rectángulo: ", (altura) => {
                    const dimensiones = { base: parseFloat(base), altura: parseFloat(altura) };
                    const resultado = calcularFigura('rectangulo', dimensiones);
                    console.log(resultado);
                    rl.close();
                });
            });
            break;
        case 'triangulo':
            rl.question("Ingrese la base del triángulo: ", (base) => {
                rl.question("Ingrese la altura del triángulo: ", (altura) => {
                    rl.question("Ingrese el lado 1 del triángulo: ", (lado1) => {
                        rl.question("Ingrese el lado 2 del triángulo: ", (lado2) => {
                            rl.question("Ingrese el lado 3 del triángulo: ", (lado3) => {
                                const dimensiones = {
                                    base: parseFloat(base),
                                    altura: parseFloat(altura),
                                    lado1: parseFloat(lado1),
                                    lado2: parseFloat(lado2),
                                    lado3: parseFloat(lado3)
                                };
                                const resultado = calcularFigura('triangulo', dimensiones);
                                console.log(resultado);
                                rl.close();
                            });
                        });
                    });
                });
            });
              break;
        case 'circulo':
            rl.question("Ingrese el radio del círculo: ", (radio) => {
                const resultado = calcularFigura('circulo', radio);
                console.log(resultado);
                rl.close();
            });
            break;
        default:
            console.log("Figura no válida");
            rl.close();
    }
});
