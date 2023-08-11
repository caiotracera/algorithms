const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const letters = new Set();
  let streak = 0;
  let higherStreak = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    console.log(`The letter is ${letter}`);
    console.log(`${letter} is in letters? ${letters.has(letter)}`);

    if (!letters.has(letter)) {
      letters.add(letter);
      streak += 1;
    } else {
      streak = 1;
    }

    if (streak > higherStreak) {
      higherStreak = streak;
    }
    console.log("\n");
  }

  return higherStreak;
};

// {
//   const result = lengthOfLongestSubstring("abcabcbb");
//   const expected = 3;
//   assert.deepStrictEqual(result, expected);
// }

// {
//   const result = lengthOfLongestSubstring("bbbbb");
//   const expected = 1;
//   assert.deepStrictEqual(result, expected);
// }

// {
//   const result = lengthOfLongestSubstring("pwwkew");
//   const expected = 3;
//   assert.deepStrictEqual(result, expected);
// }

// {
//   const result = lengthOfLongestSubstring("aab");
//   const expected = 2;
//   assert.deepStrictEqual(result, expected);
// }

{
  const result = lengthOfLongestSubstring("dvdf");
  const expected = 3;
  assert.deepStrictEqual(result, expected);
}
