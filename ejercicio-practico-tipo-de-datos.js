// Social Media Profile

// 1. User Information
const username = 'codingAdventure'
const fullname = 'Jhon Doe'
const age = 25
const isStudent = true

// 2. Address
const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321
}

// 3. Hobbies
const hobbies = ['Coding', 'Reading', 'Gaming']

// 4. Generating perzonalized bio
const personalizedBio = `Hi, I'm ${fullname}
I'm ${age} years old.
I'm live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!
`

// 5. print the user profile and bio
console.log(personalizedBio)