// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notacion Cientifica
const cientifico = 5e2

// 3. infitintos y NaN Not at Number
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones Aritmeticas
// 1. suma, resta, Multiplicacion y Division
const suma = 1 + 10
const resta = 10 - 1
const multiplicacion = 2 * 20
const division = 16 / 4

// 2. Modulo y la exponenciacion
const modulo = 10 % 3
const exponenciacion = 2 ** 3 // potencia de 2 a la 3

// 3. precision
const precision = 0.1 + 0.2
console.log(precision)
console.log(precision.toFixed(1))
console.log(precision === 0.3)

// Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-10)
const aleatorio = Math.random() // numero aleatorio entre 0 y 1
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)