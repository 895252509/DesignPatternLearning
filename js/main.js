window.onload = function() {

    var Shapefactory = new ShapeFactory();
    var rect = Shapefactory.getShape("Rectangle");
    rect.draw();

    var circle = Shapefactory.getShape("Circle");
    circle.draw();

    var square = Shapefactory.getShape("Square");
    square.draw();

}