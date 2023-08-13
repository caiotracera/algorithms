import assert from "assert";

function maxSubArray(nums: number[]): number {
  let local = 0;
  let maxSum = -Infinity;

  if (nums.length === 1) {
    return nums[0];
  }

  for (const num of nums) {
    local = Math.max(num, local + num);

    if (local > maxSum) { maxSum = local }
  }

  return maxSum;
}

{
  const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  const expected = 6; // [4,-1,2,1]
  assert.deepStrictEqual(result, expected);
}

{
  const result = maxSubArray([1]);
  const expected = 1;
  assert.deepStrictEqual(result, expected);
}

{
  const result = maxSubArray([5, 4, -1, 7, 8]);
  const expected = 23; [5,4,-1,7,8]
  assert.deepStrictEqual(result, expected);
}
