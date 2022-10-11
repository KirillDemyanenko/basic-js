const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countOfCatsFound = 0;
  matrix.forEach(function(item, i, matrix) {
      for (let x of item) {
          if (x === '^^') {
            countOfCatsFound += 1;
          }
      }
  })
  return countOfCatsFound
}

module.exports = {
  countCats
};
