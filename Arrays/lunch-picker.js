/**
 * Lunch Picker Program
 * This program manages a list of lunch options using JavaScript Array methods.
 */

// 1. Initialize an empty array to store the lunch items.
// We use 'let' instead of 'const' if we were assigning a completely new array, 
// though with array methods, 'const' is generally preferred. For this lab's 
// specific requirement of assigning an empty array, 'let' works perfectly.
let lunches = [];

/**
 * Adds an item to the end of the array.
 * Uses the built-in Array.prototype.push() method.
 */
function addLunchToEnd(menu, item) {
  // .push() adds one or more elements to the end of an array
  menu.push(item);
  // Template literals (backticks) are used for clean string interpolation
  console.log(`${item} added to the end of the lunch menu.`);
  return menu;
}

/**
 * Adds an item to the beginning of the array.
 * Uses the built-in Array.prototype.unshift() method.
 */
function addLunchToStart(menu, item) {
  // .unshift() adds one or more elements to the start of an array
  menu.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return menu;
}

/**
 * Removes the last item from the array.
 * Uses the built-in Array.prototype.pop() method.
 */
function removeLastLunch(menu) {
  // Edge case handling: Check if the array is already empty
  if (menu.length === 0) {
    console.log("No lunches to remove.");
    return menu;
  }
  
  // .pop() removes the last element and returns that element
  const removedItem = menu.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return menu;
}

/**
 * Removes the first item from the array.
 * Uses the built-in Array.prototype.shift() method.
 */
function removeFirstLunch(menu) {
  // Edge case handling: Prevent attempting to remove from an empty array
  if (menu.length === 0) {
    console.log("No lunches to remove.");
    return menu;
  }

  // .shift() removes the first element and shifts all other elements down an index
  const removedItem = menu.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return menu;
}

/**
 * Selects and logs a random lunch from the array.
 * Does not mutate (change) the original array.
 */
function getRandomLunch(menu) {
  // Edge case handling
  if (menu.length === 0) {
    console.log("No lunches available.");
    return; // Exit the function early
  }

  // Math.random() generates a decimal between 0 and 0.999...
  // Multiplying by menu.length gives a number between 0 and the array's length.
  // Math.floor() rounds down to the nearest whole number to get a valid array index.
  const randomIndex = Math.floor(Math.random() * menu.length);
  console.log(`Randomly selected lunch: ${menu[randomIndex]}`);
}

/**
 * Displays all current items in the lunch menu.
 */
function showLunchMenu(menu) {
  if (menu.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  // .join(', ') takes all elements in the array and combines them into a single 
  // string, separated by a comma and a space.
  console.log(`Menu items: ${menu.join(', ')}`);
}
