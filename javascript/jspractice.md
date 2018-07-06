# Simpler Questions

## First:

> Create a function that accepts one parameter. This parameter will be an array of objects. Each object will have 1 property name. The function should return a new array that is populated with the name properties from the objects.

> Example js namesFunction([{name: 'Tacos'},{name: 'Burritos'},{name: 'Enchiladas'}]); //returns ['Tacos', 'Burritos', 'Enchiladas']

```
function getMenu(menu){
  let menuList = [];
  menu.forEach(function (item) {
      var x = item.name;
      menuList.push(item.name);
  });
  return menuList;
}

console.log(getMenu([{name: 'Tacos'},{name: 'Burritos'},{name: 'Enchiladas'}]));

```

## Second:

Create a function that accepts one parameter. This parameter will be an array of numbers. The function should return a new array that is populated with the numbers from the parameter array that are greater than 5.

Example js greaterThanFive([12, 0, 3, 25]) //returns [12, 25]

```
let list = [0, 3, 15, 23];

function greaterThanFive(listNum){
  return listNum.filter((item) => item > 5);

}
console.log(greaterThanFive(list));
```

## Third:

Create a function named multiplyByFive() that accepts 1 number parameter. Have that function return the product of the number parameter multiplied by 5. Create another function called multiplyTwice() that accepts 1 number parameter. It should return the result of 2 * multiplyByFive(theParamPassedToMultiplyTwice).

Example js multipleTwice(5); //returns 50.

```
function multiplyByFive(number){
  return number * 5;
}

function multiplebyTwice(number){
  return number * 2;
}
```

## Fourth:

Create a function named addGoodbye() that accepts one string parameter. It should return a new string that is the string parameter, a comma, a space, and the word 'Goodbye'. Create another function named addHelloGoodBye() that accepts one string parameter. It should return the results of 'Hello! ' + addGoodbye(theParamPassedToMultiplyTwice).

Example js addGoodbye('Jacob') //returns "Hello! Jacob, Goodbye"

```
function addGoodbye(str){
  return str + ", Goodbye";
}

function addHelloGoodBye(str){
  return 'Hello! ' + addGoodbye(multiplebyTwice(n));
}
```

## Fifth:

Create a function that accepts one array parameter. It will be an array of numbers. The function should return a new array with all the numbers between 1 and 100 from the array parameter.

Example js betweenOneAndHundred([-12, 0, 1, 100, 56, 12354, 9845]) //returns [1, 100, 56] Assessment-ish questions

```
function betweenOneAndHundred(arrNumbers){
  const filtered = arrNumbers.filter( (item) => {
    return item > 0 && item <= 100;
  });
  return filtered;
}
```

console.log(betweenOneAndHundred([-12, 0, 1, 100, 56, 12354, 9845]));

## First:

Create a function named convertStrToObj() that accepts three string parameters. All three should be optional parameters. If a parameter does not exist set it to 'N/A'. Your function should return an object with three properties first, second, and third. Each of the string parameters should be assigned to that object's properties.

Examples - ```js convertStrToObj('string 1', 'string 2', 'string 3') //returns { first: 'string 1', second: 'string 2', third: 'string 3' }

convertStrToObj('string 1', 'string 2') //returns { first: 'string 1', second: 'string 2', third: 'N/A' }

convertStrToObj('string 1') //returns { first: 'string 1', second: 'N/A', third: 'N/A' }

convertStrToObj() //returns { first: 'N/A', second: 'N/A', third: 'N/A' } ```

```
function convertStrToObj(first, second, third){
  let obj = {};
  if(first != undefined){
    obj.first = first;
  } else {
    obj.first = "N/A";
  }
  if(second != undefined){
    obj.second = second;
  } else {
    obj.second = "N/A";
  }
  if(third != undefined){
    obj.third = third;
  } else {
    obj.third = "N/A";
  }
  return obj;
}
```

## Second

Create a function named multiplyNumsBy() that accepts two parameters. The first parameter will be an array of numbers, the second parameter will be a number. It should return a new array that is the result of multiplying the number parameter by each value in the array.

Examples - js multiplyNumsBy([1,2,3,4,5], 5) // returns [5,10,15,20,25] multiplyNumsBy([12,4,9,6,40], 2) // returns [24,8,18,12,80] Harder Ones -

```
function multiplyNumbsBy(numbers, number){
  return numbers.map((item) => {
    return item * number;
  });
}
```

## First:

Create a function named numberTypes() that accepts an array of numbers as its only parameter. If every number in the array is even, it should return 'even', if every number in the array is odd, it should return 'odd', if the array has both even and odd numbers it should return 'both'.

Examples - js numberTypes([0,2,4,6]) //returns 'even' numberTypes([1,3,5,7]) //returns 'odd' numberTypes([1,2,9,6]) //returns 'both'

```
function numberTypes(numbers){
    let counter = 0;
    for(let i = 0; i < numbers.length; i++){
      if( numbers[i] % 2 == 0){
        counter += 1;
      } else {
        counter -= 1;
      }
    }

    if (counter == numbers.length){
      return 'even';
    } else if (counter == -numbers.length){
      return 'odd';
    } else {
      return 'both';
    }
}
```


## Second:

Create a function named sequential() that accepts 4 number parameters. Return true if the numbers are sequential and count 1 at a time, false otherwise.

Examples - js sequential(1,2,3,4) //returns true sequential(1,3,5,6) //returns false sequential(5,6,7,8) //returns true sequential(15,18,123,4534) //returns false sequential(1234,1235,1236,1237) //returns true

```
function sequential(a, b, c, d){
  if ((a + 3) === (b + 2) && (c + 1) === d){
    return true;
  } else{
    return false;
  }
}
```
