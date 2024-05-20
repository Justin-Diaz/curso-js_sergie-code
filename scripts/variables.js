//?VAR
var nombre; //* declarar sin valor (SI)
var nombre = 'dad'; //* reasignar (SI)
var nombre = 4242; //* redeclarar (SI)

//?LET
let apellido; //* declarar sin valor (SI)
apellido = 'dfasd'; //* reasignar (SI)
//let apellido; //* redeclarar (NO)

//* DECLARAR MULTIPLES VARIABLES
let n1, n2, resultado;
n1 = 1;
n2 = 2;
resultado = n1 + n2;

//* CONCATENAR STRING CON VARIABLES

//* concatenacion antigua
let string_variable_2 = 'cadena de texto, variable: '+resultado;
//* concatenacion moderna, atraves de (template strings)
let string_variable_1 = `cadena de texto, variable: ${resultado}`;
//* ejemplo de una (template string)
let fecha = new Date();
let string_expresion_avanzada = `Hoy es ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

//?CONST
//const telefono; //* declarar sin valor (NO)
const telefono = 1;
//const telefono =2; //* reasignar (NO)
//const telefono; //* redeclarar (NO)
