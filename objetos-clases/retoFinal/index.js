const usersDatabase = [
    {username: 'admin', password: 'admin'},
    {username: 'user', password: 'user'},
    {username: 'Marvin', password: '1234'},
    {username: 'Diego', password: '1234'}
]

const usersTimeline = [
    {username: 'admin', timeline: "Me encanta Javascript"},
    {username: 'user', timeline: "Bebeloper es el mejor"},
    {username: 'Marvin', timeline: "A mi me gusta mas el cafe que el té"},
    {username: 'Diego', timeline: "Hoy yo no quiero trabajar"}
]

function autenticarUsuario(username, password) {
    const user = usersDatabase.find(user => user.username === username && user.password === password)
    console.log(user)
    if (user) {
        //const timeline = usersTimeline.find(timeline => timeline.username === user.username)
        console.log(`Bienvenido a tu cuenta ${username}`)
        console.log(usersTimeline)
    } else {
        console.log('Usuario o contraseña incorrecta')
    }
}

autenticarUsuario('Marvin', '1234')

// solucion profe
const username = prompt('Cual es tu usuario?')
const password = prompt('Cual es tu contraseña?')

function usuarioExistente(username, password){
    for (let i = 0; i < usersDatabase.length; i++){
        if (usersDatabase[i].username === username && usersDatabase[i].password === password){
            return true
            break
        }
    }
    return false
}

function signIn(password, username){
    if (usuarioExistente(username, password)){
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(usersTimeline)
    } else {
        alert('Uuups, Usuario o contraseña incorrecta')
    }

}

signIn(username, password)