
/**
 * 中介者模式（Mediator Pattern）是用来降低多个对象和类之间的通信复杂性。这种模式提供了一个中介类，
 * 该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护。中介者模式属于行为型模式。
 */

function ChatRoom (){}
ChatRoom.showMessage = function (user,msg){
    console.log("["+user.getName()+"]:"+msg);
}

function User(_name){
    this.name=_name;
}
User.prototype.getName = function (){
    return this.name;
}
User.prototype.setName = function (name){
    this.name = name;
}
User.prototype.sendMessage = function (msg){
    ChatRoom.showMessage(this,msg);
}

window.onload = function (){
    var robert = new User("Robert");
    var john = new User("John");

    robert.sendMessage("Hi John!");
    john.sendMessage("Hello Robert!");
}