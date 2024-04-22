// Methods that interate ever an array
// Methods that DO NOT modify the original array (Inmutability)

//find()
const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)
console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

// findIndex()
const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumbers.findIndex(number => number > 50)
console.log(randomNumbers)
console.log(indexNumber)

// Exercise: Raffle Winner Verification Program
const winningParticipants = [
    {id: 1, name: 'Jennifer', ticketNumber: '001'},
    {id: 8, name: 'Marvin', ticketNumber: '008'},
    {id: 15, name: 'Emily', ticketNumber: '015'},
    {id: 47, name: 'Charlie', ticketNumber: '047'},
]

function findWinnerByName(name) {
    const winner = winningParticipants.find(participant => participant.name === name)
    return winner || 'No winner found with that name'
}

function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber)
    return index === -1 ? 'No winner found with that ticket number' : index
}

function displayWinnerInformation (winner) {
    if (winner !== undefined && winner != null && winner !== 'No winner found with that ticket number') {
        console.log(`Congratulations ${winner.name}, you are the winner!`)
    }else {
        console.log(`winner ${winner} not found!`)
    }
}

const winner = findWinnerByName('Emily')
const indexByTicket = findIndexWinnerByTicket('047')

displayWinnerInformation(winner)
console.log('Index of winner by ticket number: ', indexByTicket)
