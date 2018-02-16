window.onload = function() {

    /** 
     * 意图：定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。
     * 主要解决：主要解决接口选择的问题。
     * 何时使用：我们明确地计划不同条件下创建不同实例时。
     
    var Shapefactory = new ShapeFactory();
    var rect = Shapefactory.getShape("Rectangle");
    rect.draw();

    var circle = Shapefactory.getShape("Circle");
    circle.draw();

    var square = Shapefactory.getShape("Square");
    square.draw();
    */

    var color = FactoryProducer.getFactory("Color");
    var red = color.getColor("Red");
    red.fill();

    var shape = FactoryProducer.getFactory("Shape");
    var circle = shape.getShape("Circle");
    circle.draw();

    var mealbuiler = new MealBuilder();
    var vegMeal = mealbuiler.prepareVegMeal();
    console.log("Veg Meal")
    vegMeal.showItem();
    console.log("Total Cost: " + vegMeal.getCost());

    var nonVegMeal = mealbuiler.prepareNonVegMeal();
    console.log("Non-Veg Meal")
    nonVegMeal.showItem();
    console.log("Total Cost: " + nonVegMeal.getCost());

}