// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
    let populateDetails = function(company, keyName, start, end) {
      for (let i = start; i <= end; i++) {
        cardDetails[company][keyName].push(i.toString());
      }
    }

    let cardGenerator = function(prefix, length) {
      let card = prefix;
      card = card.toString();
      card = card.padEnd(length, 0);
      return card;
    }

    let cardDetails = {
      getDetails : function(cardName, detailName) {
        let prefixArray = this[cardName][detailName];
        let outputArray = [];

        for (let i = 0; i < prefixArray.length; i++) {
          let start = prefixArray[i][0];
          let stop = prefixArray[i][0];
          if (prefixArray[i].length !== 1) {
            stop = prefixArray[i][1];
          }

          for (start; start <= stop; start++) {
           outputArray.push(start);
          }
        }
        return outputArray;
      },

      'Visa' : {
        'prefix' : [[4]],
        'cardLength' : [[13], [16], [19]]
      },
      'MasterCard': {
        'prefix' :[[51, 55]],
        'cardLength' : [[16]]
      },
      'Discover' : {
        'prefix' : [[6011], [644, 649], [65]],
        'cardLength' : [[16], [19]]
      },
      'Maestro' : {
        'prefix' : [[5018], [5020], [5038], [6304]],
        'cardLength' : [[12, 19]]
      },
      'Diner\'s Club' : {
        'prefix' : [[38], [39]],
        'cardLength' : [[14]]
      },
      'American Express' : {
        'prefix' : [[34], [37]],
        'cardLength' : [[15]]
      },
      'China UnionPay' : {
        'prefix' : [[622126, 622925], [624, 626], [6282, 6288]],
        'cardLength' : [[16, 19]]
      },
      'Switch' : {
        'prefix' : [[4903], [4905], [4911], [4936], [564182], [633110], [6333], [6759]],
        'cardLength' : [[16], [18, 19]]
      }
    }

var detectNetwork = function(cardNumber) {

  let prefix = [];
  let cardLength = cardNumber.length;
  let checkCardLength = false;

  let cardArray = cardNumber.split('');

  for (let i = 7; i >= 0; i--) {
    cardArray = cardArray.slice(0, i);

    let prefix = cardArray.join('');
    prefix = parseInt(prefix);

    for (let keys in cardDetails) {
      checkCardLength = false;
      if (typeof cardDetails[keys] !== 'function') {
        let cardIndex = cardDetails[keys]['prefix'];

        // "MasterCard"
        for (let i = 0; i < cardIndex.length; i++) {
          let start = cardIndex[i][0];
          let stop = cardIndex[i][0];

          if (checkCardLength === true) {
            break;
          }

          if (cardIndex[i].length !== 1) {
            stop = cardIndex[i][1];
          }

          for (start; start <= stop; start++) {
            if (start === prefix) {
              checkCardLength = true;
              break;
            }
          }
        }

        if (checkCardLength) {
          let lengthIndex = cardDetails[keys]['cardLength'];
          for (let i = 0; i < lengthIndex.length; i++) {
            let start = lengthIndex[i][0];
            let stop = lengthIndex[i][0];

            if (lengthIndex[i].length !== 1) {
              stop = lengthIndex[i][1];
            }

            for (start; start <= stop; start++) {
              if (start === cardLength) {
                return keys;
              }
            }
          }
        }
      }
    }
  }
};
