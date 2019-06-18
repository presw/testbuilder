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

    let cardDetails = {
      'Visa' : {
        'prefix' : ['4'],
        'cardLength' : [13, 16, 19]
      },
      'MasterCard': {
        'prefix' :['51', '52', '53', '54', '55'],
        'cardLength' : [16]
      },
      'Discover' : {
        'prefix' : ['6011', '644', '645', '646', '647', '648', '649', '65'],
        'cardLength' : [16, 19]
      },
      'Maestro' : {
        'prefix' : ['5018', '5020', '5038', '6304'],
        'cardLength' : [12, 13, 14, 15, 16, 17, 18, 19]
      },
      'Diner\'s Club' : {
        'prefix' : ['38', '39'],
        'cardLength' : [14]
      },
      'American Express' : {
        'prefix' : ['34', '37'],
        'cardLength' : [15]
      }

    }

    let prefix = '';
    let cardLength = cardNumber.length;

    for (let i = 0; i < 5; i++) {
      prefix += cardNumber[i];
      for (let keys in cardDetails) {
        if (cardDetails[keys]['prefix'].indexOf(prefix) > -1) {
          if (cardDetails[keys]['cardLength'].indexOf(cardLength) > -1) {
            return keys;
          }
        }
      }
    }
};
