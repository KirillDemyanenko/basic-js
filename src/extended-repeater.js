const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (!options.hasOwnProperty('separator')) {
        if (options.hasOwnProperty('repeatTimes') && Object.keys(options).length >= 1) {
            options.separator = '+';
        } else {
            options.separator = '';
        }
    }
    if (!options.hasOwnProperty('repeatTimes')) {
        options.repeatTimes = 1;
    }
    if (!options.hasOwnProperty('addition')) {
        options.addition = '';
    }
    if (!options.hasOwnProperty('additionRepeatTimes')) {
        options.additionRepeatTimes = 1;
    }
    if (!options.hasOwnProperty('additionSeparator')) {
       if ((options.addition).length !== 0) {
          options.additionSeparator = '|';
       } else {
          options.additionSeparator = '';
       }
    }
    let additionString = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
    let result = (str + additionString.substring(0, additionString.length - options.additionSeparator.length) + options.separator).repeat(options.repeatTimes)
    return result.substring(0, result.length - options.separator.length)
}

module.exports = {
  repeater
};
