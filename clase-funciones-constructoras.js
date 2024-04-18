const personalizedMessage = 'Goodbye everybady!'

function Rocket (name, ownMessage) { // función constructora
    this.name = name
    this.launchMessage = ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage)

const RocketWithArrowFunction = (name, ownMessage) => ({  // no usamos la palabra reservada 'new' para crear objetos
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = 'Successful launch!'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction)
console.log(falcon9Rocket1.name)
console.log(falcon9Rocket1.launchMessage)
