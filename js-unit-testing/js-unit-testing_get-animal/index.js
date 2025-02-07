export function getAnimal(animal = "") {
  let statement = "I do not like animals at all!";

  switch (animal) {
    case "cats":
      statement = "I totally love cats!";
      break;
    case "dogs":
      statement = "I like dogs!";
      break;
    case "string":
      statement = "I totally like" + animal + "s";
  }

  return statement;
}
