/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"

*/

//Solution:
const isUpperCase = (char) => {
  let ascii = char.charCodeAt(0);

  if (ascii >= 65 && ascii <= 90) {
    return true;
  }
  return false;
};

const toLower = (char) => {
  let ascii = char.charCodeAt(0);

  ascii = String.fromCharCode(ascii + 32);

  return ascii;
};
