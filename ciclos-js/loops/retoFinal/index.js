let palabraOculta = 'javascript'
let intentos = 3

function verificarSuposicion(suposicion, palabraOculta){
    if(suposicion.toLowerCase() === palabraOculta.toLowerCase()){
        return true
    }
    return false
}

function jugarAdivinaLaPalabra(){
    alert('Bienvenido a Adivina la palabra')
    alert('Tienes 3 intentos para adivinar la palabra oculta')
    alert('La palabra oculta tiene 10 letras')
    alert('¡Buena suerte!')
    while (intentos > 0){
        let suposicion = prompt('Ingresa tu suposición')
        if(verificarSuposicion(suposicion, palabraOculta)){
            alert('¡Felicidades! Adivinaste la palabra')
            break
        } else {
            intentos--
            if(intentos > 0){
                alert(`Incorrecto, te quedan ${intentos} intentos`)
            } else {
                alert(`¡Lo siento! Te quedaste sin intentos, la palabra oculta era ${palabraOculta}`)
            }
        }
    }
}

jugarAdivinaLaPalabra()