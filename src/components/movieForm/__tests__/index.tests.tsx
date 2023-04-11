import MovieForm from '..';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { IMovie } from '../../../shared/types';

const movie: IMovie = {
  movieId: '1',
  title: 'TestTile',
  releaseDate: '2018-07-22',
  url: 'https://someurl.com',
  rating: 9.9,
  duration: 100,
  description: 'Some long description',
  genres: ['Comedy', 'Horror'],
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
    expect(screen.getByTestId('movieDate')).toBeInTheDocument();
    expect(screen.getByTestId('movieUrl')).toBeInTheDocument();
    expect(screen.getByTestId('movieRating')).toBeInTheDocument();
    expect(screen.getByTestId('movieGenres')).toBeInTheDocument();
    expect(screen.getByTestId('movieDuration')).toBeInTheDocument();
    expect(screen.getByTestId('movieDescription')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should render movie data if passes', () => {
    setup(movie);

    expect(screen.getByTestId('form')).toHaveFormValues({
      title: 'TestTile',
      releaseDate: '2018-07-22',
      url: 'https://someurl.com',
      rating: '9.9',
      duration: '100',
      description: 'Some long description',
    });
    expect(screen.getByTestId('movieGenres')).toHaveValue(
      movie.genres.join(', ')
    );
  });

  it('should call onSubmit with movie after user clicks submit', async () => {
    const { user } = setup(movie);

    await user.click(screen.getByText('Submit'));

    expect(handleSubmitMock).toBeCalledWith({
      ...movie,
      rating: movie.rating.toString(),
      duration: movie.duration.toString(),
    });
  });
});
