/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

Example 1:
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

*/

//My Solution:
let diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    mat[i][i] = 0;
  }
  let i = mat[0].length - 1;
  for (let x = 0; x < mat.length; x++) {
    sum += mat[x][i];
    i--;
  }
  return sum;
};
