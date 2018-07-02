# Exercises

### Questions

> What are the three types of conditional statements?

A: If statement, Else statement, If else statement.

> What are four types of comparison operators and how you would use them?

A:
1. Equality operator: normal(==) and strict(===)

  ```
  let day = 'Monday';
  if (day === 'Friday'){
    console.log('Weekend!!');
  } else {
    console.log('Work time!!');
  }
  ```

2. Inequality operator: single(!=) and strict(==!)

  ```
  let day = 'Monday';
  if (day !== 'Friday'){
    console.log('Time for work!');
  } else {
    console.log('Weekend!!');
  }
  ```

  3. Greater than operator(>) and Less than operator(<):

  ```
  let day = 1;
  if (day > 5){
    console.log('Weekend!!');
  } else if (day < 6){
    console.log('Time for work!!');
  }
  ```

4. Greater(Less) than or equal operator(>=, <=):

```
let day = 1;
if (day >= 5){
  console.log('Weekend!!');
} else if (day =< 6){
  console.log('Time for work!!');
}
```

### Code Practice

> Create a variable called grade and set it to the grade you plan to receive on this assignment. Then write an if statement that will check whether the grade is equal to an A, B, C, D, or F and inform the user if they passed or failed using console.log().

```
let grade = 'A'
if(grade === 'A' || grade === 'B' || grade === 'C'){
  console.log('Congrats. I passed the assignment!!');
} else {
  console.log('Maybe the next time! Try it again!');
}
``
