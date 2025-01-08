console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log("Data Object: ", data);
  console.log(
    "The hair color of",
    data.results[0].name,
    "is",
    data.results[0].hair_color
  );
  console.log("Eye Color of R2D2: ", data.results[2].eye_color);
}

fetchData();
