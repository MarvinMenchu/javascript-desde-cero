// creacion de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas invertidas`

// 1. Concatenacion: Opcion +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion completa es ' + direccion + ciudad
console.log(direccionCompleta)
const direccionCompletaConEspacio = 'Mi direccion completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

// 2. Concatenacion: Opcion Templeta Literals 
const nomnbre = 'Marvin'
const pais = '🇬🇹'
const presentacion = `Hola soy ${nomnbre} y soy de ${pais}`
console.log(presentacion)

// 3. Concatenacion: Opcion .join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🇲🇽'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' 🌮 '))

// 4. Concatenacion: Opcion .concat()
const hobbie1 = 'tocar la guitarra'
const hobbie2 = 'jugar fortnite'
const hobbie3 = 'hacer ejercicio'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ',  hobbie3)
console.log(hobbies)

// Caracteres de escape
//const whatDoIDo = 'I'm Software Engineer'
// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"

// 2. barra invertida
const barraInvertida = 'I\'m Software Engineer'

// 3. Template literals
const escapeComillaInvertida = `I'm Software Engineer`

// 4. Escritura de string largos
/*
    Las rosas son rojas,
    las violetas son azules,
    Caracter inesperado,
    en la linea 86.
*/ 
const poema = 'Las rosas son rojas,\n' +
                'las violetas son azules,\n' +
                'Caracter inesperado,\n' +
                'en la linea 86.'
console.log(poema)

const poema2 = 'Las rosas son rojas,\n\
las violetas son azules,\n\
Caracter inesperado,\n\
en la linea 86.'
console.log(poema2)

const poema3 = `Las rosas son rojas,
las violetas son azules,
Caracter inesperado,
en la linea 86.`
console.log(poema3)

//string values es lo que muestra en el resultado de la consola,