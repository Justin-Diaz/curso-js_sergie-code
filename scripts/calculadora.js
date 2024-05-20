// agrega los value de los botones a la pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

function eliminar() {
    document.getElementById('pantalla').value = ''
}

function calcular() {
    // obtener el valor del elemento, en este caso lo ingresado en un input
    const valorPantalla = document.getElementById('pantalla').value;
    // (eval) evalúa un código JavaScript representado como una cadena (string)
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}