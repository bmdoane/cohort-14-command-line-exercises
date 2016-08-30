const { assert: { isFunction, deepEqual } } = require('chai')

const parseArgs = require('../lib/parse-args')

describe('parse-args', () => {
  it('should be a function', () => {
    isFunction(parseArgs)
  })
  it('should handle no arguments', () => {
    const args = []
    const expected = { count: 1, sides: 6 }
    deepEqual(parseArgs(args), expected)
  })
  it('should handle one argument', () => {
    const args = [10]
    const expected = { count: 1, sides: 10 }
    deepEqual(parseArgs(args), expected)
  })
 it('should handle two arguments', () => {
    const args = [2, 10]
    const expected = { count: 2, sides: 10 }
    deepEqual(parseArgs(args), expected)
  })
})
