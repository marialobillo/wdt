# Exercises

### Questions

> Describe/define DRY and why functions exist.

A: Don't Repeat Yourself, so write functions, use them and don't repeat any piece of the code.

> Describe/define the difference between creating a function and calling/executing a function.

A: The syntax is difference, on creating you have to use 'function' on ES5, this way:

```
  function example_function(arguments){
    // here the code
  }
```
  On ES6, we got the arrow functions:

  `(param1, param2, …, paramN) => { code }`

  And the calling of a function it's just the name and the arguments, like this:

  `example_function(arguments);``

> Describe/define what arguments/parameters are and how they relate to functions.

A: Arguments are the variables that you can use inside the function and their scope is the function only.
When you call the function you can use variables that were created outside the function inside the function, those are parameters.

> Describe/define mutating vs. non-mutating functions.

A: Mutating functions can change the original array like push(), and non-mutating functions like join() doesn't.

### Code Practice

> Using the shoppingCart variable, create a function that takes the shoppingCart variable and returns the total cost of both items as the total variable.

```
let shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  prices.map( item => {
    total += item;
  });

  return total;
}

getTotalCost(shoppingCart);

```
