# JavaScript Arrays Learning Journal

Welcome to the Arrays section of my JavaScript Learning Journal. This folder contains hands-on projects and labs I have built to master data manipulation, state management, and modern ES6+ array methods in JavaScript.

## Featured Lab: E-Commerce Shopping Cart Manager

**File:** `shoppingCartManager.js`

To demonstrate my understanding of managing complex data structures, I built a functional shopping cart manager using an ES6 Class. This project simulates real-world state management scenarios commonly found in web applications.

### Key Concepts & Array Methods Demonstrated:

*   **`find()`**: Implemented to efficiently check the cart array for duplicate items before adding them, allowing the system to update quantities rather than creating duplicate entries.
*   **`filter()`**: Used to seamlessly remove objects from the array without writing manual loops or mutating the original array directly.
*   **`reduce()`**: Utilized to dynamically calculate the grand total of the cart by iterating through varying quantities and prices.
*   **Object-Oriented Programming (OOP)**: Encapsulated the cart data and methods within an ES6 `class` to keep the global scope clean and modular.
*   **Data Visualization**: Utilized `console.table()` to display the array of objects as a clean, readable receipt in the terminal.

### How to Run

To run this file locally and see the terminal output, use Node.js:

```bash
node shoppingCartManager.js
