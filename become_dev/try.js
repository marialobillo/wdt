let arr = [2, 3, 7, 5, 3, 6, 3 ,1 , 9, 11, 33];



function bubble(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(arr);
console.log(bubble(arr));
