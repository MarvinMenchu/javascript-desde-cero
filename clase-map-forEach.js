// Methods that iterate over an array
// Methods that DO NOT modify the original array (Inmutability)

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)
console.log(numbers)
console.log(squaredNumbers)

// forEach() //no crea un nuevo array
const colors = ['red', 'green', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteratedColors)

// conversion de termeratura de fahrenheit a celsius
// exercise Farhenheit to Celsius
const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120]
const celsius = fahrenheit.map(f => Math.round( (5/9) * (f - 32)))
console.log('Fahrenheit', fahrenheit)
console.log('Celsius', celsius)

// forEach()
//Exercise sum of elements in an array
const numbers2 = [1, 2, 3, 4, 5]
let sum = 0
numbers2.forEach(number => {
    sum += number
})
console.log('Sum of numbers: ', sum)