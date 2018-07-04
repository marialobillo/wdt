function add(arr){
    sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum = sum + arr[i];
    }
    return sum;
  }

  console.log(add([1,2,3,4,5]));


  function isAString(x){
    console.log(typeof x == 'string');
  }

  isAString('Hello');
