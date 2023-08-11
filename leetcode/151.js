const assert = require("assert");

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const string = s.replace(/\s+/g, " ").trim().split(' ');

  const reverse = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reverse.push(string[i]);
  }

  return reverse.join(' ')
};

{
  const result = reverseWords("the sky is blue");
  const expected = "blue is sky the";
  assert.deepStrictEqual(result, expected);
}

{
  const result = reverseWords("a good   example");
  const expected = "example good a";
  assert.deepStrictEqual(result, expected);
}

{
  const result = reverseWords("  hello world  ");
  const expected = "world hello";
  assert.deepStrictEqual(result, expected);
}
