/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [...Array(n).keys()];

  return result.map((value, index) => {
    const currentValue = index + 1;

    if(currentValue % 3 === 0 & currentValue % 5 === 0) {
      return result[index] = "FizzBuzz";
    }
  
    if(currentValue % 3 === 0) {
      return result[index] = "Fizz";
    }
  
    if(currentValue % 5 === 0) {
      return result[index] = "Buzz";
    }

    return result[index] = currentValue.toString();
  }) 
};

console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]