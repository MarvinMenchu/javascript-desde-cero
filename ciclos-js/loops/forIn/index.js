/* 
    for in ---> iterar con objetos enumerables
    estructura de datos 
    clave: valor
    
    for (variable in objeto) {
        // código a ejecutar
    }
*/
const listaDeCompras = {
    manzana: 2,
    pera: 3,
    uva: 1,
    fresa: 4
}

for (fruta in listaDeCompras){
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log(`${fruta}: ${listaDeCompras[fruta]}`)
}

for (fruta of listaDeCompras){ // error list iterable
    console.log(fruta)
}