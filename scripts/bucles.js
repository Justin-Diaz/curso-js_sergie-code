// let tecnologias = [
//     'HTML',
//     'CSS',
//     'JS',
//     'REACT',
//     'NEXT.JS'
// ]

// let object = [
//     {nombre: 'Juan', apellido: 'Perez', edad: 12},
//     {nombre: 'Juan', apellido: 'Rodriguez', edad: 32},
//     {nombre: 'Santiago', apellido: 'Rodriguez', edad: 22},
//     {nombre: 'Anna', apellido: 'Fernandez', edad: 22},
//     {nombre: 'Sofia', apellido: 'Vergara', edad: 21},
// ]

//! BUCLE (FOR)

//? FOR
//* BUCLE FOR CLASICO
// for (let index = 0; index < tecnologias.length; index++) {
//     console.log(tecnologias[index]+"-"+index)
// }

//? FOR (OF)
//* PARA ITERAR CON UNA SINTAXIS MAS LEGIBLE
// for (const item of tecnologias) {
//     console.log(item)
// }

//? FOR (IN)
//* PARA ITERAR SOBRE OBJETOS DE UNA MANERA MAS SENCILLA
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         console.log(object[key]);
//     }
// }

//? FOREACH
//* PARA ITERAR SOBRE ELEMENTOS DE UNA MANERA MAS SENCILLA
// object.forEach(elemento => {
//     console.log(elemento)
// });

//-----------------------------------------------------------------------------------------------------------

//let edad = 0;

//! BUCLE (WHILE)
//* PRIMERO PREGUNTA, LUEGO EJECUTA

// while (edad < 18) {
//     console.log(`Tienes ${edad} Años`)
//     edad++;
//     if (edad === 15) break; //* romper el bucle segun la condicion que le pase
// }
// console.log(`Tienes ${edad} Años, ya eres mayor de edad`)

//! BUCLE (DO WHILE)
//* PRIMERO EJECUTA, LUEGO PREGUNTA

// do {
//     console.log(`Tienes ${edad} Años`)
//     edad++;
// } while (edad < 18);
// console.log(`Tienes ${edad} Años, ya eres mayor de edad`)
