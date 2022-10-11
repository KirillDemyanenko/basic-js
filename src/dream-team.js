const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let nameOfTeam = [];
        members.forEach(function (item) {
            if (typeof (item) === 'string' && item.trimStart().length > 0) {
                nameOfTeam.push(item.toUpperCase().trimStart()[0])
            }
        })
        if (nameOfTeam.length > 0) {
            return nameOfTeam.sort().join("")
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports = {
  createDreamTeam
};
