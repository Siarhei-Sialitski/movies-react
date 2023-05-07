import { render, screen } from '@testing-library/react';
import MovieGenres from '..';
import userEvent from '@testing-library/user-event';

const genres = ['Drama', 'Biography', 'Music'];

const setup = () => {
  userEvent.setup();
  const utils = render(<MovieGenres genres={genres} />);
  return {
    ...utils,
  };
};

describe('Movie Genres', () => {
  it('should render genres', () => {
    setup();

    genres.map((genre) => {
      expect(screen.getByText(genre, { exact: false })).toBeInTheDocument();
    });
  });
});
