# Exercises

### Questions

> What is object-oriented programming?

A: Is a programming language model organized around objects rather than "actions" and data rather than logic

> What is a constructor?

A: A constructor is an special method called when creating and initializing a class.

> What is the purpose of the keyword super?

A: When a class extends from another class, the parent class gives it access to variables and methods defined in the parent class, for that purpose we use the keyword super.

> What are classes that do not use the keyword extends called?

A: A single class or parent class.

### Code Practice

> Using the Clothes class we previously created, create a Shirt class that extends the Clothes class. Don't forget the super().

```
var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }
}

class Shirt extends Clothes{
  constructor(name, size, price){
    super(name, size, price);
  }
}
```
