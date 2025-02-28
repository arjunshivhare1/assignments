/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  str = str.toLowerCase();
  let count = 0;

  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    const element = vowels[i];

    for (let j = 0; j < str.length; j++) {
      const strElement = str[j];
      if (strElement === element) count += 1;
    }
  }

  return count;
}

module.exports = countVowels;
