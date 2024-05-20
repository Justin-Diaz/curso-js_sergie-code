import { barcelona, londres, paris, roma } from "./ciudades.js";

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let SubtituloElemento = document.getElementById('subtitulo')
let ParrafoElemento = document.getElementById('parrafo')

enlaces.forEach(enlace => {
    
    enlace.addEventListener('click', function () {

        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
        
        this.classList.add('active');

        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        SubtituloElemento.innerHTML = contenido.subtitulo;
        ParrafoElemento.innerHTML = contenido.parrafo;

    });

});

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres,
    };

    return contenido[enlace];
}
