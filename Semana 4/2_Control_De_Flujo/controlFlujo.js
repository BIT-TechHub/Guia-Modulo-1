/* ------------------------------FUNCIONES---------------------------- */
// Declaración de función
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Carlos"));

// Expresión de función
const sumar = function(a, b) {
    return a + b;
};

// Arrow function
const multiplicar = (a, b) => a * b;


/* --------------------CONTROL DE FLUJO:SECUENCIAS-------------------- */
// Flujo secuencial: Las instrucciones se ejecutan en orden, una tras otra
console.log("Paso 1: Encender la computadora");
console.log("Paso 2: Abrir el navegador");
console.log("Paso 3: Buscar información en internet");
console.log("Paso 4: Leer los resultados");


/* ------------------CONTROL DE FLUJO:CONDICIONALES-------------------- */
// Condicional simple (if)
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// Condicional if-else
let temperatura = 30;
if (temperatura > 25) {
    console.log("Hace calor, usa ropa ligera");
} else {
    console.log("Hace frío, abrígate bien");
}

// Uso de switch para evaluar múltiples casos
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana cerca!");
        break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana!");
        break;
    default:
        console.log("Día normal de la semana");
}

/* ---------------------CONTROL DE FLUJO:CICLOS-------------------- */
// Bucle FOR (iteración controlada con contador)
console.log("Bucle FOR:");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteración número: ${i}`);
}

// Bucle WHILE (se ejecuta mientras la condición sea verdadera)
console.log("\nBucle WHILE:");
let contador = 1;
while (contador <= 5) {
    console.log(`Contador en: ${contador}`);
    contador++; // Incremento
}

// Bucle DO...WHILE (se ejecuta al menos una vez antes de evaluar la condición)
console.log("\nBucle DO...WHILE:");
let num = 1;
do {
    console.log(`Número: ${num}`);
    num++;
} while (num <= 5);

// Bucle FOR...OF (recorre elementos de un array)
console.log("\nBucle FOR...OF:");
let frutas = ["Manzana", "Banana", "Cereza"];
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}

// Bucle FOR...IN (recorre propiedades de un objeto)
console.log("\nBucle FOR...IN:");
let persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
