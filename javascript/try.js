
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


console.log(numberTypes([0,2,4,6]));
console.log(numberTypes([1,3,5,7]));
console.log(numberTypes([1,2,9,6]));
