import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player />);

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const user = userEvent.setup();
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  render(
    <Player
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );

  const increaseButton = screen.getByLabelText(/increase score/i);
  await user.click(increaseButton);
  await user.click(increaseButton);

  const decreaseButton = screen.getByLabelText(/decrease score/i);
  await user.click(decreaseButton);

  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(2);
});
