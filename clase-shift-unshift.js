// Methos that modify the original array (Mutability)

// shift()
const colors = ['red', 'blue', 'green', 'yellow']
const removedColor = colors.shift()
console.log(colors)
console.log(removedColor)

// unshift()  agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
const newColors = colors.unshift('purple', 'pink')
console.log(colors)
console.log(newColors)

// Exercise: Managing a Playlist
function managePlaylist (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['Mariposa Traicionera', 'Blind', 'Fear of the dark']
console.log('Initial playlist: ', initialPlaylist)
const newSongtoAdd = 'Wake me up when september ends'
const updatedPlaylist = managePlaylist(initialPlaylist, newSongtoAdd)  

console.log('New song to add: ', newSongtoAdd)
console.log('Updated playlist: ', updatedPlaylist)