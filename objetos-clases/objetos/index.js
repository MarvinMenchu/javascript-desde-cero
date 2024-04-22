/*
    Un objeto es una estructura de datos que me ayudan a guardar objetos

    Key / Value

    Objeto {
        Propiedades = Valor de la propiedad,
        propiedad: valor,
        propiedad: valor,
    }
    Propiedad = valor
*/

const persona = {
    nombre: 'Marvin',
    edad: 30,
    telefono: '59511234',
    direccion: {
        calle: 'Avenida Europea',
        ciudad: 'Argueta',
        minicipio: 'Solola',
        departamento: 'Solola',
        pais: 'Guatemala'
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona)
console.log(persona.nombre)
persona.saludar()

persona.email = 'marvin.menchu@icloud.com'
console.log(persona)

persona.despedir = () => console.log('Adios')
console.log(persona)
persona.despedir()

// Para ingresar a propiedad calle
console.log(persona.direccion.calle)

delete persona.telefono   // nuevo para mi
console.log(persona)
persona.despedir = () => undefined // nuevo para mi, no se puede eliminar metodos
console.log(persona)
persona.despedir()
persona.saludar()