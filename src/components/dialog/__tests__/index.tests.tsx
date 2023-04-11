import Dialog from '..';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

const handleCloseMock = jest.fn();
const setup = (title: string | JSX.Element, children: JSX.Element) => {
  const user = userEvent.setup();
  const utils = render(
    <Dialog title={title} onClose={handleCloseMock}>
      {children}
    </Dialog>
  );

  return {
    ...utils,
    user,
  };
};

describe('Dialog', () => {
  it('should render title text', () => {
    const titleText = 'Test title';
    setup(titleText, <></>);

    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  it('should render title JSX element', () => {
    const titleText = 'Test title';
    setup(<h1 data-testId='titleElement'>{titleText}</h1>, <></>);

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByTestId('titleElement')).toBeInTheDocument();
  });

  it('should render children JSX element', () => {
    setup(
      'title',
      <>
        <input type='text' data-testId='testinput' />
      </>
    );

    expect(screen.getByTestId('testinput')).toBeInTheDocument();
  });

  it('should render dismiss button', () => {
    setup('titleText', <></>);

    expect(screen.getByTestId('dismissButton')).toBeInTheDocument();
  });

  it('should call onClose when user clicks dismiss button', async () => {
    const { user } = setup('titleText', <></>);

    await user.click(screen.getByTestId('dismissButton'));

    expect(handleCloseMock).toBeCalledTimes(1);
  });
});
