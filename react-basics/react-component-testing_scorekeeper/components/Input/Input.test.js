import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Game Name"
      name="nameOfGame"
      placeholder="e.g. UNO"
      value="Monopoly"
      onChange={handleChange}
      required={true}
    />
  );

  const input = screen.getByText("Game Name");
  expect(input).toBeInTheDocument();

  const label = screen.getByText("Game Name");
  expect(label).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Game Name"
      name="gameName"
      placeholder="e.g. UNO"
      value="UNO"
      onChange={handleChange}
      required={true}
    />
  );

  const input = screen.getByLabelText("Game Name");
  await user.type(input, "Monopoly");
  expect(input).toBeInTheDocument();

  expect(handleChange).toHaveBeenCalledTimes(8);
});
