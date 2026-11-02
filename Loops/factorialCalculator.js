// 1. Declare a variable 'num' and assign it a number between 1 and 20.
let num = 5; // Using 5 as an example (5! = 120), but you can change this!

// 2. Create the factorialCalculator function that takes a number as an argument.
function factorialCalculator(num) {
  // 3. Initialize a 'result' variable to 1. 
  // (We start at 1 because if we started at 0, multiplying would always equal 0)
  let result = 1;
  
  // Loop from 1 up to the input number (inclusive).
  for (let i = 1; i <= num; i++) {
    // Multiply the current result by the loop counter 'i' and update the result variable.
    result = result * i; 
  }
  
  // Return the final calculated factorial.
  return result;
}

// 4. Call the function with 'num' as the argument and assign it to 'factorial'.
let factorial = factorialCalculator(num);

// 5. Store the final output in a formatted string using Template Literals.
const resultMsg = `Factorial of ${num} is ${factorial}`;

// 6. Output the final message to the console.
console.log(resultMsg);
