// Este es un comentario de JavaScript de una sola línea

/*
Este es un
comentario de JavaScript
en varia líneas o en bloque
*/


/* ------------------------VARIABLES--------------------------------- */
// Declaración
var saludo1;
let saludo2;

// Declaración e inicialización
var nombre = "Juan"; // No recomendado (puede reasignarse de forma inesperada)
let edad = 25; // Recomendado para variables que cambian
const PI = 3.1416; // Recomendado para valores constantes
console.log(nombre, edad, PI);

// Ámbito de las variables
let variableGlobal = 'soy variable global';
console.log(variableGlobal);

{
  let variableLocal = 'soy variable local';
  console.log(variableLocal);
} 

/* -------------------------TIPOS DE DATOS---------------------------- */

/* Tipos de dato primitivos */
// string

let miVariable1 = '';
miVariable1 = 'a';
miVariable1 = 'abc';
miVariable1 = "este es un texto de 'ejemplo 1'";
miVariable1 = 'este es un texto de "ejemplo 2"';

// number

let miVariable2 = 10;
miVariable2 = 9.5;
miVariable2 = 0xff;
miVariable2 = 123e5;
miVariable2 = NaN;
console.log(miVariable2);
console.log(typeof miVariable2);

// boolean
let Booleana = true;
Booleana = false;

// undefined
let miVariableSinAsignacion;
console.log(miVariableSinAsignacion);

// null
let nulo = null;
console.log(nulo);


/* Expresiones booleanas */
// Falsy o falsos
// transforma en equivalente boleano
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(''));         // false
console.log(Boolean(undefined));  // false
console.log(Boolean(null));       // false

// Truthy o verdaderos
console.log(Boolean(true));   // true
console.log(Boolean(1));      // true
console.log(Boolean(-1));     // true
console.log(Boolean('a'));    // true
console.log(Boolean('abc'));  // true


/* Tipos de dato no primitivos */
// Arreglos
const miArreglo = ['pepita', 'mafe', 'jhon'];
console.log(miArreglo);
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
miArreglo[0] = 'deisy';
console.log(miArreglo);

// Objetos
const objeto = {
  llave: 'valor',
  propiedad: 'valor de la propiedad',
  metodo: () => {
    console.log('hola, soy un método');
  },
};

console.log(objeto);
console.log(objeto['propiedad']);
console.log(objeto.propiedad);
console.log(objeto.metodo());


/* ---------------------------OPERADORES------------------------------ */

// Concatenación
console.log('Pepita' + ' ' + 'Pérez');

// Aritméticos
console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
console.log(8 % 4);
console.log(10 % 3);
console.log(2 ** 3); 

// Comparación
console.log(8 == 4);
console.log(8 === 4);
console.log(8 == 8);
console.log(8 === 8);
console.log(8 == '8');
console.log(8 === '8');
console.log('8' === '8');
console.log('pepita' == 'Pepita');
console.log('pepita' === 'Pepita');
console.log(8 != 4);
console.log(8 != '8');
console.log(8 !== '8');
console.log(8 > 4);
console.log(8 < 4);
console.log(8 >= 4);
console.log(8 <= 4);
console.log(8 >= 8);

// Lógicos
console.log(true && true && true);
console.log(true && false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true || false);
console.log(false || false);
console.log(!true);
console.log(!false);
