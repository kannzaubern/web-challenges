import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

// Mocking the useRouter hook from Next.js to prevent navigation during testing
jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  // Check if the two input fields are rendered
  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(
    /player names, separated by comma/i
  );

  // Check if the button is rendered
  const button = screen.getByRole("button", { name: /create game/i });

  // Assert that inputs and button are in the document
  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  // Check if the form header is rendered with the correct accessible name
  const formHeader = screen.getByRole("heading", {
    name: /create a new game/i,
  });
  expect(formHeader).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);

  // Simulate filling in the form fields
  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(
    /player names, separated by comma/i
  );
  const button = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameOfGameInput, "Test Game");
  await userEvent.type(playerNamesInput, "John Doe, Jane Doe");

  // Simulate form submission
  await userEvent.click(button);

  // Wait for the form to be submitted and check if the correct data was passed to the callback
  await waitFor(() => {
    expect(onCreateGame).toHaveBeenCalledWith({
      nameOfGame: "Test Game",
      playerNames: ["John Doe", "Jane Doe"],
    });
  });
});

test("does not submit form if one input field is left empty", async () => {
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);

  // Simulate filling in only one field
  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(
    /player names, separated by comma/i
  );
  const button = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameOfGameInput, "Test Game");
  // Leave playerNamesInput empty
  await userEvent.clear(playerNamesInput);

  // Try submitting the form
  await userEvent.click(button);

  // Ensure the form is not submitted if playerNames is empty
  expect(onCreateGame).not.toHaveBeenCalled();
});
