const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
};

{
  const result = runningSum([1, 2, 3, 4]);
  const expected = [1, 3, 6, 10];
  assert.deepStrictEqual(result, expected);
}

{
  const result = runningSum([1, 1, 1, 1, 1]);
  const expected = [1, 2, 3, 4, 5];
  assert.deepStrictEqual(result, expected);
}

{
  const result = runningSum([3, 1, 2, 10, 1]);
  const expected = [3, 4, 6, 16, 17];
  assert.deepStrictEqual(result, expected);
}
