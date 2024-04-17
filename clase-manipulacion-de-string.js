// String primitivos
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo también')
console.log(typeof stringPrimitivoTambien)

// String Objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

// Acceder a Caracteres
const saludo = 'Hola. Como estas?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o')) //buscar posicion de la primera ocurrencia
console.log(saludo.indexOf('Como')) 
console.log(saludo.lastIndexOf('o')) //buscar posicion de la primera 
console.log(saludo.slice(3, 5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios = ' Saludo con espacio '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '💙')
console.log(nuevoSaludo)