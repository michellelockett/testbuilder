// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

/*Visa always has a prefix of 4 and a length of 13, 16, or 19.
		3 tests
Diner's Club always has a prefix of 38 or 39 and a length of 14
		2 tests
American Express always has a prefix of 34 or 37 and a length of 15
		2 tests
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
		5 tests
Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
		16 tests
Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
		32 tests
*/

function numInRange(num, range1, range2) {
	return (num >= range1 && num <= range2);
}

function getFirstDigits(cardNumber, digits) {
	return cardNumber.toString().substr(0, digits);
}

var detectNetwork = function(cardNumber) {
	var cardNumberArray = cardNumber.toString().split('');
	var length = cardNumberArray.length;
	var prefix = getFirstDigits(cardNumber, 1);
	var firstFour = getFirstDigits(cardNumber, 4);
	var firstThree = getFirstDigits(cardNumber, 3);
	var firstTwo = getFirstDigits(cardNumber, 2);

	if (numInRange(length, 12, 19)) {
		if (firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304') {
			return 'Maestro';
		} else if (prefix === '4' && (length === 13 || length === 16 || length === 19)) {
			return 'Visa';
		} else if (firstTwo === '51' || firstTwo === '52' || firstTwo === '53' || firstTwo === '54' || firstTwo === '55') {
			if (length === 16) {
				return 'MasterCard';
			}
		} else if (length === 15 && (firstTwo === '34' || firstTwo === '37')) {
			return 'American Express';
		} else if (length === 14 && (firstTwo === '38' || firstTwo === '39')) {
			return 'Diner\'s Club';
		} else if (length === 16 || length === 19) {
			if (firstFour === '6011' || numInRange(parseInt(firstThree), 644, 649) || firstTwo === '65') {
				return 'Discover';
			}
		}
	}
};




