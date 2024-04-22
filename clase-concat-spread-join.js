// Methods that DO NOT modify the original array (Inmutability)

const morseCode1 = ['....', '---'] // H 0
const morseCode2 = ['.-..', '.-'] // L A

// Comibe with concat - way 1

const morseCodeMessage = morseCode1.concat(morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combine with spread operator - way 2

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage2)

// Combine with Spread Operator
function combineMorseMessage (morseCode1, morseCode2) {
    console.log( [...morseCode1, ...morseCode2])
}
combineMorseMessage(morseCode1, morseCode2)

const numbers = [1, 2, 3]
const string = 'hello'

combineMorseMessage(numbers, string)

// join()

const morseCodeMessageString = morseCodeMessage.join('')
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)