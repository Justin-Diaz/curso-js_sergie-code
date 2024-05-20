function mostrarConsola(num) {
    console.log(num)
}

function calcular (num1, num2, mostrarConsola) {
    let suma = num1+num2;
    mostrarConsola(suma);
}

calcular(20,22,mostrarConsola)
