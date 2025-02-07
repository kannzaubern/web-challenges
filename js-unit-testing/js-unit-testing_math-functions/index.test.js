import { add } from ".";
import { subtract } from ".";
import { multiply } from ".";
import { divide } from ".";

test("adds the numbers 4 + 3 correctly", () => {
  const result = add(4, 3);
  expect(result).toBe(7);
});

test("subtracts the number 7 from 10 correctly", () => {
  const result = subtract(10, 7);
  expect(result).toBe(3);
});

test("multiplies 7 and 3 correctly", () => {
  const result = multiply(7, 3);
  expect(result).toBe(21);
});

test("divides 20 by 5 correctly", () => {
  const result = divide(20, 5);
  expect(result).toBe(4);
});
