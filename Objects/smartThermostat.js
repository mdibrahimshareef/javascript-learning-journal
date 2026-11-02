// A class acts as a blueprint for creating objects
class SmartThermostat {
  // 1. Private Property: The '#' symbol makes this variable strictly private.
  // It cannot be viewed or changed from outside this class blueprint.
  #temperature;

  constructor(ownerName, initialTemp) {
    this.owner = ownerName; // Public property (anyone can see/change this)
    this.#temperature = initialTemp; // Private property
  }

  // 2. Getter: Allows the outside world to safely "read" the private data.
  // You use it like a normal property, not a function (e.g., thermostat.temperature)
  get temperature() {
    return `${this.#temperature}°F`;
  }

  // 3. Setter: Intercepts anyone trying to change the temperature.
  // This allows us to run validation rules before updating the private data!
  set temperature(newTemp) {
    if (typeof newTemp !== "number") {
      console.log("Error: Temperature must be a number.");
      return; // Stop the code here
    }
    
    if (newTemp < 50 || newTemp > 90) {
      console.log(`Error: ${newTemp}°F is unsafe. Keep between 50°F and 90°F.`);
      return; // Stop the code here
    }

    // If it passes the checks, update the hidden data
    this.#temperature = newTemp;
    console.log(`Success: ${this.owner}'s thermostat set to ${this.#temperature}°F.`);
  }
}

// ==========================================
// TEST SCENARIOS (Run this in your terminal)
// ==========================================

// 1. Create a new thermostat object
const livingRoom = new SmartThermostat("Alex", 72);

// 2. Test the Getter (Notice we don't use parentheses!)
console.log("--- Reading Data ---");
console.log(`Current Temp: ${livingRoom.temperature}`);

// 3. Test the Setter with INVALID data
console.log("\n--- Attempting Bad Updates ---");
livingRoom.temperature = "Hot"; // Fails the number check
livingRoom.temperature = 105;   // Fails the safety range check

// 4. Test the Setter with VALID data
console.log("\n--- Attempting Good Update ---");
livingRoom.temperature = 75;    // Passes all checks!

// 5. Prove the data is truly private
console.log("\n--- Privacy Check ---");
// Trying to access the private variable directly results in 'undefined' or an error
console.log(livingRoom.#temperature);
