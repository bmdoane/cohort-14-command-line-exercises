// Assert library straight from node
// var assert = require('assert')

// describe('Array', () => {
//   describe('#indexOf()', () => {
//     it('should return -1 when the value is not present', () => {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     })
//   })
// })


// in CLI - node_modules/.bin/mocha

// or

// in package.json edit script from default to mocha call
// "scripts": {
//   "test": "node_modules/.bin/mocha"
// },

/*************************************************
// the script can be simplified to "test": "mocha"

// then in CLI - npm test
*************************************************/


// Refactoring for chai
const { equal, isFunction, oneOf } = require('chai').assert

describe('array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      equal(-1, [1,2,3].indexOf(4));
    })
  })
})

const { randomInt } = require('../lib/math')

describe('math', () => {
  describe('randomInt', () => {
    it('should be a function', () => {
      isFunction(randomInt)
    })
    it('should return a number', () => {
    	for (let i = 0; i < 1000; i++) {
    		oneOf(randomInt(2,6), [2,3,4,5,6])
    	}	
    })
  })
})











