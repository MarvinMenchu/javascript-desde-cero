// Capacidades que tiene las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> tambien llamada callback, un callback es una función que se pasa como argumento a otra función y se invoca dentro de la función externa para completar algún tipo de rutina o acción.
/*
function a() {}
function b(a) {}
b(a)

// 2. Retornar funciones -> una función puede retornar otra función
function a(){ // declaracion de funcion
    function b(){}
    return b 
}

// 3. Asignar funciones a variables -> Expresion de Funcion
const a = function() {}

// 4. Tener propiedades y metodos
function a() {}
const obj = {}
a.call(obj) // se le asigna el contexto de obj a la funcion a

// 5. Anidar Function -> Nested Functions
function a(){ // declaracion de funcion
    function b(){
        function c(){

        }
        c()
    }
    b()
}
a()*/

// 6.  es posible almacenar funciones en objetos?
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {  // Metodo
        console.log('3, 2, 1, 🔥')
    }
}

rocket.launchMessage()