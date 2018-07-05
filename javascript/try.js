

var greeting = function(){
  var greet = 'Hello';
  function sayHello(){
    console.log(greet);
  }
  return sayHello;
}
var word = greeting();
word()
