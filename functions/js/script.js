//correct way of using function. Must call a function for it to work//
// function favouriteColour(colour) {
//   console.log('Your favourite colour is ' + colour);
// }
//
// //this is a function being called//
// favouriteColour('red');
// favouriteColour('blue');
// favouriteColour('green');



//returning a variable through a function//
//return finishes a function early//
function calculate(x){
  var result = x * 10;
  return result;
}


var firstNumber = calculate(2);
console.log(firstNumber);
var secondNumber = calculate(5);
console.log(secondNumber);

//function called in a for loop//
for (var i = 0; i < 5; i++) {
  var calc= calculate(i);
  // console.log(calc);
}

//split function is splitting a string into an array.//
//Join puts string back together with blank for any white spaces.//
function removeSpaces(word){
    var newString = word.split(' ').join('_');
    return newString;
}

var username = removeSpaces('Your Name')
console.log(username);

var names = ['Sally Seashells', 'Jane Doe', 'Sam Smith', 'ted baker'];
var names2 = [];
for (var i = 0; i < names.length; i++) {
  var newName = removeSpaces(names[i]);
  names2.push(newName);
}
console.log(names);
console.log(names2);

var extraPerson = removeSpaces('Ricky Lee')
console.log(extraPerson);
