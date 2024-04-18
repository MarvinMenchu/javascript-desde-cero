

const string = '42'
const integer = parseInt(string)
console.log(integer) // 42
console.log(typeof integer) // number

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float) // 3.14
console.log(typeof float) // number

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal) // 10
console.log(typeof decimal) // number

// Implicit Type Casting
const sum = '5' + 3
console.log(sum) // 53

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log('---------------')
console.log(stringValue + stringValue) //concatena
console.log(stringValue + numberValue) //concatena
console.log(stringValue + booleanValue) //concatena
console.log(numberValue + stringValue) //concatena
console.log(numberValue + numberValue) //suma
console.log(numberValue + booleanValue) //suma
console.log(booleanValue + stringValue) //concatena
console.log(booleanValue + numberValue) //suma
console.log(booleanValue + booleanValue) //suma
