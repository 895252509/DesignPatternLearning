function Shape() {}
Shape.prototype.draw = function() {

}

function ShapeFactory() {}
ShapeFactory.prototype.getShape = function(type) {
    if (!type) {
        return null;
    }
    if (type == "Rectangle") {
        return new Rectangle();
    }
    if (type == "Circle") {
        return new Circle();
    }
    if (type == "Square") {
        return new Square();
    }
    return null;
}

function Rectangle() {}
Rectangle.prototype = new Shape();
Rectangle.prototype.draw = function() {
    console.log("Inside Rectangle::draw() method.");
}

function Square() {}
Square.prototype = new Shape();
Square.prototype.draw = function() {
    console.log("Inside Square::draw() method.");
}

function Circle() {}
Circle.prototype = new Shape();
Circle.prototype.draw = function() {
    console.log("Inside Circle::draw() method.");
}