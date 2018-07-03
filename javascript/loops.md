# Exercises

### Questions

> What are the three things you need to provide for a loop? I.e., in for(a ; b ; c){}, what are a, b, and c?

A: ( initialization ; condition ; final-expression ) in other words the beginning of the loop, the end of the loop and the iterator.

> Describe infinite loops and how to avoid them.

A: An infinite loop is a loop that the condition is always true, so the loop never stops. In order to avoid infinite loops from your code you should pay attention on definition where the loop begins and where ends are correct, use map() if you can, and other loops like while loop.

### Code Practice

> Using the shoppingCart variable below, use a for() loop to iterate over the array and console.log() the shopping cart item's name.

```
for(let i = 0; i < shoppingCart.length ; i++){
  console.log(shoppingCart[i].name);
}
var shoppingCart = [
  {
      id: 0,
      name: 'Mens Shirt',
      price: 20,
      size: 'Large'
  },
  {
  id: 1,
  name: 'kids shirt',
  price: 15,
  size: 'small'
}
]
``
