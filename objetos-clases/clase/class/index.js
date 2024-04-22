class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

const persona1 = new Persona('Marvin', 'Menchu', 35)
persona1.saludar()
console.log(persona1)