// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the
// function using the var keyword and log its value to the console before it is assigned a value to demonstrate
// variable hoisting




function sumNumbers(a, b) {
    console.log(myVar); // logs 'undefined' due to variable hoisting bcz hoisting only moves variable at top but not its value thats why it is undefined
    var myVar = a + b;
    console.log(myVar); // logs the actual sum of a and b
    return myVar;
  }
  
  sumNumbers(3, 5); // output: undefined 8
  