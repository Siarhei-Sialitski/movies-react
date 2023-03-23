import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../index";
import React from 'react';

const initialValue = 10;
const setup = () => {
  const user = userEvent.setup();
  const utils = render(<Counter initialValue={initialValue} />);
  return {
    user,
    ...utils,
  };
};

describe("Counter", () => {
  it("Component renders initial value provided in props", () => {
    setup();

    expect(screen.getByText(initialValue)).toBeInTheDocument();
  });

  it('Click event on "decrement" button decrements the displayed value', async () => {
    const expectedValue = initialValue - 1;
    setup();

    await userEvent.click(screen.getByTestId("decrement"));

    expect(screen.getByText(expectedValue)).toBeInTheDocument();
  });

  it('Click event on "increment" button increments the displayed value', async () => {
    const expectedValue = initialValue + 1;
    setup();

    await userEvent.click(screen.getByTestId("increment"));

    expect(screen.getByText(expectedValue)).toBeInTheDocument();
  });
});
