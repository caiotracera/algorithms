const assert = require("assert");

/**
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number[]}
 */
function mergedSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.table(`${array1Item}, ${array2Item}`)
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

{
  const result = mergedSortedArrays([0, 3, 4, 31], [4, 6, 30]);
  const expected = [0, 3, 4, 4, 6, 30, 31];
  assert.deepStrictEqual(result, expected);
}

{
  const result = mergedSortedArrays([], [4, 6, 30]);
  const expected = [4, 6, 30];
  assert.deepStrictEqual(result, expected);
}

{
  const result = mergedSortedArrays([0, 3, 4, 31], []);
  const expected = [0, 3, 4, 31];
  assert.deepStrictEqual(result, expected);
}
