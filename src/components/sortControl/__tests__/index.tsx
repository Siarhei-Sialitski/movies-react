import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortControl from '..';

const handleSelectionChanged = jest.fn();
const defaultSelection = 'Release Date';
const anotherOption = 'Title';
const setup = () => {
  const user = userEvent.setup();
  const utils = render(
    <SortControl
      onSelectionChanged={handleSelectionChanged}
      currentSelection={defaultSelection}
    />
  );
  const dropdown = screen.getByTestId('dropdown');
  return {
    dropdown,
    user,
    ...utils,
  };
};
describe('Sort Control', () => {
  it('Should render sort by label', () => {
    setup();

    expect(screen.getByText('sort by')).toBeTruthy();
  });

  it('Should render currentSelection', () => {
    setup();

    expect(screen.getByText(defaultSelection)).toBeTruthy();
  });

  it('Should not render other options', () => {
    setup();

    expect(screen.queryByText(anotherOption)).toBeFalsy();
  });

  it('Should render both options on dropdown open', async () => {
    const { dropdown } = setup();

    await userEvent.click(dropdown);

    expect(screen.queryAllByText(defaultSelection)).toBeTruthy();
    expect(screen.queryAllByText(anotherOption)).toBeTruthy();
  });

  it('Should call onSelectionChanged on another option click', async () => {
    const { dropdown } = setup();

    await userEvent.click(dropdown);
    await userEvent.click(screen.getByText(anotherOption));

    expect(handleSelectionChanged).toBeCalledTimes(1);
    expect(handleSelectionChanged).toBeCalledWith(anotherOption);
  });
});
