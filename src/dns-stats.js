const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let resultMap = new Map();
    for (let i = 0; i < domains.length; i++) {
        let slittedString = domains[i].split('.');
        let domainString = '';
        for (let j = slittedString.length - 1; j > 0; j--) {
            domainString += '.' + slittedString[j]
            if (resultMap.has(domainString)) {
                resultMap.set(domainString, resultMap.get(domainString) + 1)
            } else {
                resultMap.set(domainString, 1)
            }
        }
        domainString += '.' + slittedString[0]
        if (resultMap.has(domainString)) {
                resultMap.set(domainString, resultMap.get(domainString) + 1)
        } else {
                resultMap.set(domainString, 1)
        }
    }
    return Object.fromEntries(resultMap)
}

module.exports = {
  getDNSStats
};
