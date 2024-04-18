// Funciones puras, la misma entrada siempre dará la misma salida, no produce efectos secundarios (side effects)

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimnir Mensajes en pantalla o en consola.
// 5. Manipulacion del DOM
// 6. Obtener la hora actual.

function sum(a, b) { // Funcion Pura
    return a + b
}

// Funcion Impura
function sum(a, b) { // Funcion Impura
    console.log('A: ', a)
    return a + b
}

let total = 0;
function sumWithSideEffect(a) { // Funcion Impura, Modificando una variable global
    total += a
    return total
}

// Funciones puras
function square(x) { // Funcion Pura
    return x * x
}

function addTen(y) { // Funcion Pura
    return y + 10
}

const number = 5
const finalResult = addTen(square(number)) // Funcion Pura
console.log(finalResult)
