# Exercises

### Questions

> What does "lexical scope" mean in JavaScript?

A: It is a convention which we can define the scope of a variable, the scope means where we can referenced that variable.

> What is an advantage of a programming language that uses lexical scoping?

A: One advantage is don't confuse variables with the same name and different scope, so clear code because every variable it can be referenced in their own scope where it was defined.

> What is a closure?

A: A closure is a function along with its lexical scope.

> What would be a use case of a closure?

A: When an inner function is made accesible from outside its parent function.

### Code Practice

> Create your own example of a closure and see if it works by using the console.log to print values and verifying they are what you expect.


```
var greeting = function(){
  var greet = 'Hello';
  function sayHello(){
    console.log(greet);
  }
  return sayHello;
}
var word = greeting();
word()  // Hello
```

A: It does what I expected, prints 'Hello'.
