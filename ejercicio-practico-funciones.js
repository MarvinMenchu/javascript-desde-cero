// Create powerfullGirl objects
function PowerpuffGirl(name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayInfo = function() {
        console.log(`Powerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        Leader ${this.isLeader ? 'Yes' : 'No'}`) // `` backticks, Template literals
    }

    this.becomeLeader = function() {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the PowerpuffGirls!`)
    }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath')
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Fire Breath')
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Superhuman strength')
blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()