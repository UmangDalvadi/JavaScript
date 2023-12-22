/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let str1 = str.split("").reverse().join('').toLowerCase().replaceAll(' ', '').replace(/[^a-zA-Z0-9 ]/g, '');
  // console.log(str1);
  // console.log(str.toLowerCase().replaceAll(' ',''));

  if (str1 === str.toLowerCase().replaceAll(' ', '').replace(/[^a-zA-Z0-9 ]/g, '')) {
    return true;
  }
  return false;
}

// console.log(isPalindrome('A man a plan a canal Panama'))
module.exports = isPalindrome;
