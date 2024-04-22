// How create an Array ?
// 1. new Array() or Array()

const fruits = new Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const numbers = Array(2,3,4,5)
console.log(numbers)

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const empty = []
console.log(empty)

const sports = ['soccer', 'basketball', 'tennis']
console.log(sports)

const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingredient: 'sugar',
        quantity: '1 cup'
    },
    ['milk', 'water'],
    undefined,
    null
]
console.log(recipeIngredients)

// Accessing Array elements
const firstFruit = fruits[0]
console.log(firstFruit)

// length property
const numberOfFruits = fruits.length
console.log(numberOfFruits)


// Mutability
fruits.push('watermelon')
console.log(fruits)

// inmutability
const newFruits = fruits.concat(['grapes', 'kiwi'])
console.log(fruits)
console.log(newFruits)

//Checking arrays with Array.isArray()
const isArray = Array.isArray(fruits)
console.log(isArray)

// practical exercise: sum all elements of an array
const  numbersArray = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}
console.log(sum)