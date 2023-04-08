// Declare a variable using let inside a block scope and attempt to log its value to the console before it is
// assigned a value to demonstrate the temporal dead zone.




{
    console.log(myVariable); // Throws a ReferenceError: myVariable is not defined yet
    
    let myVariable = "Hello, world!";
    
    console.log(myVariable); // Logs "Hello, world!"
  }
  
//   it throws a ReferenceError because the variable is in the "temporal dead zone"