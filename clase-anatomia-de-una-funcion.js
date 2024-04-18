function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

const originlPrice = 150
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originlPrice, discountPercentage)
console.log('Original Price: $' + originlPrice)
console.log('Discount Percentage: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)
