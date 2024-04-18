const greeting = function (name) {  // expresion de funcion
    return `Hello ${name}`
}

// Arrow function - explicit return
const newGreeting = (name) => {
    return `Hello ${name}`
}

// Arrow function - implicit return
const newGreetingImplicit = name => `Hello ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, my name is ${name} ${lastName}`

// Lexical Binding
const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: message => {
        console.log(`${this.name} says: ${message}`) //enlace lexico, no hay una vinculacion con this
    },
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility')
finctionalCharacter.messageWithArrowFunction('Beware od Doctor Octopus')


