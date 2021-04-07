{
  // Create polyfill for 'new' keyword
  // Write a function name as newObject(constructorFunction) return new object just like 'new' keyword
  function newObject(className, ...args) {
    let obj = {};
    className.call(obj, ...args);
    obj.__proto__ = className.prototype;
    return obj;
  }

  function Person(name = 'sam', surname = 'girkar'){
    this.name = name;
    this.lastName = surname;
  }

  let p1 = new Person('tom');
  console.log(p1); // Person {name: "tom", lastName: "girkar"}

  let p2 = newObject(Person, 'tom');
  console.log(p2); // Person {name: "tom", lastName: "girkar"}
}
