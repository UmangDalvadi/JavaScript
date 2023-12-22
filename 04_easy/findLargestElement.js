/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    return numbers.length >= 1 ? Math.max(...numbers) : undefined;

}
// console.log(findLargestElement([]));

module.exports = findLargestElement;