// includes() with numbers

const numbers = [1, 2, 3, 4, 5]

const result1 = numbers.includes(3)
console.log(result1) // true

const result2 = numbers.includes(8)
console.log(result2) // false

// indexOf()

const fruits = ['apple', 'banana', 'mango', 'kiwi']
const index1 = fruits.indexOf('mango')
console.log(index1) // 2

const index2 = fruits.indexOf('orange')
console.log(index2) // -1

//lastIndexOf()
const numbersAgain = [2, 4, 6, 8, 10, 6]
const lastIndex1 = numbersAgain.lastIndexOf(6)
console.log(lastIndex1) // 5

const numbersAgain2 = [2, 4, 6, 8, 10, 6]
const lastIndex2 = numbersAgain.lastIndexOf(3)
console.log(lastIndex2)