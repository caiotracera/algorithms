import assert from "assert";

function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size < nums.length;
};

{
  const result = containsDuplicate([1,2,3,1]);
  const expected = true;
  assert.deepStrictEqual(result, expected)
}

{
  const result = containsDuplicate([1,2,3,4]);
  const expected = false;
  assert.deepStrictEqual(result, expected)
}

{
  const result = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
  const expected = true;
  assert.deepStrictEqual(result, expected)
}