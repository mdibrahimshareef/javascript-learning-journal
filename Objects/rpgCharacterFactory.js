/**
 * 1. Factory Function: A function that creates and returns a brand new object every time it is called.
 */
function createCharacter(characterName, characterClass) {
  
  // 2. Object.freeze(): We lock down sensitive base stats. 
  // Once an object is frozen, its properties can NEVER be changed, added, or deleted.
  const coreIdentity = Object.freeze({
    id: Math.floor(Math.random() * 10000), // Generates a random ID
    origin: "Kingdom of Code"
  });

  // 3. Return the newly constructed object
  return {
    name: characterName,
    role: characterClass,
    health: 100,
    inventory: [],
    
    // Method to safely read the frozen data
    getIdentity() {
      return `${this.name} hails from the ${coreIdentity.origin}. (Account ID: ${coreIdentity.id})`;
    },

    // Method to mutate the object's internal state
    lootItem(item) {
      this.inventory.push(item);
      console.log(`${this.name} looted: ${item}!`);
    },

    takeDamage(amount) {
      this.health -= amount;
      if (this.health < 0) this.health = 0; // Prevent negative health
      console.log(`${this.name} took ${amount} damage. Health: ${this.health}/100`);
    },

    // Method to summarize the character
    getProfile() {
      console.log(`\n--- ${this.name}'s Profile ---`);
      console.log(`Role: ${this.role}`);
      console.log(`Health: ${this.health}`);
      
      // Use a ternary operator to check if the inventory has items
      const bagContents = this.inventory.length > 0 ? this.inventory.join(", ") : "Empty";
      console.log(`Inventory: ${bagContents}`);
      console.log(this.getIdentity());
      console.log("---------------------------\n");
    }
  };
}

// ==========================================
// TEST SCENARIOS (Run this in your terminal)
// ==========================================

// 1. Generate two distinct character objects using our Factory Function
const hero1 = createCharacter("Arthur", "Knight");
const hero2 = createCharacter("Merlin", "Mage");

// 2. Interact with Hero 1
hero1.lootItem("Iron Sword");
hero1.lootItem("Health Potion");
hero1.takeDamage(30);
hero1.getProfile();

// 3. Interact with Hero 2
hero2.lootItem("Magic Staff");
hero2.getProfile();

// 4. Test the Immutability (This will fail silently, or throw an error in Strict Mode)
// We attempt to cheat by changing the frozen core identity, but it won't work!
hero1.coreIdentity = { origin: "Hacker Realm" }; 
console.log("Attempted to hack Arthur's origin...");
console.log(hero1.getIdentity()); // It remains "Kingdom of Code"
