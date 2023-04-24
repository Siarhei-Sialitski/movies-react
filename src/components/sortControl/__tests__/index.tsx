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
  it('should render sort by label', () => {
    setup();

    expect(screen.getByText('sort by')).toBeInTheDocument();
  });

  it('should render currentSelection', () => {
    setup();

    expect(screen.getByText(defaultSelection)).toBeInTheDocument();
  });

  it('should not render other options', () => {
    setup();

    expect(screen.queryByText(anotherOption)).not.toBeInTheDocument();
  });

  it('should render both options on dropdown open', async () => {
    const { dropdown } = setup();

    await userEvent.click(dropdown);

    screen.queryAllByText(defaultSelection).map((el) => {
      expect(el).toBeInTheDocument();
    });
    expect(screen.queryByText(anotherOption)).toBeInTheDocument();
  });

  it('should call onSelectionChanged on another option click', async () => {
    const { dropdown } = setup();

    await userEvent.click(dropdown);
    await userEvent.click(screen.getByText(anotherOption));

    expect(handleSelectionChanged).toBeCalledTimes(1);
    expect(handleSelectionChanged).toBeCalledWith(anotherOption);
  });
});
