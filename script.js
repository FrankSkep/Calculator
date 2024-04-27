const pantalla = document.getElementById("pantalla");
let num1 = 0;
let num2 = 0;
let operadorActual = "";

// Agregar contenido a la pantalla
function agregar(valor) {
    pantalla.value += valor;
}

// Leer operador
function operador(op) {
    num1 = parseFloat(pantalla.value);
    operadorActual = op;
    pantalla.value = "";
}

// Calcular
function calcular() {
    num2 = parseFloat(pantalla.value);
    let resultado;

    switch (operadorActual) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error, división por cero";
            }
            break;
        default:
            resultado = "";
            break;
    }

    // Mostrar resultado y reiniciar variables
    pantalla.value = resultado;
    num1 = 0;
    num2 = 0;
    operadorActual = "";
}

// Limpiar pantalla
function limpiar() {
    pantalla.value = "";
    num1 = 0;
    num2 = 0;
    operadorActual = "";
}
