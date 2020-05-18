/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter
*/
var fizzBuzz = function(n,arr=[]) {
    if (n%3===0&&n%5===0) arr.push("FizzBuzz")
    else if (n%3===0) arr.push("Fizz")
    else if (n%5===0) arr.push("Buzz")
    else arr.push(n.toString())
    return n>1?fizzBuzz(n-=1,arr):arr.reverse()
};
