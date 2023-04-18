import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import MovieListPage from '..';

const movies = [
  {
    id: 1,
    title: 'Fifty Shades Freed',
    vote_average: 6.1,
    release_date: '2018-02-07',
    poster_path:
      'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    genres: ['Drama', 'Romance'],
    runtime: 106,
  },
  {
    id: 2,
    title: 'Kill Bill',
    vote_average: 8.1,
    release_date: '2018-02-07',
    poster_path:
      'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    genres: ['Criminal', 'Romance'],
    runtime: 200,
  },
];

jest.mock('../../../hooks/useData', () => {
  return jest.fn(() => movies);
});

const setup = () => {
  const user = userEvent.setup();
  const utils = render(<MovieListPage />);
};

describe('MovieListPage', () => {
  it('should render', (done) => {
    setup();

    done();
  });

  it('should render all movies', () => {
    setup();

    movies.map((m) => {
      expect(screen.getByText(m.title)).toBeInTheDocument();
    });
  });

  it('should not render movie details after render', async () => {
    setup();

    expect(screen.queryByTestId('searchicon')).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('moviedetailsrootcontainer')
    ).not.toBeInTheDocument();
  });

  it('should render movie details if user clicked on tile', async () => {
    setup();

    await userEvent.click(screen.getAllByTestId('movietilerootcontainer')[0]);

    expect(screen.getByTestId('searchicon')).toBeInTheDocument();
    expect(screen.getByTestId('moviedetailsrootcontainer')).toBeInTheDocument();
  });

  it('should not render movie details after user click search icon', async () => {
    setup();

    await userEvent.click(screen.getAllByTestId('movietilerootcontainer')[0]);
    await userEvent.click(screen.getByTestId('searchicon'));

    expect(screen.queryByTestId('searchicon')).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('moviedetailsrootcontainer')
    ).not.toBeInTheDocument();
  });
});
