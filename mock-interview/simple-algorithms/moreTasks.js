// Problem 1: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function handleOddAndEven(integer) {
  return integer % 2 === 0 ? "Even" : "Odd";
}

/* Problem 2: Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. 
Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) 
got in the championship by the rules given above.

Notes:
Our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

let results = ["3:1", "2:2", "0:1", "4:0", "1:1"];

function calculatePoints(results) {
  return results.reduce((total, result) => {
    let [x, y] = result.split(":").map(Number); // Convert both x and y to numbers
    if (x > y) return total + 3; // Win = 3 points
    if (x < y) return total; // Loss = 0 points
    return total + 1; // Tie = 1 point
  }, 0);
}

console.log("Total Points:", calculatePoints(results));

/* Problem 3: You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.*/

let arrayOneOdd = [2, 4, 0, 100, 4, 11, 2602, 36];
let arrayOneEven = [2, 4, 0, 100, 4, 11, 2602, 36];

function findNonFittingNumber([integers]) {
  // Check the first three numbers to determine the majority
  const firstThree = integers.slice(0, 3);
  const evens = firstThree.filter((num) => num % 2 === 0).length;

  // If majority is even, find and return the odd number
  if (evens >= 2) {
    return integers.find((num) => num % 2 !== 0);
  } else {
    // Otherwise, majority is odd, find and return the even number
    return integers.find((num) => num % 2 === 0);
  }
}

console.log("Non fitting number:", findNonFittingNumber(arrayOneEven));
console.log("Non fitting number:", findNonFittingNumber(arrayOneOdd));

/* Problem 4: The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.*/

let exampleString = "alibaba";

function countOccuringCharacters(string) {
  let characterCountObject = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in characterCountObject) {
      characterCountObject[string[i]] += 1;
    } else {
      characterCountObject[string[i]] = 1;
    }
  }
  return characterCountObject;
}

console.log("Count Occurences:", countOccuringCharacters(exampleString));
