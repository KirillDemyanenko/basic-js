const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    let approximateAgeOfTheSample = 0;
    if (typeof (sampleActivity) === 'string' && parseFloat(sampleActivity, 10) > 0) {
        approximateAgeOfTheSample = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity, 10)) / (Math.log(2) / HALF_LIFE_PERIOD));
        if (typeof (approximateAgeOfTheSample) === 'number' && (approximateAgeOfTheSample > 0)) {
            return approximateAgeOfTheSample
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports = {
  dateSample
};
