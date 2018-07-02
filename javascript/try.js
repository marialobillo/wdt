

let numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];

let sum = numbers
  .filter(num => num > 3)
  .reduce((sum, num) => sum + num)

console.log(sum);
