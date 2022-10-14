const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(typeOfMachine = true) {
        this.machineType = typeOfMachine;
    }

    encrypt(message, key) {
        if (!(arguments.length !== 2 || typeof arguments[0] === 'undefined' || typeof arguments[1] === 'undefined')) {
            let b = 0
        }
        else {
            throw new Error('Incorrect arguments!')
        }
        let resultString = '';
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Array.prototype.insert = function (index, item) {
            this.splice(index, 0, item);
        };
        let tempArray = message.split('')
        let message1 = '';
        for (let item of tempArray) {
            if ((item.toUpperCase()).match(/[A-Z]/i)) {
                message1 += item.toUpperCase()
            }
        }
        key = (key.repeat(Math.ceil(message1.length / key.length))).slice(0, message1.length)
        for (let i = 0; i < message1.length; i++) {
            resultString += alphabet[((26 + alphabet.indexOf(message1[i].toUpperCase()) + alphabet.indexOf(key[i].toUpperCase())) % 26)]
        }
        tempArray = resultString.split('')
        for (let i = 0; i < message.length; i++) {
            if (!(message[i].toUpperCase()).match(/[A-Z]/i)) {
                tempArray.insert(i, message[i])
            }
        }
        if (this.machineType) {
            return tempArray.join('')
        } else {
            return (tempArray.reverse()).join('')
        }
    }

    decrypt(message, key) {
        if (!(arguments.length !== 2 || typeof arguments[0] === 'undefined' || typeof arguments[1] === 'undefined')) {
            let b = 0
        }
        else {
            throw new Error('Incorrect arguments!')
        }
        let resultString = '';
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Array.prototype.insert = function (index, item) {
            this.splice(index, 0, item);
        };
        let tempArray = message.split('')
        let message1 = '';
        for (let item of tempArray) {
            if ((item.toUpperCase()).match(/[A-Z]/i)) {
                message1 += item.toUpperCase()
            }
        }
        key = (key.repeat(Math.ceil(message1.length / key.length))).slice(0, message1.length)
        for (let i = 0; i < message1.length; i++) {
            resultString += alphabet[((26 + alphabet.indexOf(message1[i].toUpperCase()) - alphabet.indexOf(key[i].toUpperCase())) % 26)]
        }
        tempArray = resultString.split('')
        for (let i = 0; i < message.length; i++) {
            if (!(message[i].toUpperCase()).match(/[A-Z]/i)) {
                tempArray.insert(i, message[i])
            }
        }
        if (this.machineType) {
            return tempArray.join('')
        } else {
            return (tempArray.reverse()).join('')
        }
    }
}

module.exports = {
  VigenereCipheringMachine
};
