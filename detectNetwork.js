// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.


    let cardName = '';
    let cardLength = cardNumber.length;
    let prefix = cardNumber.substring(0,2);
    if (cardLength === 15 && (prefix === '34' || prefix === '37')) {
      cardName = 'American Express'
    } else if (cardLength === 14) {
      if (prefix === '38' || prefix === '39') {
        cardName = 'Diner\'s Club'
      }
    } else if (cardNumber[0] === '4') {
      if (cardLength === 13 || cardLength === 16 || cardLength === 19) {
        cardName = 'Visa'
      }
    } else if (cardLength === 16 && prefix > '50' && prefix < '56') {
      cardName = 'MasterCard'
    } else if () {

    }
    return cardName;
};
