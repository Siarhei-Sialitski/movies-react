import DeleteMovieForm from '..';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

const handleConfirmMock = jest.fn();
const setup = () => {
  const user = userEvent.setup();
  const utils = render(<DeleteMovieForm onConfirm={handleConfirmMock} />);

  return {
    ...utils,
    user,
  };
};

describe('DeleteMovieForm', () => {
  it('should render message', () => {
    setup();

    expect(
      screen.getByText('Are you sure you want to delete this movie?')
    ).toBeInTheDocument();
  });

  it('should render confirm button', () => {
    setup();

    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('should call onConfirm when user click button', async () => {
    const { user } = setup();

    await user.click(screen.getByText('Confirm'));

    expect(handleConfirmMock).toBeCalledTimes(1);
  });
});
