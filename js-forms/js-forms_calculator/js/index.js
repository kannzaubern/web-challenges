console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target); // Wrap all the information (in this state, at this moment) of formData into an object that we know how to work with
  const data = Object.fromEntries(formData); // Converts all the information from 'event' into an object
  console.log("data", data);

  let numberA = Number(data.numberA); // Need to convert strings into numbers to work with them
  let numberB = Number(data.numberB);

  // const numberA = parseInt(data.numberA); -- does the same thing
  // const numberB = parseInt(data['numberB]); -- does the same thing

  switch (data.operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
