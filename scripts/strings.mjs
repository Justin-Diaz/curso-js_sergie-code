import chalk from 'chalk';
const error = chalk.bold.black.red
const info = chalk.bold.black.blue
const success = chalk.bold.black.green
const warning = chalk.bold.black.yellow


const string = 'Una cadena de texto un poco larga';
console.log(string.length)
console.log(string.slice(4, 7))
console.log(string.replace('larga', 'corta'))
console.log(string.toLocaleUpperCase())
console.log(string.toLocaleLowerCase())

const concatenar = ' concatena esto';
console.log(string.concat(concatenar))

// RECORTA ESPACIOS EL INICIO Y FINAL DE LA CADENA, NO DEL MEDIO
const recortarEspacios = '          recorta       espacios     ';
console.log(recortarEspacios.trim())

// TE MUESTRA EL CARACTER UBICADO EN LA POSICION PASADA COMO ARGUMENTO
const char = 'caracter';
console.log(char.charAt(5))
console.log(char[5])

// SPLIT
const splitearCadena = 'vamos a. separar esta. cadena de texto en . varias cadenas separadas. por el punto y espacio';
console.log(splitearCadena.split('. '))
const splitearCaracteres = 'Letras dsd*$.';
console.log(splitearCaracteres.split(''))

console.log(success("COMPLETADO CON EXITO"))
console.log(warning("ADVERTENCIA, TEN CUIDADO"))
console.log(info("INFORMACION NECESARIA"))
console.log(error("ERROR FATAl"))