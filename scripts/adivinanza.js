let numRandom = Math.floor(Math.random()*100+1);
let numIntentos = 0
function chequearResultado() {
    setTimeout(() => {

        let msg = document.getElementById('mensaje');
        let numInput = document.getElementById('numeroEntrada').value;
        let numInputParsed = parseInt(numInput)
        let intentos = document.getElementById('intentos').value
        
        if (numInputParsed < 1 || numInputParsed > 100 || isNaN(numInputParsed))
        {
            msg.style.color = 'black';
            return msg.textContent = 'Por favor, introduce un numero valido entre el 1 y el 100';
        }

        if (numInputParsed === numRandom)
        {
            msg.textContent = 'Felicitaciones! Has adivinado el numero';
            msg.style.color = 'green';
            numInputParsed.disabled = true;
            numIntentos++
        }
            else if (numInput < numRandom)
            {
                msg.textContent = 'Mas Alto! El numero debe ser mayor al que ingresaste';
                msg.style.color = 'red';
                numIntentos++
            }
            else if (numInput > numRandom)
            {
                msg.textContent = 'Mas Bajo! El numero debe ser menor al que ingresaste';
                msg.style.color = 'red';
                numIntentos++
            }

            intentos = document.getElementById('intentos').innerHTML = numIntentos  ;
                   
        }, 1);
}
