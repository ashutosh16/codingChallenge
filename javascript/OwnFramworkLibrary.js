(function(global){
    var Greeter = function (firstName, lastName, language){
        return new Greeter.init(firstName, lastName, language);
    }

    var supportedLanguages = ['en', 'es'];
    var greetings = {
        'en' : 'Hello',
        'es' : 'Hola'
    };
    var formalGreetings = {
        'en' : 'Greetings',
        'es' : 'Saludos'
    }
    Greeter.prototype = {
        greet : function (isFormal){
            console.log(isFormal ? this.greeting() : this.formalGreeting());
            return this;
        },
        greeting: function (){
            return `${greetings[this.language]} ${this.firstName}`;
        },
        formalGreeting: function (){
            return `${formalGreetings[this.language]} ${this.getFullName()}`;
        },
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        setLanguage: function (lang) {
            if(supportedLanguages[lang]){
                this.language = lang;
            } else {
                throw 'Unsupported language';
            }
            return this;
        }
    };
    
    Greeter.init = function(firstName, lastName, language) {
        this.firstName = firstName;
        this.lastName = lastName;
        if(supportedLanguages.indexOf(language) > -1){
             this.language = language;
        } else {
            this.language = 'en';
            throw 'not supported language, defaulting to english';
        }
    }
    Greeter.init.prototype = Greeter.prototype;
    global.Greeter = global.$G = Greeter;
}(window))
