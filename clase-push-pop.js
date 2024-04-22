// 2 metodos que modifican el array original
// Push y Pop

// Push agrega uno o mas elementos al final del array y devuelve la nueva longitud del array

// Methods that modify the original array (Mutability)
// push()

const countries = ['Mexico', 'USA', 'Canada']
const newCountries = countries.push('Guatemala', 'El Salvador')
console.log(countries)
console.log(newCountries)

// pop() elimina el ultimo elemento de un array y devuelve el elemento eliminado
const removedCountry = countries.pop()
console.log(countries)
console.log(removedCountry)

// Exercise; Managing books stack
let bookCart = []
const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart() {
    console.log('Current cart of books:', bookCart)
}

function performCartActions(action, newBook){
    switch(action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('The cart is empty. No books to remove.')
                return
            } else {
                const removedBook = bookCart.pop()
                console.log(`The book ${removedBook} has been removed from the cart.`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
            console.log('Invalid action, please choose a valid optiion.')
    }
}

performCartActions(ADD_TO_CART_ACTION, 'The Alchemist')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'The Little Prince')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'The Catcher in the Rye')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)
performCartActions(VIEW_CART_ACTION)