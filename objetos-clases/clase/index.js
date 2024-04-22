let persona = {
    nombre: 'Diego',
    apellido: 'Menchu',
    edad: 35
}

// funcion constructora, sintaxis
function Persona(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

// Instanciar un objeto
const persona1 = new Persona('Marvin', 'Menchu', 30)
console.log(persona1)
persona1.nacionalidad = 'Guatemalteco' // agregar meetodo solo a esa instanicia
console.log(persona1)

const persona2 = new Persona('Diego', 'De Granda', 35)
console.log(persona2)

// agregar nueva propiedad
Persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

persona1.saludar()
persona2.saludar()