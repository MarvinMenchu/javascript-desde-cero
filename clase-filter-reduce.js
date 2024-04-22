// Methods that iterate over an array
// Methods that DO NOT modify the original array (Inmutability)

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(numbers)
console.log(evenNumbers)

// reduce(), reducir un array a un solo valor, caso 1
let accumulator = 0
const numberReduce = [1, 2, 3, 4, 5]
const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(numberReduce)
console.log('Sum of numbers: ', sum)

// reduce(), reducir un array a un solo valor, caso 2
const words = ['apple', 'apple', 'banana', 'apple', 'orange', 'banana', 'orange', 'apple', 'kiwi']
const wordsFrequency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})
console.log(words)
console.log(wordsFrequency)

// Exercise: Passing grade Average
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]
const passingGrade = grades.filter(grade => grade >= 70)
const averagePassingGrade = passingGrade.reduce((sum, grade) => sum + grade, 0) / passingGrade.length
console.log('All grades: ', grades)
console.log('Passing grades: ', passingGrade)
console.log('Average passing grade: ', averagePassingGrade)

