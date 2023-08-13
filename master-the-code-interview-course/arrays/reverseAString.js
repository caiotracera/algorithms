const assert = require("assert");

// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverse(string) {
  const reversed = [];

  if (!string || typeof string !== "string") {
    return;
  }

  for (let i = string.length - 1; i >= 0; i--) {
    reversed.push(string[i]);
  }

  return reversed.join("");
  // return string.split("").reverse().join("");
}

{
  const result = reverse("Hi My name is Andrei");
  const expected = "ierdnA si eman yM iH";
  assert.deepStrictEqual(result, expected);
}

{
  const result = reverse();
  const expected = undefined;
  assert.deepStrictEqual(result, expected);
}

{
  const result = reverse(false);
  const expected = undefined;
  assert.deepStrictEqual(result, expected);
}
