/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  const isEven = (num) => num % 2 === 0;

  let steps = 0;

  while (num > 0) {
    if (isEven(num)) {
      num = num / 2;
      steps += 1;
    } else {
      num -= 1;
      steps += 1;
    }
  }

  return steps;
};

console.log(numberOfSteps(14)); // 6
console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(123)); // 12
