// Exercise: Card Game Implementation

const deck = ['♥️', '♠️', '♦️', '♣️', '♥️', '♠️', '♦️', '♣️', '♥️', '♠️', '♦️', '♣️', '♥️', '♠️', '♦️', '♣️']
// algoritmo de Fisher-Yates Alforithm
const shuffleDeck = () => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // [0, i] -> i + 1
        // [0, i) -> i
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCard (numCard){
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffleDeck()
const player1Hand = dealCard(3)
const player2Hand = dealCard(3)
const player3Hand = dealCard(3)

console.log('Player 1 hand: ', player1Hand)
console.log('Player 2 hand: ', player2Hand)
console.log('Player 3 hand: ', player3Hand)
console.log('Remaining deck: ', deck)