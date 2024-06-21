function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking the sandwich with the following items\n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\nNow Enjoy Sandwich");
}
makeSandwich("Bread", "Chicken", "Mayo");
makeSandwich("Bread", "Mayo");
makeSandwich("Bread", "Chicken", "Butter", "Mayo", "Cheese", "Lettuce", "Cucumber", "Tomato");
