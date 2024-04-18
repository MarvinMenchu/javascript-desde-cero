// Null
const snoopy = null
console.log(snoopy) // null
console.log(typeof snoopy) // object

// Undefined
let name
console.log(name) // undefined

// Symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(2)
console.log(symbol1 === symbol2) // false

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user) // 1234

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n
console.log(bigNumber) // 1234567890123456789012345678901234567890n

const numberOfParticlesInTheIniverse = 1000000000000000000000000000000000000000000000000000000000000n
console.log(numberOfParticlesInTheIniverse) // 100