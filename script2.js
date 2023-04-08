// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
// Use function expressions to define the function and call the function before it is declared to demonstrate
// hoisting



const result = multiplyNumbers(3, 4); // calling the function before it is declared
console.log(result);  // this will give error because hoisting doesn't work with function expression

const multiplyNumbers = function(a, b) {
  return a * b;
};



// const multiplyNumber = function(a, b) {
//     return a * b;
//   };
  
//  const output = multiplyNumber(3, 4); // calling the function after it is declared
//  console.log(output);  this will give the output