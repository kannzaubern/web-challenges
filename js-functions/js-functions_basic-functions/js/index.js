console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
const bookTitle = "Infinite Jest";
const nameAuthor = "David Foster Wallace";
let bookRating = 4.2;
let copiesSold = 1204;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
console.log("Book title: ", bookTitle);
console.log("Author name: ", nameAuthor);
console.log("Rating: ", bookRating);
console.log("Sold copies: ", copiesSold);

copiesSold += 200;
bookRating = 3.9;

console.log("Book title: ", bookTitle);
console.log("Author name: ", nameAuthor);
console.log("Rating: ", bookRating);
console.log("Sold copies: ", copiesSold);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log("Book title: ", bookTitle);
  console.log("Author name: ", nameAuthor);
  console.log("Rating: ", bookRating);
  console.log("Sold copies: ", copiesSold);
}

copiesSold += 500;
logBookData();

copiesSold += 220;
logBookData();
// --^-- write your code here --^--
