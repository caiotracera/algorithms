import assert from "assert";

/**
  Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  nums.unshift(...nums.splice(-(k % nums.length)));
}

{
  const nums = [1, 2, 3, 4, 5, 6, 7];
  rotate(nums, 3);
  const expected = [5, 6, 7, 1, 2, 3, 4];
  assert.deepStrictEqual(nums, expected);
}

{
  const nums = [-1, -100, 3, 99];
  rotate(nums, 2);
  const expected = [3, 99, -1, -100];
  assert.deepStrictEqual(nums, expected);
}
