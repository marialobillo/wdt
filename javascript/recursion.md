# Exercises

### Questions

> What is recursion?

A: is a programming technique for iterating over an operation by having a function call itself over and over.

> When would a programmer want to write a recursive function instead of an iterative one?

A: When it needs a function that call itself.

> What is a base case and what is its role in a recursive function?

A: A good example of recursion is the fibonacci series.

> What would happen if a programmer did not utilize a base case within a recursive function?

A: Maybe the code would be much longer and definitively no easy to read.

### Code Practice

> Create a recursive function that will take a positive integer parameter n and return the factorial of n.

```
function factorial(n){
  if (n <= 1){
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
```
