/**
 * Smart Inventory Manager
 * Focus: Array validation (.some, .every) and targeted mutation (.findIndex, .splice)
 */

// 1. Initial State: An array of product objects
const inventory = [
  { id: 101, name: "Wireless Mouse", stock: 15, category: "Electronics" },
  { id: 102, name: "Mechanical Keyboard", stock: 0, category: "Electronics" },
  { id: 103, name: "Desk Mat", stock: 45, category: "Accessories" },
  { id: 104, name: "USB-C Hub", stock: 5, category: "Electronics" }
];

console.log("--- Initial Inventory ---");
console.table(inventory);

// 2. Using .some() to check if ANY items need immediate restocking
// Returns true if at least one item meets the condition
const needsRestock = inventory.some(item => item.stock === 0);
console.log(`\nUrgent Restock Needed: ${needsRestock ? "YES" : "NO"}`);

// 3. Using .every() to check if ALL items are valid
// Returns true ONLY if every single item meets the condition
const isDataValid = inventory.every(item => item.id && item.name && item.stock >= 0);
console.log(`Inventory Data is Valid: ${isDataValid ? "YES" : "NO"}`);

// 4. Using .findIndex() and .splice() to remove a discontinued item
// Let's say item 103 (Desk Mat) is discontinued
console.log("\n--- Discontinuing Item 103 ---");

const indexToRemove = inventory.findIndex(item => item.id === 103);

if (indexToRemove !== -1) {
  // .splice() mutates the original array: (starting index, how many to remove)
  const removedItem = inventory.splice(indexToRemove, 1);
  console.log(`Successfully removed: ${removedItem[0].name}`);
} else {
  console.log("Item not found in inventory.");
}

console.log("\n--- Updated Inventory ---");
console.table(inventory);
