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
### How to Run

To run this file locally and see the terminal output, use Node.js in your terminal:

```bash
node cargoManifestValidator.js
