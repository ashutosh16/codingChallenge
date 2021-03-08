{
  
  Function.prototype.myBind = function(contex, ...args){
      // here this represent the function on which myBind method is called.
      return (...newArgs) => {this.call(contex, ...args, ...newArgs)};
  }
  
  function Abc(greeting, font) {
    const greet = `${greeting} ${this.name}`;
    console.log((font === "upper") ? greet.toUpperCase() : greet.toLowerCase());
  }

  const greetSam = Abc.myBind({name:"sameer"}, "Hello");
  greetSam("upper");
//   HELLO SAMEER
}
