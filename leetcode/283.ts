import assert from "assert";

/**
  Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const maxLength = nums.length;
  let zeroes = 0;

  for (const num of nums) {
    if (num === 0) {
      zeroes++;
    }
  }

  const values: number[] = [];
  for (const num of nums) {
    if (num !== 0) {
      values.push(num);
    }
  }

  while(zeroes--) {
    values.push(0);
  }

  for (let i = 0; i < maxLength; i++) {
    nums[i] = values[i];
  }
}

{
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  const expected = [1, 3, 12, 0, 0];
  assert.deepStrictEqual(nums, expected);
}

{
  const nums = [0];
  moveZeroes(nums);
  const expected = [0];
  assert.deepStrictEqual(nums, expected);
}

{
  const nums = [0, 0, 1];
  moveZeroes(nums);
  const expected = [1, 0, 0];
  assert.deepStrictEqual(nums, expected);
}
