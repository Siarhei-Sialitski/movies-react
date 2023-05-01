import MovieForm from '..';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
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

const handleSubmitMock = jest.fn();
const setup = (movie?: IMovie) => {
  const user = userEvent.setup();
  const utils = render(
    <MovieForm initialMovieInfo={movie} onSubmit={handleSubmitMock} />
  );

  return {
    ...utils,
    user,
  };
};

describe('MovieForm', () => {
  it('should render properly', () => {
    setup();

    expect(screen.getByTestId('movieTitle')).toBeInTheDocument();
    expect(screen.getByTestId('releaseDate')).toBeInTheDocument();
    expect(screen.getByTestId('posterPath')).toBeInTheDocument();
    expect(screen.getByTestId('voteAverage')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    expect(screen.getByTestId('runtime')).toBeInTheDocument();
    expect(screen.getByTestId('overview')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should render movie data if passes', () => {
    setup(movie);

    expect(screen.getByTestId('movieTitle')).toHaveDisplayValue(movie.title);
    expect(screen.getByTestId('voteAverage')).toHaveDisplayValue(
      movie.vote_average.toString()
    );
    expect(screen.getByTestId('releaseDate')).toHaveDisplayValue(
      movie.release_date
    );
    expect(screen.getByTestId('posterPath')).toHaveDisplayValue(
      movie.poster_path
    );
    expect(screen.getByTestId('overview')).toHaveDisplayValue(movie.overview);
    expect(screen.getByTestId('runtime')).toHaveDisplayValue(
      movie.runtime.toString()
    );
    expect(screen.getByTestId('dropdown')).toHaveValue(movie.genres.join(', '));
  });

  it('should call onSubmit with movie after user clicks submit', async () => {
    const { user } = setup(movie);

    await user.click(screen.getByText('Submit'));

    expect(handleSubmitMock).toBeCalledWith({
      ...movie,
    });
  });

  describe('validation', () => {
    it('should display validation messages for required fields', async () => {
      const { user } = setup();

      await user.click(screen.getByText('Submit'));

      await waitFor(() => {
        expect(screen.getByText('Title is required')).toBeInTheDocument();
        expect(
          screen.getByText('Release Date is required')
        ).toBeInTheDocument();
        expect(screen.getByText('Poster path is required')).toBeInTheDocument();
        expect(
          screen.getByText('Average vote is required')
        ).toBeInTheDocument();
        expect(screen.getByText('Runtime is required')).toBeInTheDocument();
        expect(screen.getByText('Overview is required')).toBeInTheDocument();
      });
    });

    it('should display invalid format message if rating is invalid', async () => {
      const { user } = setup();
      await user.type(screen.getByTestId('voteAverage'), 'asd');

      await user.click(screen.getByText('Submit'));

      await waitFor(() =>
        expect(
          screen.getByText('Invalid average vote, example 7.8')
        ).toBeInTheDocument()
      );
    });

    it('should display invalid format message if runtime is invalid', async () => {
      const { user } = setup();
      await user.type(screen.getByTestId('runtime'), 'asd');

      await user.click(screen.getByText('Submit'));

      await waitFor(() =>
        expect(
          screen.getByText('Invalid runtime, example 130')
        ).toBeInTheDocument()
      );
    });
  });
});
