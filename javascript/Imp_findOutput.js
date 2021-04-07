// 1)

var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
// 10
// 2

// Why isn’t it 10 and 5?

// In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window. var length = 10; 
// is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)
// fun() is not called on any object like "this.fun" . hence its keep on pointing to the global scope of the length variable.
// But any function call on global space will be call as window.fun hence its always refer this to global object insted its declaration scope.
// If function called on any object using "." then this refer to that object else this refer to the function declaration context.


// method is bound to Object obj, and obj.method is called with parameters fn and 1. 
// Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

// When fn() is called inside method, which was passed the function as a parameter at the global level, 
// this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.

// Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.

// Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array,
// and logging the length of arguments[] will return 2.
// Hence the output will be as above.

// ------------------------------------------------------------------------------------------------------------

// 2) Find output of given code.
{
  let obj = {
    name : 'sameer',
    lastName: 'girkar',
    details: {
      getFullName(){
        return `${this.name} ${this.lastName}`;
      },
      getCompany(){
        return `${this.c_name} ${this.c_lastName}`;
      }
    }
  }
  let name = 'global name',
    lastName = 'global last name';

  var c_name = "global c name",
      c_lastName = 'global c last name';

  console.log(`obj.details.getFullName()=  ${obj.details.getFullName()}`);

  let temp = obj.details.getFullName;
  console.log(`temp() =  ${temp()}`);

  let temp2 = obj.details.getCompany;
  console.log(`temp2() =  ${temp2()}`);
}
// output
// obj.details.getFullName()= undefined undefined    explanation: obj.details.getFullName()  --> 'this' inside obj.details.getFullName function refer to the details object
// temp() = undefined
// temp2() = global c name global c last name

// HINT: var a will mount "a" on window.a but let a will not mount a on window object;
var a =1;
let b = 2;
console.log(window.a); // 1
console.log(window.b); // undefined


// ------------------------------------------------------------------------------------------------------------
// 3)
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

// 1
// undefined
// 2

(function () {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x /* inner */);
    }
    console.log(x);
    console.log(y);
})();

// ------------------------------------------------------------------------------------------------------------

// 4)

function b() {
  console.log(value);
}

function a() {
  var value= 2;
  b();
}

var value = 1;
a();

//output : 1
/** Scope chain:
    console.log(value); will start searching the variable 'value' in current execution context which is execution context of b.
    It cant find 'value', Then it will start searching 'value' in outer environment,
    outer env is always point to the the lexical scope. here lexical scope of function b is Global.
    This will find value variable in global scope and print as 1.
*/

// ------------------------------------------------------------------------------------------------------------
// 5)
typeof undefined == typeof NULL

// The expression will be evaluated to true, since NULL will be treated as any other undefined variable.
// Note: JavaScript is case-sensitive and here we are using NULL instead of null.

// ------------------------------------------------------------------------------------------------------------

// 6)
console.log(typeof typeof 1);

// "string"

// ------------------------------------------------------------------------------------------------------------

// 7)
{
  let num1 = 12;
  let num2 = new Number(12);
  console.log(` num1 === num2 -> ${num1 === num2}`);
  console.log(`typeof num1 ${typeof num1}`);
  console.log(`typeof num2 ${typeof num2}`);

  let str1 = 'sam';
  let str2 = new String('sam');
  console.log(` str1 === str2 -> ${str1 === str2}`);
  console.log(`typeof str1 ${typeof str1}`);
  console.log(`typeof str2 ${typeof str2}`);

  let arr1 = [];
  let arr2 = new Array();
  console.log(` arr1 === arr2 -> ${arr1 === arr2}`);
  console.log(`typeof arr1 ${typeof arr1}`);
  console.log(`typeof arr2 ${typeof arr2}`);

  // num1 === num2 -> false
  // typeof num1 number
  // typeof num2 object

  // str1 === str2 -> false
  // typeof str1 string
  // typeof str2 object

  // arr1 === arr2 -> false
  // typeof arr1 object
  // typeof arr2 object
}

// ------------------------------------------------------------------------------------------------------------

// 8)
{
  let obj = {
    name: 'sam',
    getUpdatedName(){
      function updateName(){ // solution is replace this line with below line
    //let updateName = () => {
        this.name = 'new ' + this.name; 
        return this.name;
      }
      return updateName();
    }
  }

  let name = 'global Name';
  console.log(`obj.getUpdatedName --> ${obj.getUpdatedName()}`);

  console.log(`obj.name = ${obj.name}`);
}

/**
 * obj.getUpdatedName --> new global Name
 * obj.name = sam
 */

// ------------------------------------------------------------------------------------------------------------

// 9)
{
  let obj = {
    name: 'sam',
    getUpdatedName:()=>{
        this.name = "New "+ this.name;
        return this.name;
    }
  }

  let name = 'global Name';
  console.log(`obj.getUpdatedName --> ${obj.getUpdatedName()}`); 
  console.log(`obj.name = ${obj.name}`);
}

// obj.getUpdatedName --> New global name
// obj.name = sam

//Array function didnot create the this contex it uses the outer contex. 

// ------------------------------------------------------------------------------------------------------------

// 10)
{
  var a = 1;
  function foo() {
    console.log(1, a); // function body
    a = 2;
    function a() {
      console.log(2, a);
    }
    console.log(3, a); // 2
    a = 3;
    console.log(4, a); //3
  }

  foo();
  console.log(5, a); //1
}

// 1 ƒ a() {
//     console.log(2, a);
//   }
// 3 2
// 4 3
// 5 1
 

// ------------------------------------------------------------------------------------------------------------

// 11)
{
  let abc = function xyz(){
    console.log('xyz values');
  }
  abc(); // xyz values
  xyz(); // xyz is not defined
}

// ------------------------------------------------------------------------------------------------------------

// 12)
{
  let obj = {
    name: 'sam',
    getName() {
      setTimeout(function () {
        console.log(this.name);
      }, 0);
    }
  }

  console.log(`obj.getName() =  ${obj.getName()}`); //obj.getName() =  undefined
}
// ------------------------------------------------------------------------------------------------------------

// 13)
{
  let arr = [1,2,3];
  arr.name = 'sam';

  console.log(`arr.length = ${arr.length}`); // 3
  console.log(`arr[name] = ${arr['name']}`); // sam
  console.log(`key length = ${Object.keys(arr).length}`); //key length = 4
  console.log(`keys = ${Object.keys(arr)}`); // keys =  ["0", "1", "2", "name"]
  

  arr[10] = '10 item';
  console.log(arr.length); // 11
  console.log(arr); // [1, 2, 3, empty × 7, "10 item", name: "sam"]

  arr.length = 10;
  console.log(arr); //  [1, 2, 3, empty × 7, name: "sam"]
}

// ------------------------------------------------------------------------------------------------------------

// 14)
{
  // Function curring
  function multiply(a = 1, b = 1){
    return a*b;
  }

  let multiplyByTwo = multiply.bind(null, 2);
  console.log(`multiplyByTwo(10) = ${multiplyByTwo(10)}`);
  console.log(`multiplyByTwo(10 , 20) = ${multiplyByTwo(10)}`);

  // multiplyByTwo(10) = 20
  // multiplyByTwo(10, 20) = 20
}

// ------------------------------------------------------------------------------------------------------------

// 15)
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
  console.log(p1); // Person {name: "tom", lastName: "girkar"}

  let p2 = newObject(Person, 'tom');
  console.log(p2); // Person {name: "tom", lastName: "girkar"}
}

// ------------------------------------------------------------------------------------------------------------

// 16)
{
  function prob(){
    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(`i = ${i}`);
      }, 200);
    }
  }
 
  function sol1(){
    for (var i = 0; i < 5; i++) {
      setTimeout(function (i) {
        console.log(`i = ${i}`);
      }.bind(null, i), 2000); // bind will return new function each time
    }
  }

  function sol2() {
    for (let i = 0; i < 5; i++) { //let will do new bindiing at each time
      setTimeout(function () {
        console.log(`i = ${i}`);
      }, 200);
    }
  }

  function sol3() {
    for (var i = 0; i < 5; i++) {
      let temp = (function (i) {
        return function () {
          console.log('i=' + i);
        }
      })(i); // self invocable fuunction
      setTimeout(temp, 300);
    }
  }

  prob(); // 5 times i = 5
  sol1();
  // i = 0
  // i = 1
  // i = 2
  // i = 3
  // i = 4

  sol2();
  // i = 0
  // i = 1
  // i = 2
  // i = 3
  // i = 4

  sol3();
  // i = 0
  // i = 1
  // i = 2
  // i = 3
  // i = 4


  function prob() {
    for (var i = 0; i < 5; i++) {
      let temp = (function () {
        return function (i) {
          console.log('i=' + i);
        }
      })(i);
      setTimeout(temp, 300);
    }
  }
  prob(); 
   // i = 0
  // i = 1
  // i = 2
  // i = 3
  // i = 4
}
// ------------------------------------------------------------------------------------------------------------
// 17)
// Create Queue using Array
function queue() {
  let list = [];
  return {
    add(n) {
      list.push(n);
      return list;
    },
    remove() {
      return list.shift();
    },
    show(){
      return list;
    }
  }
}
t.add(1);
t.add(2);
t.add(3);
t.add(4);
t.show(); //[1, 2, 3, 4]
t.remove(); //1
t.show(); //[2, 3, 4]

// ------------------------------------------------------------------------------------------------------------
