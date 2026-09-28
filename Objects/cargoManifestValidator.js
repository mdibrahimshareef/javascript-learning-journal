// 1. normalizeUnits: Converts weight to kilograms if it is currently in pounds.
function normalizeUnits(manifest) {
  // We use the spread operator (...) to create a brand new copy of the object.
  // This ensures we do not mutate (change) the original manifest object.
  let newManifest = { ...manifest };

  // Check if the unit is in pounds ("lb")
  if (newManifest.unit === "lb") {
    // Convert weight using the 1 lb = 0.45 kg ratio
    newManifest.weight = newManifest.weight * 0.45;
    // Update the unit string
    newManifest.unit = "kg";
  }

  // If the unit was already "kg", the object remains unchanged.
  return newManifest;
}

// 2. validateManifest: Checks if all properties exist and hold valid data types.
function validateManifest(manifest) {
  // Start with an empty object to hold any errors we find.
  let errors = {};

  // Validate containerId: Must exist, be a number, be an integer, and be positive.
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  // Validate destination: Must exist, be a string, and not be empty after trimming spaces.
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  // Validate weight: Must exist, be a number, not be NaN, and be positive.
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  // Validate unit: Must exist and strictly be either "kg" or "lb".
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // Validate hazmat: Must exist and strictly be a boolean (true or false).
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  // Return the errors object. If no errors were found, it returns {}.
  return errors;
}

// 3. processManifest: Logs the final results based on whether the manifest is valid.
function processManifest(manifest) {
  // First, check for validation errors
  let errors = validateManifest(manifest);
  
  // Object.keys() returns an array of the object's properties. 
  // If the length is 0, the errors object is empty, meaning the manifest is valid!
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    
    // Normalize the valid manifest so we can guarantee the weight is in kg
    let normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
    
  } else {
    // If the errors object has keys, the manifest is invalid.
    console.log(`Validation error: ${manifest.containerId}`);
    // Log the actual errors object returned from validateManifest
    console.log(errors);
  }
}
