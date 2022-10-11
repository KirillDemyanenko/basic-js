const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {return ''}
  let encodingString = '';
  let previosSymbol = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === previosSymbol) {
      count++;
    } else {
      if (count === 1) {
        encodingString += previosSymbol;
      } else {
        encodingString += count.toString() + previosSymbol;
      }
      previosSymbol = str[i];
      count = 1;
    }
  }
  if (count === 1) {
    encodingString += previosSymbol;
  } else {
    encodingString += count.toString() + previosSymbol;
  }
  return encodingString;
}

module.exports = {
  encodeLine
};
