// The bankAccount object stores both its data (properties) and its behaviors (methods).
const bankAccount = {
  accountHolder: "Alex Developer",
  balance: 0,
  transactionHistory: [],

  /**
   * 1. deposit: Adds money to the balance and records the transaction.
   */
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than zero.");
      return;
    }
    // We use the 'this' keyword to access the object's own properties
    this.balance += amount;
    this.transactionHistory.push(`Deposited $${amount}`);
    console.log(`Successfully deposited $${amount}.`);
  },

  /**
   * 2. withdraw: Removes money if there are sufficient funds.
   */
  withdraw(amount) {
    // Check for sufficient funds to prevent overdrafts
    if (amount > this.balance) {
      console.log(`Insufficient funds. Cannot withdraw $${amount}.`);
      return;
    }
    this.balance -= amount;
    this.transactionHistory.push(`Withdrew $${amount}`);
    console.log(`Successfully withdrew $${amount}.`);
  },

  /**
   * 3. getSummary: Returns a formatted string of the account status.
   */
  getSummary() {
    console.log(`\n--- Account Summary for ${this.accountHolder} ---`);
    console.log(`Current Balance: $${this.balance}`);
    console.log("Recent Transactions:");
    
    // Check if there are any transactions
    if (this.transactionHistory.length === 0) {
      console.log("No transactions yet.");
    } else {
      // Loop through the history array and print each transaction
      for (let i = 0; i < this.transactionHistory.length; i++) {
        console.log(`- ${this.transactionHistory[i]}`);
      }
    }
    console.log("-----------------------------------\n");
  }
};

// ==========================================
// TEST SCENARIOS (Run this in your terminal)
// ==========================================

// 1. View initial empty account
bankAccount.getSummary();

// 2. Make some deposits
bankAccount.deposit(500);
bankAccount.deposit(250);

// 3. Make a valid withdrawal
bankAccount.withdraw(100);

// 4. Attempt an invalid withdrawal (overdraft)
bankAccount.withdraw(2000);

// 5. View final account summary
bankAccount.getSummary();
