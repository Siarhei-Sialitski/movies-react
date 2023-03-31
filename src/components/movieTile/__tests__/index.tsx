import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieTile from '..';
import userEvent from '@testing-library/user-event';

const movieId = '1';
const movieName = 'Bohemian Rhapsody';
const releaseYear = '2003';
const genres = ['Drama', 'Biography', 'Music'];
const handleClick = jest.fn();
const handleEdit = jest.fn();
const handleDelete = jest.fn();

const setup = () => {
  const user = userEvent.setup();
  const utils = render(
    <MovieTile
      movieId={movieId}
      movieName={movieName}
      releaseYear={releaseYear}
      imageUrl='someurl'
      genres={genres}
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

    expect(screen.getByText(movieName)).toBeInTheDocument();
  });

  it('should render release year', () => {
    setup();

    expect(screen.getByText(releaseYear)).toBeInTheDocument();
  });

  it('should render genres', () => {
    setup();

    genres.map((genre) => {
      expect(screen.getByText(genre, { exact: false })).toBeInTheDocument();
    });
  });

  it('should call onClick after user click', async () => {
    setup();

    await userEvent.click(screen.getByTestId('container'));

    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith(movieId);
  });

  it('should not call onClick after user click on menu', async () => {
    setup();

    await userEvent.click(screen.getByTestId('menuIcon'));

    expect(handleClick).not.toBeCalled();
  });
});
