// Methods that modify the original array (Mutability)

// splice()  cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

const vegetables = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
const removedVegetables = vegetables.splice(2, 2, 'carrot', 'lettuce')
console.log(vegetables)
console.log(removedVegetables)

// reverse() invierte el orden de los elementos de un array
const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
const reversedNumbers = numbers.reverse()
console.log(reversedNumbers)

// sort() ordena los elementos de un array localmente y devuelve el array ordenado
// with numbers
const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumber = unsortedNumbers1.sort() // los convierte a string y los ordena, revisa el unicode y los organiza
console.log(unsortedNumbers1)
console.log(unicodeSortedNumber)

const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b) // ordena los numeros de menor a mayor
// 4 - 18 = -14
// 18 - 1 = 17
console.log(unsortedNumbers2)
console.log(sortedNumbers)

// sort() with strings . ordenamiento en utf-16
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
const sortedCities = cities.sort()
console.log(cities)
console.log(sortedCities)

// fill() llena los elementos de un array con un valor estatico
const ages = [21, 35, 45, 50]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15, 1))
console.log(ages.fill(5))