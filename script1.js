// Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. call the
// function before it is declared to demonstrate hoisting



let result = addNumbers(2, 3);
console.log(result);

function addNumbers(a, b) {
  return a + b;
}



// Here's the same implementation of the addNumbers function without hoisting, using a function expression:

// const addNumbers = function(a, b) {
//     return a + b;
//   }
  
//   addNumbers(2, 3);
  