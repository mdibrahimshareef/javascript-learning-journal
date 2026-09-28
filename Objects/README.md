# JavaScript Objects



### 1. Cargo Manifest Validator
**File:** `cargoManifestValidator.js`

A utility program that processes shipping cargo manifests by validating complex data structures and normalizing weights.
* **Concepts Demonstrated:** 
  * **Non-destructive Data Manipulation:** Using the spread operator (`...`) to create copies of objects to prevent mutating original data.
  * **Object Property Validation:** Validating distinct property types using `typeof`, `Number.isInteger()`, and `Number.isNaN()`.
  * **String Manipulation:** Utilizing `.trim()` to clean up string properties.
  * **Dynamic Object Checking:** Using `Object.keys()` to determine if an object is empty.

---

### How to Run

To run this file locally and see the terminal output, use Node.js in your terminal:

```bash
node cargoManifestValidator.js
