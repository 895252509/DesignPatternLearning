/**
 *  状态模式

    在状态模式（State Pattern）中，类的行为是基于它的状态改变的。这种类型的设计模式属于行为型模式。
    在状态模式中，我们创建表示各种状态的对象和一个行为随着状态对象改变而改变的 context 对象。
 */

function State(){}
State.prototype.doAction= function (context){}

function StartState(){}
StartState.prototype = new State();
StartState.prototype.doAction = function (context){
    console.log("Player is in start state");
    context.setState(this);
}
StartState.prototype.toString = function (){
    return "Start State";
}

function StopState(){}
StopState.prototype = new State();
StopState.prototype.doAction = function (context){
    console.log("Player is in stop state");
    context.setState(this);
}
StopState.prototype.toString = function (){
    return "Stop State";
}

function Context(){
    this.state = null;
}
Context.prototype.getState = function(){
    return this.state;
}
Context.prototype.setState = function (state){
    this.state = state
}


window.onload = function (){
    var context = new Context();

    var startState = new StartState();
    startState.doAction(context);

    console.log(context.getState().toString());

    var stopState = new StopState();
    stopState.doAction(context);

    console.log( context.getState().toString());
}