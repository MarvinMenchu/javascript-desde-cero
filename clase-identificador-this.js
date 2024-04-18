// enlace implicito, Impkicit Binding


const house = {
    dogName: 'Fido',
    dogGreeting: function() {
        console.log(`Hola, soy ${this.dogName}`);
    }
}

house.dogGreeting(); // Hola, soy Firulais


// Explicit Binding, enlace explicito
function dogGreeting() {
    console.log(`Hola, soy ${this.dogName}`);
}

const newHouse = {
    dogName: 'Coconut',
}

dogGreeting.call(newHouse) // Hola, soy Coconut


function newDogGreeting(owner, address) {
    console.log(`Hola, soy ${this.dogName} y yo vivo con ${owner} en ${address}`)
}

const owner = 'Lucy'
const address = 'Avenue 123'
newDogGreeting.call(newHouse, owner, address) // Hola, soy Coconut y yo vivo con Lucy en Avenue 123
