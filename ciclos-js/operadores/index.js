/*
    Operadores de comparacion
*/

// Operador == comparar si algo es igual a otra cosa
// Operador === si algo es igual a algo y va a verificar en dos temas, el valor y el tipo de dato, se recomienda usar este operador
// Operador != si algo es diferente a otra cosa
// Operador !== diferente de de, este valor es diferente a este valor y es diferente en el valor y el tipo de dato
// Operador > mayor que
// Operador < menor que
// Operador >= mayor o igual que
// Operador <= menor o igual que
/*
const a = 10
const b = 20
const c = '10'*/

console.log(a == b) // false

/*
    Operadores de comparación
*/
// == (Igualdad): Evalúa si los valores son iguales con conversión de tipo. Devuelve true.
// === (Igualdad estricta): Evalúa si los valores son iguales y del mismo tipo. Devuelve false.
// != (Desigualdad): Evalúa si los valores no son iguales con conversión de tipo. Devuelve false.
// !== (Desigualdad estricta): Evalúa si los valores no son iguales y no son del mismo tipo. Devuelve true.
// > (Mayor que): Evalúa si el valor de la izquierda es mayor que el de la derecha. Devuelve true.
// < (Menor que): Evalúa si el valor de la izquierda es menor que el de la derecha. Devuelve false.
// >= (Mayor o igual que): Evalúa si el valor de la izquierda es mayor o igual que el de la derecha. Devuelve true.
// <= (Menor o igual que): Evalúa si el valor de la izquierda es menor o igual que el de la derecha. Devuelve false.

const a=10;
const b=20;
const c="10"
a==b; //false
a===c; //false
a!=b; //true
a!==c; //true
a>b; //false
a<=b; //true
a>=b; //false
a>c; //false