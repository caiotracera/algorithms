const assert = require("assert");

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const matches = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i].toLowerCase().split("");

    if (currentWord.every((char) => "qwertyuiop".includes(char))) {
      matches.push(words[i]);
    }

    if (currentWord.every((char) => "asdfghjkl".includes(char))) {
      matches.push(words[i]);
    }

    if (currentWord.every((char) => "zxcvbnm".includes(char))) {
      matches.push(words[i]);
    }
  }

  return matches;
};

{
  const result = findWords(["Hello", "Alaska", "Dad", "Peace"]);
  const expected = ["Alaska", "Dad"];
  assert.deepStrictEqual(result, expected);
}

{
  const result = findWords(["omk"]);
  const expected = [];
  assert.deepStrictEqual(result, expected);
}

{
  const result = findWords(["adsdf", "sfd"]);
  const expected = ["adsdf", "sfd"];
  assert.deepStrictEqual(result, expected);
}
