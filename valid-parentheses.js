/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
*/

let isValid = (s) => {
  let bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let pairStorage = [];
  for (let char of s) {
    if (bracketPairs[char]) {
      pairStorage.push(bracketPairs[char]);
    } else if (pairStorage.pop() !== char) {
      return false;
    }
  }
  return !pairStorage.length;
};
