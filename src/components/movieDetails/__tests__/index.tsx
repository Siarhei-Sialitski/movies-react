import { render, screen } from '@testing-library/react';
import MovieDetails from '..';
import userEvent from '@testing-library/user-event';
import { minutesToHMText } from '../../../utils/dateTimeUtils';
import { IMovie } from '../../../shared/types';

const movie: IMovie = {
  id: 337167,
  title: 'Fifty Shades Freed',
  vote_average: 6.1,
  release_date: '2018-02-07',
  poster_path:
    'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview:
    'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
  genres: ['Drama', 'Romance'],
  runtime: 106,
};

const setup = () => {
  userEvent.setup();
  const utils = render(<MovieDetails movie={movie} />);

  return {
    ...utils,
  };
};

describe('Movie details', () => {
  it('should render movie name', () => {
    setup();

    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });

  it('should render release year', () => {
    setup();

    expect(
      screen.getByText(movie.release_date.slice(0, 4))
    ).toBeInTheDocument();
  });

  it('should render rating', () => {
    setup();

    expect(screen.getByText(movie.vote_average)).toBeInTheDocument();
  });

  it('should render description', () => {
    setup();

    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  });

  it('should render duration', () => {
    setup();
    const hmText = minutesToHMText(movie.runtime);

    expect(screen.getByText(hmText)).toBeInTheDocument();
  });
});
