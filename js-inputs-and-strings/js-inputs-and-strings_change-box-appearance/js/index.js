console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

// Task 1
inputColor.addEventListener("input", () => {
  const currentColor = inputColor.value;
  box.style.backgroundColor = `hsl(${currentColor}, 100%, 50%)`;
});

// Task 2
inputRadius.addEventListener("input", () => {
  const borderRadius = inputRadius.value;
  box.style.borderRadius = `${borderRadius}%`;
});

// Task 3
inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  box.style.transform = `rotate(${rotation}deg)`;
});
