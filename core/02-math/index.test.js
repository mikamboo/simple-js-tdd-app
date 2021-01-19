const { add, abs } = require('./index');

const assert = require('assert').strict;

describe("02-math abs() func tests", function() {

  it("should be a func", function() {
    assert.strictEqual(typeof abs, 'function');
  })

  it("should cannot be Math.abs func", function() {
    assert.strictEqual(abs.toString().includes('Math.abs'), false);
    assert.notStrictEqual(abs, Math.abs);
    assert.strictEqual(abs.length, 1);
  })
  
  it("should return same results as Math.abs func", function() {
    assert.strictEqual(abs(0), 0);
    assert.strictEqual(abs(-1), 1);
    assert.strictEqual(abs(-13.2), 13.2);
    assert.strictEqual(abs(132), 132);
  })
})


describe("02-math add() func tests", function() {
  it("should be a func", function() {
    assert.strictEqual(typeof add, 'function');
  })

  it("add(1,2) should be 3", function() {
    assert.strictEqual(add(1,2), 3);
  })

  it("add(2,-2) should be 0", function() {
    assert.strictEqual(add(-2,2), 0);
  })
})