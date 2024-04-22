/* propiedad solo existe en propiedad de objetos, clases, funciones constructoras */
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }

    emitirSonido() {
        console.log('El animal emite un sonido')
    }
}

class Perro extends Animal {
    constructor(nombre, tipoPerro, raza) {
        super(nombre, tipoPerro)
        this.raza = raza
    }
    emitirSonido() {
        console.log('El perro ladra')
    }
    correr() {
        console.log(`${this.nombre} corre alegramente`)
    }
}

const perro1 = new Perro('Firulais', 'Perro', 'Pastor Aleman')
console.log(perro1)
perro1.emitirSonido()
perro1.correr()

console.log(Animal.prototype)
