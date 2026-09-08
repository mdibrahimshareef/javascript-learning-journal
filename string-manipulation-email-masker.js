/**
 * Masks the local part (username) of an email address.
 * Keeps the first and last character of the username visible,
 * replacing the characters in between with asterisks (*).
 *
 * @param {string} email - The full email address to mask.
 * @returns {string} The masked email address.
 */
function maskEmail(email) {
  // Find where the username ends and the domain begins
  const atIndex = email.indexOf("@");
  
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex); // Retains '@' and the domain

  // Extract edge characters of the username
  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  // Calculate required asterisks and generate mask
  const maskedLength = username.length - 2;
  const mask = "*".repeat(maskedLength);

  return `${firstChar}${mask}${lastChar}${domain}`;
}

// Example usage
const email = "apple.pie@example.com";
console.log(maskEmail(email));
