const pantalla = document.getElementById("pantalla");
let num1 = "";
let num2 = "";
let operadorActual = "";

// Agregar contenido a la pantalla
function agregar(valor) {
  pantalla.value += valor;
}

// Leer operador
function operador(op) {
  num1 = pantalla.value;
  operadorActual = op;
  pantalla.value = "";
}

// Calcular
function calcular() {
  num2 = pantalla.value;
  let resultado;

  switch (operadorActual) {
    case "+":
      resultado = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      resultado = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      resultado = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      if (num2 != "0") {
        resultado = parseFloat(num1) / parseFloat(num2);
      } else {
        resultado = "Error, division por cero";
      }
      break;
    default:
      resultado = "";
      break;
  }

  // Mostrar resultado y reiniciar variables
  pantalla.value = resultado;
  num1 = "";
  num2 = "";
  operadorActual = "";
}

// Limpiar pantalla
function limpiar() {
  pantalla.value = "";
  num1 = "";
  num2 = "";
  operadorActual = "";
}
