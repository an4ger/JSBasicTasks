var MyNamespace = MyNamespace || {};
MyNamespace.MyClass = function (str) {
    this.str = str;
};
MyNamespace.MyClass.prototype.sayHello = function() {
    return this.str;
};

var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello(); // phrase should be 'Hello!'
