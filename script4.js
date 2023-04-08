// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting




// Using var
{
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
  }
  
  // Using let and const
  {
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    console.log(y); // 10
  
    console.log(z); // ReferenceError: Cannot access 'z' before initialization
    const z = 15;
    console.log(z); // 15
  }
  