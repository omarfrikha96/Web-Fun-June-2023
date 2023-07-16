function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

let pizza3 = pizzaOven("napolitaine", "white sauce", ["mozzarella arbi", "Cheddar"], ["mushrooms", "broccoli ", "capers"]);
console.log(pizza3);

let pizza4 = pizzaOven("tunisienne", "Pesto", ["Gouda", "Burrata"], ["Black olives", "anchovies", "Gorgonzola"]);
console.log(pizza4);


let crustTypes = [
    "deep dish",
    "hand tossed",
    "napolitaine",
    "tunisienne"
];

let sauceTypes = [
    "traditional",
    "marinara",
    "white sauce",
    "Pesto"
];

let cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "mozzarella arbi",
    "Cheddar",
    "Gouda",
    "Burrata"
];

let toppings = [
    "pepperoni",
    "Black olives",
    "anchovies",
    "Gorgonzola",
    "broccoli",
    "onions",
    "mushrooms",
    "capers"
];


function randomPick(arr) {
    let index = Math.floor(arr.length * Math.random());
    return arr[index];
}

function randomPizza() {
    let pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
    return pizza;
}

console.log(randomPizza());