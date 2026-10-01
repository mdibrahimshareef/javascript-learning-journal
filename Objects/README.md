# JavaScript Objects Learning Journal

Welcome to the Objects section of my JavaScript Learning Journal. This folder contains hands-on projects and labs where I practice creating, validating, and manipulating JavaScript objects without mutating original data.

## Projects in this Directory

### 1. Cargo Manifest Validator
**File:** `cargoManifestValidator.js`

A utility program that processes shipping cargo manifests by validating complex data structures and normalizing weights.
* **Concepts Demonstrated:** 
  * **Non-destructive Data Manipulation:** Using the spread operator (`...`) to create copies of objects to prevent mutating original data.
  * **Object Property Validation:** Validating distinct property types using `typeof`, `Number.isInteger()`, and `Number.isNaN()`.
  * **String Manipulation:** Utilizing `.trim()` to clean up string properties.
  * **Dynamic Object Checking:** Using `Object.keys()` to determine if an object is empty.

---
### 2. Smart Home Device Configurator
**File:** `smartHomeConfig.js`

A configuration utility that creates, updates, and summarizes smart home devices. This project demonstrates how to safely manipulate deeply nested data structures.
* **Concepts Demonstrated:** 
  * **Nested Objects:** Structuring complex data with objects inside of objects.
  * **Object Destructuring:** Unpacking nested properties into distinct variables for cleaner, more readable code.
  * **Advanced Spread Operator:** Using `...` at multiple levels to merge updates into nested objects without mutating the original dataset.
    
---
### 3. Company Payroll Analyzer
**File:** `payrollAnalyzer.js`

A data analysis utility that dynamically iterates through company department budgets to calculate totals and find the highest expenditures.
* **Concepts Demonstrated:** 
  * **Dynamic Object Iteration:** Processing object data without hardcoding specific property names.
  * **Static Object Methods:** Utilizing `Object.keys()` to extract property names, `Object.values()` to extract pure data for calculations, and `Object.entries()` to evaluate keys and values simultaneously.
  * **Array/Object Destructuring:** Unpacking `[key, value]` pairs inside a `for...of` loop for highly readable data evaluation.
 
 ---
 ### 4. Bank Account Manager
**File:** `bankAccountManager.js`

An interactive object demonstrating state management by combining data properties and behavior methods within a single structure.
* **Concepts Demonstrated:** 
  * **Object Methods:** Attaching functions directly to objects to create encapsulated behaviors.
  * **The `this` Keyword:** Utilizing `this` to access and modify an object's internal state dynamically.
  * **Data Encapsulation:** Grouping related data (balance, history) and the rules for modifying that data (deposit, withdraw) into one cohesive unit.
 
 ---
 ### 5. RPG Character Factory
**File:** `rpgCharacterFactory.js`

An object generator that dynamically creates independent game characters. This project demonstrates how to instantiate multiple objects with identical structures but unique states, while protecting sensitive core data.
* **Concepts Demonstrated:** 
  * **Factory Functions:** Utilizing a function to dynamically construct and return newly formatted objects, simulating basic class instantiation.
  * **Object Immutability:** Implementing `Object.freeze()` to lock down specific nested data elements, preventing accidental mutation or intentional tampering.
  * **Independent State Management:** Managing independent arrays (`inventory`) and primitive values (`health`) across multiple generated objects simultaneously.
### How to Run

To run this file locally and see the terminal output, use Node.js in your terminal:

```bash
node cargoManifestValidator.js
