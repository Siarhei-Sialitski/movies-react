import { render, screen } from "@testing-library/react";
import Search from "../index";
import userEvent from "@testing-library/user-event";
import React from 'react';

const initialValue = "Movie";
const handleSearchMock = jest.fn();
const setup = () => {
  const utils = render(
    <Search initialValue={initialValue} onSearch={handleSearchMock} />
  );
  const user = userEvent.setup();
  const input = screen.getByTestId("search-input");
  const button = screen.getByTestId("button");
  return {
    input,
    button,
    user,
    ...utils,
  };
};

describe("Search", () => {
  it("Component renders an input with the value equal to initial value passed in props", () => {
    const { input } = setup();

    expect(input).toHaveValue(initialValue);
  });

  it('After typing to the input and a "click" event on the Submit button, the "onSearch" prop is called with proper value', async () => {
    const newInputValue = "New Movie";
    const { input, button, user } = setup();

    await user.clear(input);
    await user.type(input, newInputValue);
    await user.click(button);

    expect(handleSearchMock).toBeCalledTimes(1);
    expect(handleSearchMock).toBeCalledWith(newInputValue);
  });

  it('After typing to the input and pressing Enter key, the "onSearch" prop is called with proper value', async () => {
    const newInputValue = "New Movie";
    const { input, user } = setup();

    await user.clear(input);
    await user.type(input, newInputValue);
    await user.keyboard("{Enter}");

    expect(handleSearchMock).toBeCalledTimes(1);
    expect(handleSearchMock).toBeCalledWith(newInputValue);
  });
});
