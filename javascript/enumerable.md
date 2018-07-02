# Exercises

### Questions

> Describe the map() function.

A: Map function iterate every item of the array and apply the code in the function and returns a new array.

> Describe the filter() function.

A: Filter function select the items and returns them.

> What is the difference between the map() and filter() functions?

A: Map function iterate the array item and Filter function is select some of the items.

### Code Practice

> Using the numbers provided in the editor, use the filter() function to keep any numbers that are greater than three, then use the reduce() function to sum the filtered numbers.

```
let numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];

let sum = numbers
  .filter(num => num > 3)
  .reduce((sum, num) => sum + num)

console.log(sum);
```
