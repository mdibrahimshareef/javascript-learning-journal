function golfScore(par, strokes) {
  // 1. Check for a Hole-in-one first!
  if (strokes === 1) {
    return "Hole-in-one!";
  } 
  // 2. Check if strokes are 2 or more under par
  else if (strokes <= par - 2) {
    return "Eagle";
  } 
  // 3. Check if strokes are exactly 1 under par
  else if (strokes === par - 1) {
    return "Birdie";
  } 
  // 4. Check if strokes are exactly equal to par
  else if (strokes === par) {
    return "Par";
  } 
  // 5. Check if strokes are exactly 1 over par
  else if (strokes === par + 1) {
    return "Bogey";
  } 
  // 6. Check if strokes are exactly 2 over par
  else if (strokes === par + 2) {
    return "Double Bogey";
  } 
  // 7. If none of the above are true, it must be 3 or more over par
  else {
    return "Go Home!";
  }
}

// Test cases to verify the code works:
console.log(golfScore(4, 1)); // Expected: "Hole-in-one!"
console.log(golfScore(4, 2)); // Expected: "Eagle"
console.log(golfScore(5, 9)); // Expected: "Go Home!"
