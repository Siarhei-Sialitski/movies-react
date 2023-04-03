import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '..';
import userEvent from '@testing-library/user-event';
import { minutesToHMText } from '../../../utils/dateTimeUtils';

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
  it('should render movie name', () => {
    setup();

    expect(screen.getByText(movieName)).toBeInTheDocument();
  });

  it('should render release year', () => {
    setup();

    expect(screen.getByText(releaseYear)).toBeInTheDocument();
  });

  it('should render rating', () => {
    setup();

    expect(screen.getByText(rating)).toBeInTheDocument();
  });

  it('should render description', () => {
    setup();

    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render duration', () => {
    setup();
    const hmText = minutesToHMText(duration);

    expect(screen.getByText(hmText)).toBeInTheDocument();
  });
});
