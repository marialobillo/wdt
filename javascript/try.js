function sequential(a, b, c, d){
  if ((a + 3) === (b + 2) && (c + 1) === d){
    return true;
  } else{
    return false;
  }
}

console.log(sequential(1,2,3,4));
console.log(sequential(1,3,5,6));
console.log(sequential(15,18,123,4534));
console.log(sequential(1234,1235,1236,1237));
