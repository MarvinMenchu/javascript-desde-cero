const owner = 'Marvin'
const address = 'Avenue 321'

function dogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} in ${address}`)
}

const newHouse = {
    dogName: 'Coconut',
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]
dogGreeting.apply(newHouse, necessaryValues) // la diferencia es entre la forma de pasar los argumentos

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
const bindingWithBind1 = dogGreeting.bind(newHouse, ...necessaryValues)
bindingWithBind() // la diferencia es que bind crea una nueva función
bindingWithBind1()

const caricatura = {
    nombre: 'Vaca y Pollito',
}

function recuerdo(personaje) {
    console.log(`${this.nombre} era mi caricatura favorita. Me encantaba ver las aventuras de ${personaje}`)
}

recuerdo.call(caricatura, 'Vaca')
//recuerdo.apply(caricatura, ['Pollito'])
recuerdo.bind(caricatura, 'Pollito')()