//! (SET)
//* array con elementos unicos
//* si un elemento es === a otro, solo existira el primero

let conjunto = new Set(['justin', 'pedro', 'juan', 'justin']);
console.log(conjunto)

let addElement = conjunto.add('lucia')
console.log(addElement)

let deleteElement = conjunto.delete('justin')
console.log(deleteElement)

let hasElement = conjunto.has('lucia')
console.log(hasElement)

let size = conjunto.size
console.log(size)

let array = [1, 1, 4, 1, 2, 4, 1, 3, 4, 1, 2, 4, 1, 1, 2, 34, 1, 1];
let unico = new Set(array);
let newArray = [...unico]; //* CLONAR UNA ARRAY
console.log(newArray)

//! (MAP)

let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 21],
])
console.log(mapa)

mapa.set('Computadoras', 20)
mapa.set('Teclados', 20)
mapa.delete('Celulares')
console.log(mapa)

let hasMapa = mapa.has('Tablets')
console.log(hasMapa)

let tamaño = mapa.tamaño
console.log(tamaño)