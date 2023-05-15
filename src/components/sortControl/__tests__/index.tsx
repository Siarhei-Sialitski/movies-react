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
  const dropdown = screen.getByTestId('sort-dropdown');
  return {
    dropdown,
    user,
    ...utils,
  };
};
describe('Sort Control', () => {
  it('should render sort by label', () => {
    setup();

    expect(screen.getByText('sort by')).toBeInTheDocument();
  });

  it('should render currentSelection', () => {
    setup();

    expect(screen.getByText(defaultSelection)).toBeInTheDocument();
  });

  it('should render both options on dropdown open', async () => {
    const { dropdown } = setup();

    await userEvent.click(dropdown);

    screen.queryAllByText(defaultSelection).map((el) => expect(el).toBeInTheDocument());
    expect(screen.queryByText(anotherOption)).toBeInTheDocument();
  });
});
