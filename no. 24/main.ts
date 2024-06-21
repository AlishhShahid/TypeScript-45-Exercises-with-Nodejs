let car: string = "car";
let uppercaseCar = "CAR";
let ten = 10;
let twenty = 20;
//let zero = 0
let cars = ["civic", "supra", "BMW"]

// Test for equality and inequality with strings,
console.log("Is car is equals to car?");
console.log(car == 'car'); 
// Test 2: Strict equality (False)
// console.log("Is car === 'subaru'? I predict False.");
// console.log(car === 'subaru'); 
// Test 3: Inequality (True)
console.log("\nIs car is not equals to car?");
console.log(car != 'car'); 
// Test 4: Inequality (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru');

// Test using lowercase function,
console.log("\nIs CAR is equals to car after converting lowercase function?");
console.log(uppercaseCar.toLowerCase() == 'car');
// Test 6: Lowercase conversion (False)
console.log("\nIs CAR is not equals to car after converting to lowercase?");
console.log(uppercaseCar.toLowerCase() != 'car');

// Numerical test,
// Equals to:
console.log("Is ten is equals to twenty?")
console.log(ten == twenty)

// Not equals to:
console.log("Is ten is not equals to twenty?")
console.log(ten != twenty)

// Greatpr than:
console.log("Is ten is greator than zero?")
console.log(ten > 0)

// Less than:
console.log("Is twenty is less than 10?")
console.log(twenty < 10)

// Greator than or equals to:
console.log("Is ten is greator than or equals to 5?")
console.log(ten >= 5)

// Less than or equals to:
console.log("Is twenty is greator than or equals to 10")
console.log(twenty <= 10)

// Test using "and"& "or" operators:
// && operator (and),
console.log("twenty is not equals to 10 and twenty is greator than 10")
console.log(twenty != 10 && twenty > 10)
console.log("twenty is not equals to 10 and twenty is greator than 30")
console.log(twenty != 10 && twenty > 30)

// || operator (or), 
console.log("twenty is greator than 50 and twenty is equals to 20")
console.log(twenty > 50 || twenty == 20)
console.log("twenty is greator than 50 and twenty is not equals to 20")
console.log(twenty > 50 || twenty != 20)

// Test whether an item is include in array:
console.log("Is civic include in my cars array?")
console.log(cars.includes("civic"));
// Not include:
console.log("Is civic not include in my cars array?")
console.log(!cars.includes("civic"));






