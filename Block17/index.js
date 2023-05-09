console.clear()
/*1. Clean the coffee_data.js file.

All prices should be numbers.
All items should be strings.
Objects and properties should have commas separating them.
Connect the coffee_data.js file to the index.js file. */
console.log("1. Clean the coffee_data.js file. ");

console.log(" ".repeat(5)+"All prices should be numbers. ");
console.log(" ".repeat(5)+"All items should be strings. ");
console.log(" ".repeat(5)+"Objects and properties should have commas separating them. ");
console.log(" ".repeat(5)+"Connect the coffee_data.js file to the index.js file. ");
console.log("...")
console.log("done")
console.log()

console.log("Tabled:")
const coffeeMenu = require("./coffee_data");

//2. Print an array of all the drinks on the menu.
console.table(coffeeMenu)
function printDrinks(menu) {
    console.log("2. Print an array of all the drinks on the menu.")
    const tableDrinks = [] 
    menu.forEach(coffee => {
        tableDrinks.push(coffee.name)
    })
    console.log(tableDrinks)
}
printDrinks(coffeeMenu);
console.log()

// 3. Print an array of drinks that cost 5 and under.
function underFive(menu) {
    console.log("3. Print an array of drinks that cost 5 and under.")
    var costUnderFive = []
    costUnderFive = menu.filter(coffee => coffee.price <= 5);
    costUnderFive.forEach(coffee => costUnderFive.push(coffee.name))
    console.log(costUnderFive)
}

underFive(coffeeMenu)
console.log("Can't figure out how to only show the name values")
console.log()

// 4. Print an array of drinks that are priced at an even number.
function evenPrice(menu) {
    console.log("4. Print an array of drinks that are priced at an even number.")
    var pricedEven = []
    pricedEven = menu.filter(coffee => coffee.price % 2 === 0);
    pricedEven.forEach(coffee => pricedEven.push(coffee.name))
    console.log(pricedEven)
}

evenPrice(coffeeMenu)
console.log("Can't figure out how to only show the name values")
console.log()

// 5. Print the total if you were to order one of every drink.
function oneEachTotal(menu) {
    console.log("5. Print the total if you were to order one of every drink.")

    const initialValue = 0;
    const sumTotal = menu.reduce ((total, coffee) => total + coffee.price,
        initialValue
    );

    console.log(sumTotal)


    // var pricedEven = []
    // pricedEven = menu.filter(coffee => coffee.price % 2 === 0);
    // pricedEven.forEach(coffee => pricedEven.push(coffee.name))
    // console.log(pricedEven)
}

oneEachTotal(coffeeMenu)
console.log()

// 6. Print an array with all the drinks that are seasonal.
function seasonal(menu) {
    console.log("6. Print an array with all the drinks that are seasonal.")
    var seasonalDrinks = []
    seasonalDrinks = menu.filter(coffee => coffee.seasonal);
    seasonalDrinks.forEach(coffee => seasonalDrinks.push(coffee.name))
    console.log(seasonalDrinks)
}

seasonal(coffeeMenu)
console.log("Can't figure out how to only show the name values")
console.log()


// 7. Print all the seasonal drinks with the words with imported beans after the item name For example affogato with imported beans
function seasonalImportedBeans(menu) {
    console.log("7. Print all the seasonal drinks with the words with imported beans after the item name For example affogato with imported beans")
    const seasonalDrinks = menu.filter(coffee => coffee.seasonal);
    const withImportedBeans = seasonalDrinks.map((coffee) => ({...coffee, name: coffee.name + " with imported beans"}))
    withImportedBeans.forEach((coffee) => console.log(`${coffee.name}`))

    //seasonalDrinks.forEach(coffee => seasonalDrinks.push(coffee.name))
    //console.log(`${coffee.name} + "with imported beans"`)
}

seasonalImportedBeans(coffeeMenu)
console.log()