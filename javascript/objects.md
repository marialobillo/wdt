# Exercises


### Questions

> In your own words, what is a JavaScript object?

A: An object is a collection os properties, a property is a association between a name and a value.

> What is a property of a JavaScript object?

A: A property is an association between a name and a value, a value can be a function.

### Code Practice

Declare a class called Clothes that takes three parameters in the constructor, name, size, and price. Create a variable called shirt that is equal to a new instance of Clothes with name = 'V-Neck', size = 'Medium' and price = 20.

```
class Clothes{
  constructor(name, size, price){
    this.name = name;
    this.size = size;
    this.price = price;
  }
}

let shirt = new Clothes('V-Neck', 'Medium', 20);
```
