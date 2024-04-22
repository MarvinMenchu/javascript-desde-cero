// Exercise: transaction analysis
const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -500},
    { id: 2, description: 'Deposit', amount: 1000},
    { id: 3, description: 'Gas Station', amount: -100},
    { id: 4, description: 'Dinner', amount: -200}
]

// 1. Calculate Total Balance
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance)

// 2. Find the Largest Transaction (Income or Expense)
const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest Transaction: ', largestTransaction)

// 3. Filter purchase Transactions
const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log('Purchase Transactions: ', purchaseTransactions)

// 4. Find a transaction by description
const especificTransaccion = transactions.find(transaction => transaction.description === 'Dinner')
console.log('Especific Transaction: ', especificTransaccion)

// 5. Find the index of a transaction by description
const indexTransaction = transactions.findIndex(transaction => transaction.amount === -200)
console.log('Index of Transaction -200: ', indexTransaction)

// 6. Update Transaction Descriptions
transactions.forEach(transaction => {
    if(transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
})
console.log('Updated Transactions: ', transactions)