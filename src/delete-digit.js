const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let arrFromNumber = n.toString().split("")
  for (let i = 0; i < arrFromNumber.length; i++) {
    let testNumberArray = arrFromNumber.filter(function (item, index) {return index != i})
      if (maxNumber < Number(testNumberArray.join(""))) {
          maxNumber = Number(testNumberArray.join(""))
      }
  }
  return maxNumber
}

module.exports = {
  deleteDigit
};
