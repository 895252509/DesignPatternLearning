/**
 *  过滤器（Filter） - 过滤器在请求处理程序执行请求之前或之后，执行某些任务。
    过滤器链（Filter Chain） - 过滤器链带有多个过滤器，并在 Target 上按照定义的顺序执行这些过滤器。
    Target - Target 对象是请求处理程序。
    过滤管理器（Filter Manager） - 过滤管理器管理过滤器和过滤器链。
    客户端（Client） - Client 是向 Target 对象发送请求的对象。
 */

function Filter(){}
Filter.prototype.execute = function(request){};

function AuthenticationFilter (){

}
AuthenticationFilter.prototype = new Filter();
AuthenticationFilter.prototype.execute = function (request){
    console.log("Authenticating request: " + request);
}

function DebugFilter (){}
DebugFilter.prototype = new Filter();
DebugFilter .prototype.execute = function (request){
    console.log("request log: " + request);
}

function Target (){}
Target.prototype.execute = function(request){
    console.log("Executing request: " + request);
}

function FilterChain(){
    this.filters = new Array();
    this.target;
}
FilterChain.prototype.addFilter = function (filter){
    this.filters.push(filter);
}
FilterChain.prototype.execute = function (request){
    this.filters.forEach(function (val,index,arr){
        val.execute(request);
    },window);
    this.target.execute(request);
}
FilterChain.prototype.setTarget = function (target){
    this.target = target;
}

function FilterManager(target){
    this.filterChain = new FilterChain();
    this.filterChain.setTarget(target);
}
FilterManager.prototype.setFilter = function (filter){
    this.filterChain.addFilter(filter);
}
FilterManager.prototype.filterRequest = function (request){
    this.filterChain.execute(request);
}

function Client(){
    this.filterManager;
}
Client.prototype.setFilterManager = function (man){
    this.filterManager = man;
}
Client.prototype.sendRequest = function (request){
    this.filterManager.filterRequest(request);
}


window.onload = function (){
    var filterManager = new FilterManager(new Target());
    filterManager.setFilter(new AuthenticationFilter());
    filterManager.setFilter(new DebugFilter());

    var client = new Client();
    client.setFilterManager(filterManager);
    client.sendRequest("HOME");
}
