/**
 * 1. getDepartmentNames: Returns an array of all department names.
 */
function getDepartmentNames(departments) {
  // Object.keys() extracts all the property names (keys) into an array.
  return Object.keys(departments);
}

/**
 * 2. calculateTotalPayroll: Calculates the sum of all department budgets.
 */
function calculateTotalPayroll(departments) {
  // Object.values() extracts all the property values into an array.
  const salaries = Object.values(departments);
  let total = 0;
  
  // Loop through the array of values to calculate the total
  for (let i = 0; i < salaries.length; i++) {
    total += salaries[i];
  }
  
  return total;
}

/**
 * 3. findHighestPaidDepartment: Finds which department has the largest budget.
 */
function findHighestPaidDepartment(departments) {
  // Object.entries() creates an array of arrays, where each inner array is a [key, value] pair.
  const entries = Object.entries(departments);
  
  let highestDept = "";
  let maxSalary = 0;

  // We can use a for...of loop and destructure the [key, value] pair directly
  for (const [deptName, salary] of entries) {
    if (salary > maxSalary) {
      maxSalary = salary;
      highestDept = deptName;
    }
  }
  
  return highestDept;
}

// ==========================================
// TEST SCENARIOS (Run this in your terminal)
// ==========================================

const companyBudgets = {
  Engineering: 450000,
  Marketing: 120000,
  Sales: 350000,
  HR: 90000,
  Design: 175000
};

console.log("--- Department List ---");
console.log(getDepartmentNames(companyBudgets));

console.log("\n--- Financial Breakdown ---");
console.log(`Total Company Payroll: $${calculateTotalPayroll(companyBudgets)}`);
console.log(`Highest Paid Department: ${findHighestPaidDepartment(companyBudgets)}`);
