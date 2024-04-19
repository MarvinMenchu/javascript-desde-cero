let expresion = 'Uvas'

switch (expresion) {
    case 'Naranjas':
        console.log('Las naranjas cuestan $20 el kilo')
        break
    case 'Manzanas':
        console.log('Las manzanas cuestan $25 el kilo')
        break
    case 'Platanos':
        console.log('Los platanos cuestan $15 el kilo')
        break
    case 'Papayas':
        console.log('Las papayas cuestan $50 el kilo')
        break
    default:
        console.log(`Lo siento, no tenemos ${expresion} en existencia.`)
}

console.log('Hay algo mas que desee?') // Las papayas cuestan $50 el kilo