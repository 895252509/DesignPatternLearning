var FactoryProducer = {
    getFactory: function(type) {
        if (!type) {
            return null;
        }
        if (type == "Shape") {
            return new ShapeFactory();
        }
        if (type == "Color") {
            return new ColorFactory();
        }
    }
}


function AbstractFactory() {}
AbstractFactory.prototype.getColor = function(color) {}
AbstractFactory.prototype.getShape = function(shape) {}

function ShapeFactory() {}
ShapeFactory.prototype = new AbstractFactory();
ShapeFactory.prototype.getColor = function() {
    return null;
}
ShapeFactory.prototype.getShape = function(shape) {
    if (!shape) return null;
    if (shape == "Circle") return new Circle();
    if (shape == "Rectangle") return new Rectangle();
    if (shape == "Square") return new Square();
}

function ColorFactory() {}
ColorFactory.prototype = new AbstractFactory();
ColorFactory.prototype.getShape = function() {
    return null;
}
ColorFactory.prototype.getColor = function(type) {
    if (!type) return null;
    if (type == "Red") return new Red();
    if (type == "Blur") return new Blue();
    if (type == "Green") return new Green();
}

function Shape() {}
Shape.prototype.draw = function() {}

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


function Color() {}
Color.prototype.fill = function() {}

function Red() {}
Red.prototype = new Color();
Red.prototype.fill = function() {
    console.log("Inside Red::fill() method.");
}

function Green() {}
Green.prototype = new Color();
Green.prototype.fill = function() {
    console.log("Inside Green::fill() method.");
}

function Blue() {}
Blue.prototype = new Color();
Blue.prototype.fill = function() {
    console.log("Inside Blue::fill() method.");
}