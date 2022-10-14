const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (typeof arguments[0] === 'undefined') {
      this.chain.push(" ")
    } else {
        this.chain.push(value)
    }
    return this
  },
  removeLink(position) {
    if (position < this.chain.length && position > 0 && typeof position === 'number') {
        this.chain.splice(position - 1, 1)
        return this
    } else {
        this.chain = []
        throw new Error("You can\'t remove incorrect link!")
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()
      return this
  },
  finishChain() {
    let resuletChain = ''
    for (let i = 0; i < this.chain.length - 1; i++) {
      if (this.chain[i] === ' ') {
        resuletChain += `()~~`;
      }  else {
        resuletChain += `( ${this.chain[i]} )~~`;
      }
    }
    resuletChain += `( ${this.chain[this.chain.length - 1]} )`;
    this.chain = []
    return resuletChain
  }
};

module.exports = {
  chainMaker
};
