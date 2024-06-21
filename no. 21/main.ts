// Q21 
interface item {
    name: string
    price: number
}
const book: item ={
    name: 'chemical engineering',
    price: 450,
}
const apple: item ={
    name: 'banana',
    price: 100,
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)