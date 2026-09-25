## Booleans and Numbers
### This section explores core JavaScript data types, focusing on mathematical precision, type coercion, and logic gates.

### 01. Magic Fortune Teller

File: `fortune-teller.js`
A fun, interactive script that generates random fortunes and predictions. This project acts as a digital "Magic 8-Ball," demonstrating how to handle randomization and conditional logic to produce varied outputs.

**Concepts Covered:**
* **Randomization:** Utilizing `Math.random()` to generate floating-point numbers between 0 and 1.
* **Rounding & Integers:** Using `Math.floor()` to scale random decimals into usable whole numbers (array indices or switch cases).
* **Control Flow:** Evaluating the generated numbers using `if/else` statements or `switch` cases to determine the final output.
* **Boolean Evaluation:** Checking conditions (like whether a generated number is even or odd using the `%` modulo operator) to trigger different types of fortunes.

### 02 - Digital Wallet & Transaction Validator

File: `wallet-validator.js`
A simulation of a digital wallet that validates withdrawal requests, handles floating-point math, and uses boolean flags to authorize transactions.
**Concepts Covered:**
* **Number Parsing:** Using `parseFloat()` to convert string inputs into usable numbers.
* **Validation:** Implementing `Number.isNaN()` to prevent mathematical errors.
* **Precision:** Utilizing `.toFixed()` to format currency and manage floating-point quirks.
* **Boolean Logic:** Using logical AND (`&&`), OR (`||`), and NOT (`!`) operators to determine if a transaction should be authorized based on multiple state flags.
