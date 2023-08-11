const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  return nums.includes(target);
};

{
  const result = search([2, 5, 6, 0, 0, 1, 2], 0);
  const expected = true;
  assert.deepStrictEqual(result, expected);
}

{
  const result = search([2, 5, 6, 0, 0, 1, 2], 3);
  const expected = false;
  assert.deepStrictEqual(result, expected);
}
