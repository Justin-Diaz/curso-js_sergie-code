//! SE RECOMIENDA CREAR ARRAYS CON (LET) Y NO CON (CONST)
//! POR SI NECESITA REDECLARAR EL ARRAY
//* inicializar array con cierta cantidad de elementos vacios
const array = new Array(5);

array[0] = 'Html';
array[1] = 'CSS';
array[2] = 'JS';
array[3] = 'PHP';
array[4] = 'REACT';
console.log(array)

//* añadir nuevos elementos al array facilmente
//* ya que el (length tiene el numero de elementos que es un numero mas que el indice)
array[array.length] = 'algo';
console.log(array)

let texto = '';
//* recorrer el array, desde el indice que le indiquemos, hasta que llegue al ultimo elemento
// for (let index = 0; index < array.length; index++) {
//     texto += "<li>" + array[index] + "</li>";
// }
// setTimeout(() => {
//     document.getElementById('array').innerHTML = texto;
// }, 1);


//* obtener el ultimo elemento del array
//* son 5 elementos, se pone -1, porque estamoa buscando es por el indice
//* y el indice llega hasta el 4, ya que empezamos desde el 0
console.log(array[array.length - 1])

//? SORT

//! PARA ORDENAR NUMBERS

//* LOS ORDENA POR SU VALOR LEXICOGRAFICO, ORDENA TENIENDO EN CUENTA EL (PRIMER NUMERO)
const numbers = [8, 323, 5, 12, 5, 131, 531, 4, 1, 5, 23, 9];
console.log(numbers.toSort())

//* ORDENAR NUMEROS DE MANERA ASCENDENTE 
const numbersAsc = [43, 12, 54, 23, 563, 123, 41, 4, 23, 564, 23, 6, 13, 6, 67, 23, 6, 23, 4242, 2424424]
numbersAsc.sort((x, y) => x - y)
console.log(numbersAsc)

//* ORDENAR NUMEROS DE MANERA DESCENDENTE
const numbersDsc = [43, 12, 54, 23, 563, 123, 41, 4, 23, 564, 23, 6, 13, 6, 67, 23, 6, 23, 32324, 4424]
numbersDsc.sort((x, y) => y - x)
console.log(numbersDsc)

//! PARA ORDENAR STRINGS
//* PRIORIDAD (MAYUSCULAS, MINUSCULAS)
const palabras = ['juan', 'santiago', 'maria', 'Mariana', 'Nelson', 'rodriguez']
console.log(palabras.toSort())

//! PARA ORDENAR OBJECTS

const ordenarObjetos = [
    { marca: 'renault', modelo: 1977 },
    { marca: 'cheverolet', modelo: 2020 },
    { marca: 'renault', modelo: 2002 },
    { marca: 'cheverolet', modelo: 2020 },
    { marca: 'bmw', modelo: 2025 },
];

ordenarObjetos.sort((x, y) => x.modelo - y.modelo)
console.log(ordenarObjetos)

// ---------------------------------------------------------------------------------------------------------

const frutas = [
    'Manzana',
    'Pera',
    'Banana',
    'Naranja',
    'Manzana',
    'Naranja'
];

const objetos = [
    { nombre: 'Juan', apellido: 'Lopez' },
    { nombre: 'Juan', apellido: 'Fernandez' },
    { nombre: 'Nelson', apellido: 'Mandela' },
    { nombre: 'Anna', apellido: 'Frank' },
    { nombre: 'Maria', apellido: 'Perez' },
]

//? FILTER

//* devuelve en un array todos los elementos que coincidan con el argumento pasado
const filterFrutas = frutas.filter(x => x == 'Manzana');
console.log(filterFrutas)

//* devuelve el objeto, donde alguna la propiedad coincida con el argumento pasado
const filterObjetos = objetos.filter(x => x.nombre == 'Juan');
console.log(filterObjetos)

//? MAP

//* donde encuentre el argumento que le pase, me lo convierte por lo que retorna
//* por ejemplo: le paso como argumento (manzana), donde encuentre (manzana)
//* lo convierte en (naranja)
const mapeoFrutas = frutas.map(x => {
    if (x == 'Manzana') {
        return 'Naranja'
    }
});
console.log(mapeoFrutas)

//? FILL

//* remplaza los elementos del array, desde el indice pasado en el segundo argumento(2) en adelante
//* por lo que le pasa en el primer argumento (Borojo)
const fillFrutas = frutas.fill('Borojo', 2);
console.log(fillFrutas)

//? FIND

//* devuelve el primer elemento que encuentre
//* por ejemplo: en el array frutas, devuelve el primer elemento que encuentre
//* que coincida con el argumento que le pasamos
//* y en este caso, el elemento es una STRING, asi que eso nos devuelve, mas no un array

const findFrutas = frutas.find(x => x == 'Naranja');
console.log(frutas)
console.log(findFrutas)

//* aca nos devuelve el primer objeto que coincida con el argumento que le pasamos
//* en la propiedad que le estamos diciendo, en este caso (apellido)
//* y esto nos devuelve el elemento, que en este caso es un OBJETO
const findObjetos = objetos.find(x => x.apellido == 'Mandela');
console.log(findObjetos)

//? FINDINDEX

//* devuelve el numero del indice que pertenece al primer elemento que encuentre
//* segun el argumento que le pasemos, en este caso, el primer elemento con el (nombre == juan)
//* es el primer elemento del array, osea, el indice 0
const findIndex = objetos.findIndex(x => x.nombre == 'Juan');
console.log(findIndex)

//? SOME

//* devuelve un booleano, si encuentra algun elemento que coincida con el argumento que le pasamos
//* retorna (true), sino coincida retorna (false), NOTA: para que retorne (true), el elemento y el
//* argumento pasado, deben ser estrictamente iguales (===), sin importar que le haya puesto
//* (x => x == 'naranja') una igualdad normal (==)
const someFrutas = frutas.some(x => x == 'naranja');
console.log(someFrutas)

//? EVERY

//* parecida a (SOME), pero esta solo devuelve (true) si todos los elementos coinciden
//* con el argumento que le pasamos, si por lo menos 1 elemento es diferente, retorna (false)
const everyObjetos = objetos.every(x => x == 'Pera');
console.log(everyObjetos)

//? POP

//* ELIMINA el ultimo elemento del (array)
const popFrutas = frutas.pop();
//* aca se muestra el elemento que elimino
console.log(popFrutas)
//* aca se muestra el array (frutas) con ese ultimo elemento ya eliminado
console.log(frutas)

//? SHIFT

//* parecido a (POP), pero este elimina el primer elemento del (array), mas no el ultimo
const shiftObjetos = objetos.shift();
//* aca se muestra el elemento que elimino
console.log(shiftObjetos)
//* aca se muestra el array (objetos) con ese primer elemento ya eliminado
console.log(objetos)

//? PUSH

//* este se usa para añadir un nuevo elemento al (final del array)
const pushFrutas = frutas.push('Nueva fruta')
//* aca se muestra el nuevo numero de elementos que contiene el array, osea el (length)
console.log(pushFrutas)
//* aca se muestra el array con ese elemento ya añadido al (final del array)
console.log(frutas)

//? UNSHIFT

//* parecido a (PUSH), pero este añade el elemento al (principio del array)
const unshiftObjetos = objetos.unshift({ nombre: 'nuevo nombre', apellido: 'nuevo apellido' })
//* aca se muestra el nuevo numero de elementos que contiene el array, osea el (length)
console.log(unshiftObjetos)
//* aca se muestra el array con ese elemento ya añadido al (principio del array)
console.log(objetos)

//? SPLICE

//* cortar y agregar un nuevo elemento en ese mismo indice
//* SPLICE(numero del indice, numero de elementos a cortar apartir del indice anterior, nuevo elemento)
const spliceFrutas = frutas.splice(0, 1, 'Nueva fruta')
//* aca se muestra el elemento que se recorto
console.log(spliceFrutas)
//* aca se muestra el array con el nuevo elemento ya remplazando al anteriormente cortado, en el mismo indice
console.log(frutas)

//------------------------------------------------------------------------------------------------------------
//* entro al indice (2), recorto los (3) elementos siguientes, añado (3) nuevos elementos
const spliceMasFrutas = frutas.splice(2, 3, 'Nueva fruta 1', 'Nueva fruta 2', 'Nueva fruta 3')
//* los (3) elementos ya cortados
console.log(spliceMasFrutas)
//* nuevos (3) elementos ya añadidos
console.log(frutas)

//? SLICE

//* elimina los elementos del array, desde el indice (primer argumento) hasta el indice (segundo argumento)
//* iria desde el (2) lo toma, el (4) no lo toma
const sliceFrutas = frutas.slice(2, 4);
//* aca se muestra el array con el elemento (2) y el elemento (3)
//* ya que el resto lo corto (incluyendo el 4)
console.log(sliceFrutas)
//* aca se muestra el array completo, ya que slice no elimina directamente del (array)
//* entonces no afecta (frutas), afecta (sliceFrutas)
console.log(frutas)

//? JOIN

setTimeout(() => {
    //* te muestra la (array) convertida a (string) separada por comas
    //* Manzana,Pera,Banana,Naranja,Manzana,Naranja
    document.getElementById('array_string').innerHTML = frutas
    //* te muestra la (array) convertida a (string) concatenando lo que le indiques
    //* Manzana - Pera - Banana - Naranja - Manzana - Naranja
    document.getElementById('array_string').innerHTML = frutas.join(" - ")
}, 1);


//? CONCAT

//* concatena el array frutas, con el array objetos, formando (UN SOLO ARRAY)
console.log(frutas.concat(objetos))