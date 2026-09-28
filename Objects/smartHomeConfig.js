/**
 * 1. createBaseConfig: Generates a new smart device object with default nested settings.
 */
function createBaseConfig(id, name) {
  return {
    deviceId: id,
    deviceName: name,
    settings: {
      power: "off",
      brightness: 50,
      connected: false
    }
  };
}

/**
 * 2. updateDeviceSettings: Updates the nested settings without mutating the original object.
 */
function updateDeviceSettings(device, newSettings) {
  // We use the spread operator (...) to safely merge the new settings.
  // Because 'settings' is a nested object, we have to spread it individually!
  return {
    ...device, // Copy the top-level properties (deviceId, deviceName)
    settings: {
      ...device.settings, // Copy the existing nested settings
      ...newSettings      // Overwrite only the specific settings provided
    }
  };
}

/**
 * 3. getDeviceSummary: Creates a readable status string using Object Destructuring.
 */
function getDeviceSummary(device) {
  // Destructuring allows us to extract nested properties into standalone variables
  // so we don't have to repeatedly type 'device.settings.power', etc.
  const { deviceName, settings: { power, brightness, connected } } = device;
  
  const status = connected ? "Online" : "Offline";
  
  // Return a template literal summarizing the object
  return `${deviceName} is ${status}. Power: ${power.toUpperCase()}, Brightness: ${brightness}%`;
}

// ==========================================
// TEST SCENARIOS (Run this in your terminal)
// ==========================================

// 1. Create a new device
const livingRoomLamp = createBaseConfig(101, "Living Room Lamp");
console.log("--- Initial Config ---");
console.log(livingRoomLamp);

// 2. Update the device (turning it on, raising brightness, and connecting it)
const updatedLamp = updateDeviceSettings(livingRoomLamp, { 
  power: "on", 
  brightness: 80, 
  connected: true 
});

console.log("\n--- Updated Config ---");
console.log(updatedLamp);

// 3. Print the formatted summary
console.log("\n--- Device Summary ---");
console.log(getDeviceSummary(updatedLamp));
