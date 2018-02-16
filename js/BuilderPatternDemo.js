function Item() {}
Item.prototype.itemname = function() {}
Item.prototype.packing = function() {}
Item.prototype.price = function() {}

function Packing() {}
Packing.prototype.pack = function() {}

function Wrapper() {}
Wrapper.prototype = new Packing();
Wrapper.prototype.pack = function() { return "Wrapper"; }

function Bottle() {}
Bottle.prototype = new Packing();
Bottle.prototype.pack = function() { return "Bottle"; }

function Burger() {}
Burger.prototype = new Item();
Burger.prototype.packing = function() {
    return new Wrapper();
}
Burger.prototype.price = function() {}

function ColdDrink() {}
ColdDrink.prototype = new Item();
ColdDrink.prototype.packing = function() {
    return new Bottle();
}
ColdDrink.prototype.price = function() {}


function VegBurger() {}
VegBurger.prototype = new Burger();
VegBurger.prototype.price = function() {
    return 25.0;
}
VegBurger.prototype.itemname = function() {
    return "Veg Burger";
}

function ChickenBurger() {}
ChickenBurger.prototype = new Burger();
ChickenBurger.prototype.price = function() {
    return 50.0;
}
ChickenBurger.prototype.itemname = function() {
    return "Chicken Burger";
}

function Coke() {}
Coke.prototype = new ColdDrink();
Coke.prototype.price = function() {
    return 30.0;
}
Coke.prototype.itemname = function() {
    return "Coke";
}

function Pepsi() {}
Pepsi.prototype = new ColdDrink();
Pepsi.prototype.price = function() {
    return 35.0;
}
Pepsi.prototype.itemname = function() {
    return "Pepsi";
}

function Meal() {
    this.items = [];
}
Meal.prototype.addItem = function(item) {
    this.items.push(item);
}
Meal.prototype.getCost = function() {
    var cost = 0.0;
    for (var i = 0; i < this.items.length; i++) {
        cost += this.items[i].price();
    }
    return cost;
}
Meal.prototype.showItem = function() {
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        console.log("Item : " + item.itemname() + "; Packing : " + item.packing().pack() + "; Price : " + item.price());
    }
}

function MealBuilder() {}
MealBuilder.prototype.prepareVegMeal = function() {
    var meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new Coke());
    return meal;
}
MealBuilder.prototype.prepareNonVegMeal = function() {
    var meal = new Meal();
    meal.addItem(new ChickenBurger());
    meal.addItem(new Pepsi());
    return meal;
}