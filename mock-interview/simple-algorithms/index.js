// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  let maxOfTwoNumbers = 0;
  console.log("Numbers:", num1, "//", num2);
  if (num1 > num2) {
    maxOfTwoNumbers = num1;
  } else {
    maxOfTwoNumbers = num2;
  }
  return maxOfTwoNumbers;
}

console.log("Bigger number:", maxOfTwoNumbers(20, 15));

/* PLAN FOR: FIND THE MAXIMUM
-----------------------------
1) Initialize variable √
2) Compare num1 to num2 √
3) Return bigger number √
4) Console log to verify √
*/

// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  let longestString = "";
  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;
    if (wordLength > longestString.length) {
      longestString = words[i];
    }
  }
  return longestString;
}

const longestString = findLongestWord(words);
console.log("Longest string:", longestString);

/* PLAN FOR: FIND THE LONGEST WORD
----------------------------------
0. Initalize var longestWord √
1. Check each strings of [words] with end condition using words.length √
2. check the length of each word √
3. compare length of string vs longestString √
4. store longer string in longString if string.length() > longestString √
5. return longString √

-- Console log along each step for verification
*/

// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const newSum = sumNumbers(numbers);
console.log("Sum:", newSum);

/* PLAN FOR: CALCULATE THE SUM
------------------------------
0. Initalize var for sum and var to store value of next array instance √
1. Loop through each number of [number] with end condition using .length √
2. Read the value of each instance, parse to int, and store in var √
3. Add var to the sum √
4. Return sum √
*/

// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  let averageWordLength = 0;
  let sumAllCharacters = 0;
  for (let i = 0; i < words.length; i++) {
    sumAllCharacters += words[i].length;
  }
  return (averageWordLength = sumAllCharacters / words.length);
}

const averageLength = averageWordLength(words2);
console.log("Average length of all words:", averageLength);

/* PLAN FOR: CALCULATE THE AVERAGE LENGTH OF WORDS
--------------------------------------------------
0. Initialise var for average and sum of all characters √
1. Loop through every word of [words2] with .length operator √
2. With every item of the array, we add its character .length to sum √
3. Calculate and return average √
*/

// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  let uniqueArray = [];
  for (let i = 0; i < words.length; i++) {
    let newWord = words[i];
    if (!uniqueArray.includes(newWord)) {
      uniqueArray.push(newWord);
    }
  }
  return uniqueArray;
}

console.log("Unique array:", uniquifyArray(words3));

/* PLAN FOR: RETURN ARRAY WITHOUT DUPLICATES
--------------------------------------------
0. Initialise var for newArray without duplicates √
1. Loop through every word of [words3] with .length operator √
2. Store value in var to compare it with array items √
3. For every new value, we add it to newArray √
4. Return newArray √
*/

// Find elements
const listOfWords = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  let doesWordExist = false;
  for (let i = 0; i < listOfWords.length; i++) {
    if (listOfWords[i] === haystack || listOfWords[i] === needle) {
      doesWordExist = true;
      break;
    }
  }
  return doesWordExist;
}

console.log("Does word exist:", doesWordExist("trouble", "moon"));

/* PLAN FOR: DOES WORD EXIST
----------------------------
0. Initialise boolean var for true/false result of method √
1. Loop through every word of [listOfWords] with .length operator √
2. Check if word exists in array by comparing it to every item of array √
3. Update and return boolean √
*/

// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  let repetitionsWordOne = 0;
  let repetitionsWordTwo = 0;
  for (i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === haystack) {
      repetitionsWordOne++;
    }
    if (wordsCount[i] === needle) {
      repetitionsWordTwo++;
    }
  }
  const repetitions = [repetitionsWordOne, repetitionsWordTwo];
  return repetitions;
}

console.log("Repetitions Word [1, 2]:", howManyTimes("matter", "truth"));

/* PLAN FOR: COUNT REPETITION
-----------------------------
0. Initialise int var for amount of repetition word #1 and #2 √
1. Loop through every word of [wordsCount] with .length operator √
2. Increase +1 for every repetition of word √
3. Return results √
*/

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  let genericSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      genericSum += array[i].length;
    } else if (typeof array[i] == "number") {
      genericSum += array[i];
    } else if (typeof array[i] == "boolean") {
      let booleanValue = 0;
      if (array[i] == true) {
        booleanValue = 1;
      }
      genericSum += array[i];
    }
  }
  return genericSum;
}

const newGenericSum = sum(mixedArray);
console.log("Generic sum:", newGenericSum);

/* PLAN FOR: GENERIC SUM FUNCTION
---------------------------------
0. Initialise int var for amount of sum √
1. Loop through every word of [wordsCount] with .length operator √
2. Increase +1 for every length of array item
3. Return sum √
*/

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
