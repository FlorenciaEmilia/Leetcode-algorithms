/*
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

*/

//My Solution:
let restoreString = (s, indices) => {
  let newString = [];
  for (let i = 0; i < indices.length; i++) {
    newString[indices[i]] = s[i];
  }
  return newString.join("");
};
