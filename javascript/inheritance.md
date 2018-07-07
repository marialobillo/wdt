# Exercises

### Questions

> What does "DRY" stand for? What does the "DRY principle" imply in programming or software development?

A: Don't Repeat Yourself, means that every piece of the system should have only a single representation within a system.

### Code Practice

> Following the examples above, create a new prototype called Product and three instances of it. Each instance should be a separate product (for example, a shirt, a jacket, and a scarf).

```
function Product(name, price){
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

}

let shirt = new Product('red shirt', 10.50);
let jacket = new Product('blue jacket', 15.90);
let jeans = new Product('vintage jeans', 13.90);
```
