import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieTile from '..';
import userEvent from '@testing-library/user-event';

const movie = {
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
const handleClick = jest.fn();
const handleEdit = jest.fn();
const handleDelete = jest.fn();

const setup = () => {
  const user = userEvent.setup();
  const utils = render(
    <MovieTile
      movie={movie}
      onClick={handleClick}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
  return {
    user,
    ...utils,
  };
};

describe('Movie Tile', () => {
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

  it('should render genres', () => {
    setup();

    movie.genres.map((genre) => {
      expect(screen.getByText(genre, { exact: false })).toBeInTheDocument();
    });
  });

  it('should call onClick after user click', async () => {
    setup();

    await userEvent.click(screen.getByTestId('movietilerootcontainer'));

    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith(movie.id);
  });

  it('should not call onClick after user click on menu', async () => {
    setup();

    await userEvent.click(screen.getByTestId('menuIcon'));

    expect(handleClick).not.toBeCalled();
  });
});
