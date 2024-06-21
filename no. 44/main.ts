function makeSandwich(...items: string[]){
    console.log("\nMaking the sandwich with the following items\n");

    items.forEach(singleItems => console.log(singleItems));

    console.log("\nNow Enjoy Sandwich");
}

makeSandwich("Bread", "Chicken", "Mayo");

makeSandwich("Bread", "Mayo");

makeSandwich("Bread", "Chicken", "Butter", "Mayo", "Cheese", "Lettuce", "Cucumber", "Tomato");