/**
 * JavaScript Learning Journal - Booleans & Numbers
 * Project: Digital Wallet & Transaction Validator
 */

// 1. Initial State Variables (Booleans and Numbers)
let accountBalance = 1050.75;
let isAccountActive = true;
let hasOverdraftProtection = false;

console.log("--- Initial Account Status ---");
console.log(`Balance: $${accountBalance}`);
console.log(`Active: ${isAccountActive}`);

// 2. Core Logic Function
function processWithdrawal(amountInput) {
  console.log(`\n--- Attempting Withdrawal: '${amountInput}' ---`);

  // Type Coercion: Convert input (which might be a string) to a decimal number
  const amount = parseFloat(amountInput);

  // Validation: Check if the input is actually a valid number greater than zero
  if (Number.isNaN(amount) || amount <= 0) {
    console.log("Error: Invalid withdrawal amount.");
    return false; // Returns a boolean flag indicating failure
  }

  // Boolean Logic: Determine if the user has enough money
  const canCoverCost = amount <= accountBalance;
  
  // Authorization: Account must be active AND they must have funds (OR overdraft protection)
  const isAuthorized = isAccountActive && (canCoverCost || hasOverdraftProtection);

  // Execution based on boolean flag
  if (!isAuthorized) {
    console.log("Transaction Declined: Insufficient funds or inactive account.");
    return false; 
  }

  // Number Math: Deduct the amount
  accountBalance = accountBalance - amount;
  
  console.log("Transaction Approved!");
  
  // Precision: Use .toFixed(2) to force exactly two decimal places for currency
  console.log(`New Balance: $${accountBalance.toFixed(2)}`);
  
  return true; // Returns a boolean flag indicating success
}

// 3. Test Cases to prove the logic
processWithdrawal("150.25");  // Valid standard transaction
processWithdrawal("invalid"); // Fails the NaN check
processWithdrawal("1000.00"); // Valid, tests the upper limit of the balance
processWithdrawal("9999.99"); // Fails the authorization boolean logic
