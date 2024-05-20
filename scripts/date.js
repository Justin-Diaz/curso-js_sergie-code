//* FECHA Y HORA ACTUAL (FORMATO POR DEFECTO)
const fechaActualDefault = new Date()

//* AÑO ACTUAL
const año = fechaActualDefault.getFullYear();

//* NUMERO MES (POR SU INDICE)
const numeroMes = fechaActualDefault.getMonth();
//* tenemos que sumarle 1, ya que (month) es una array
//console.log(numeroMes+1)

//* NUMERO MES (POR SU VALOR)
let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
]

//* MES ACTUAL
const mes = meses[fechaActualDefault.getMonth()];

//* DIA ACTUAL
const dia = fechaActualDefault.getDate();

//* FECHA COMPLETA (FORMATO PERSONALIZADO)

const fechaActualCustom = dia+"-"+mes+"-"+año+"  "
console.log(fechaActualCustom)

//* HORA COMPLETA
const hora = fechaActualDefault.getHours();
const minutos = fechaActualDefault.getMinutes();
const segundos = fechaActualDefault.getSeconds();

const horaCompleta = hora+":"+minutos+":"+segundos
console.log(horaCompleta)

//* FECHA Y HORA ACTUAL COMPLETA
const fechaHora = fechaActualCustom+horaCompleta;
console.log(fechaHora)