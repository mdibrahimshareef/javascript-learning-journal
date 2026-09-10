// Step 1: Create a global variable to keep track of the running count.
// We use 'let' because this number will change as cards are drawn.
let count = 0;

function cardCounter(card) {
  // Step 2: Update the count based on the card received.
  // In Blackjack, lower cards favor the player (+1),
  // while high cards favor the dealer (-1).
  switch (card) {
    // If card is 2, 3, 4, 5, or 6 -> Add 1 to count
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    // If card is 10, 'J', 'Q', 'K', or 'A' -> Subtract 1 from count
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;

    // Cards 7, 8, and 9 don't change the score, so we do nothing here.
    default:
      break;
  }

  // Step 3: Decide whether the player should "Bet" or "Hold".
  // If count is greater than 0, we Bet.
  // If count is 0 or negative, we Hold.
  let decision = "";
  if (count > 0) {
    decision = "Bet";
  } else {
    decision = "Hold";
  }

  // Step 4: Return the count and decision separated by a space (e.g., "5 Bet" or "-1 Hold")
  return count + " " + decision;
}
