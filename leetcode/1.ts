import assert from "assert";

function twoSum(nums: number[], target: number): number[] {
  const values = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const missingValue = target - currentValue;

    if (values.has(missingValue)) {
      return [values.get(missingValue), i];
    }

    values.set(currentValue, i);
  }
}

{
  const result = twoSum([2, 7, 11, 15], 9);
  const expected = [0, 1];
  assert.deepStrictEqual(result, expected);
}

{
  const result = twoSum([3, 2, 4], 6);
  const expected = [1, 2];
  assert.deepStrictEqual(result, expected);
}

{
  const result = twoSum([3, 3], 6);
  const expected = [0, 1];
  assert.deepStrictEqual(result, expected);
}
