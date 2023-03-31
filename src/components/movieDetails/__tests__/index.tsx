import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '..';
import userEvent from '@testing-library/user-event';

const movieName = 'Bohemian Rhapsody';
const releaseYear = '2003';
const genres = ['Drama', 'Biography', 'Music'];
const rating = 9;
const duration = 230;
const description = 'Some long description';

const setup = () => {
  userEvent.setup();
  const utils = render(
    <MovieDetails
      genres={genres}
      imageUrl={''}
      movieName={movieName}
      releaseYear={releaseYear}
      rating={rating}
      duration={duration}
      description={description}
    />
  );

  return {
    ...utils,
  };
};

describe('Movie details', () => {
  it('Should render movie name', () => {
    setup();

    expect(screen.getByText(movieName)).toBeTruthy();
  });

  it('Should render release year', () => {
    setup();

    expect(screen.getByText(releaseYear)).toBeTruthy();
  });

  it('Should render rating', () => {
    setup();

    expect(screen.getByText(rating)).toBeTruthy();
  });

  it('Should render description', () => {
    setup();

    expect(screen.getByText(description)).toBeTruthy();
  });

  it('Should render duration', () => {
    setup();
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    expect(screen.getByText(`${hours}h ${minutes}m`)).toBeTruthy();
  });
});
