let nombre = 'Marvin'

if (nombre === 'Marvin'){
    console.log('Hola Marvin')
} else if (nombre === 'Manuel'){ 
    console.log('Hola Manuel')
} else {
    console.log('Nombre no reconocido')
}

const numeroSecreto = Math.floor(Math.random() * 10 + 1) // del 1 al 10
const numeroJugador = parseInt(prompt('Adivina el número secreto (entre 1 y 10)'))

console.log(`Este es el numero con el que juegas: ${numeroJugador}`)

if (numeroJugador === numeroSecreto){
    console.log('Felicidades! Adivinaste el número secreto')
} else if (numeroJugador < numeroSecreto){
    console.log('El numero es demasiado bajo, intenta de nuevo')
} else {
    console.log('El numero es demasiado alto, intenta de nuevo')
}