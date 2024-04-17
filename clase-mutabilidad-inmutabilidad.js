// tipo de dato primitivo - Inmutable
let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// tipo de dato complejo - Mutable
let usuario = { nombre: 'Marvin', edad: 35}
usuario.edad = 36
console.log(usuario)

let frutas = ['manzana', 'pera', 'uva'] 
frutas[0] = 'mango'
console.log(frutas)

function cambiarNombre(objeto){
    objeto.nombre = 'Marvin'
}
let persona = {
    nombre: 'Andy',
    edad: 34
}
cambiarNombre(persona)
console.log(persona)