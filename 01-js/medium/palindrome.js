/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ")
    .join("");

  let palindrome = true;

  const getLength = (str) => {
    return str.length % 2 ? str.length + 1 / 2 : str.length / 2;
  };

  for (let i = 0; i < getLength(); i++) {
    const reverseIndex = str.length - i - 1;

    if (str[i] !== str[reverseIndex]) palindrome = false;

    if (!palindrome) break;
  }

  return palindrome;
}

module.exports = isPalindrome;
