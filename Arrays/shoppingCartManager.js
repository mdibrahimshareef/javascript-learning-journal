class ShoppingCart {
  constructor() {
    // Initialize an empty array to hold our cart items
    this.cart = [];
  }

  /**
   * Adds an item to the cart or updates the quantity if it already exists.
   */
  addItem(id, name, price, quantity = 1) {
    // Check if the item is already in the cart using the .find() method
    const existingItem = this.cart.find(item => item.id === id);

    if (existingItem) {
      // If it exists, just increase the quantity
      existingItem.quantity += quantity;
      console.log(`Updated ${name} quantity to ${existingItem.quantity}.`);
    } else {
      // If it's new, push a new object into our cart array
      this.cart.push({ id, name, price, quantity });
      console.log(`Added ${name} to the cart.`);
    }
  }

  /**
   * Removes an item from the cart entirely based on its ID.
   */
  removeItem(id) {
    // .filter() creates a new array containing only items that DO NOT match the ID
    const initialLength = this.cart.length;
    this.cart = this.cart.filter(item => item.id !== id);
    
    if (this.cart.length < initialLength) {
      console.log(`Item with ID ${id} was removed.`);
    } else {
      console.log(`Item with ID ${id} not found in cart.`);
    }
  }

  /**
   * Calculates the total price of all items in the cart.
   */
  calculateTotal() {
    // .reduce() loops through the array and accumulates a single total value
    const total = this.cart.reduce((accumulator, item) => {
      return accumulator + (item.price * item.quantity);
    }, 0); // 0 is our starting total

    return total;
  }

  /**
   * Prints a clean summary of the cart to the console.
   */
  printReceipt() {
    console.log("\n--- Your Receipt ---");
    // console.table is a great trick to display arrays of objects beautifully!
    console.table(this.cart);
    console.log(`Grand Total: $${this.calculateTotal().toFixed(2)}\n`);
  }
}

// ==========================================
// TEST SCENARIOS (Run this in your terminal)
// ==========================================

const myCart = new ShoppingCart();

// 1. Add some items
myCart.addItem(1, "Wireless Mouse", 25.99, 1);
myCart.addItem(2, "Mechanical Keyboard", 89.50, 1);
myCart.addItem(3, "USB-C Cable", 12.00, 2);

// 2. Add an item that already exists to test the update logic
myCart.addItem(1, "Wireless Mouse", 25.99, 1); 

// 3. Remove an item
myCart.removeItem(2);

// 4. Print the final receipt
myCart.printReceipt();
