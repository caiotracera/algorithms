const assert = require('assert')

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0) {
        return init;
    }

    return nums.reduce((a, b) => {
      return fn(a, b)
    }, init)
};

{
  const result = reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0);
  const expected = 10;
  assert.deepStrictEqual(result, expected)
}

{
  const result = reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100);
  const expected = 130;
  assert.deepStrictEqual(result, expected)
}