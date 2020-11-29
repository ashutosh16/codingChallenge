(function(global){
    var Greeter = function (firstName, lastName, language){
        return new Greeter.init(firstName, lastName, language);
    }
    Greeter.prototype = {};
    
    Greeter.init = function(firstName, lastName, language) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.language = language;
    }
    Greeter.init.prototype = Greeter.prototype;
    global.Greeter = global.$G = Greeter;
}(window))
