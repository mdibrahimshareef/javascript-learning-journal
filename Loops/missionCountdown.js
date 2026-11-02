// 1. The 'for' loop: Best when you know exactly how many times to repeat something.
console.log("--- Initiating Launch Sequence ---");

// A standard for loop has 3 parts: setup (let i = 5), condition (i > 0), and update (i--)
for (let i = 5; i > 0; i--) {
  console.log(`T-Minus: ${i}...`);
}
console.log("Liftoff!");

// 2. The 'while' loop: Best when repeating an action until a specific condition changes.
console.log("--- Running System Checks ---");
let systemCheckComplete = false;
let checkNumber = 1;

while (systemCheckComplete === false) {
  console.log(`Performing automated check #${checkNumber}...`);
  
  if (checkNumber === 3) {
    console.log("All systems nominal. Checks complete.");
    systemCheckComplete = true; // This breaks the loop
  }
  
  checkNumber++; // Increase the check number by 1 each time
}
