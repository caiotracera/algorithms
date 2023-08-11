const assert = require('assert')

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const wealth = [];

  accounts.map((account, index) => {
    wealth[index] = account.reduce((a, b) => a + b, 0);
  });

  return Math.max(...wealth);
};

assert.strictEqual(maximumWealth([[1,2,3],[3,2,1]]), 6)

assert.strictEqual(maximumWealth([[1,5],[7,3],[3,5]]), 10)

assert.strictEqual(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]), 17)