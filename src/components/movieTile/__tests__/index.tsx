import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieTile from '..';
import userEvent from '@testing-library/user-event';

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
  it('Should render movie name', () => {
    setup();

    expect(screen.getByText(movieName)).toBeTruthy();
  });

  it('Should render release year', () => {
    setup();

    expect(screen.getByText(releaseYear)).toBeTruthy();
  });

  it('Should render genres', () => {
    setup();

    genres.map((genre) => {
      expect(screen.getByText(genre, { exact: false })).toBeTruthy();
    });
  });

  it('Should call onClick after user click', async () => {
    setup();

    await userEvent.click(screen.getByTestId('container'));

    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith(movieName);
  });
});
