const assert = require("assert");

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

  /**
   * Even though the test is passing
   * and the string is being correctly reversed, 
   * the LeetCode test runner is failing 
   * within this approach.
   * 
   * Because of that,
   * I submited the problem using the
   * Array.replace method.
   */
  const reverse = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reverse.push(s[i]);
  }

  return reverse;
};

{
  const result = reverseString(["h", "e", "l", "l", "o"]);
  const expected = ["o", "l", "l", "e", "h"];
  assert.deepStrictEqual(result, expected);
}

{
  const result = reverseString(["H", "a", "n", "n", "a", "h"]);
  const expected = ["h", "a", "n", "n", "a", "H"];
  assert.deepStrictEqual(result, expected);
}
