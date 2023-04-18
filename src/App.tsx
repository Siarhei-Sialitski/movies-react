import { useState } from "react";
import './App.css';
import Dialog from './components/dialog';
import { Button } from '@fluentui/react-components';
import MovieForm from './components/movieForm';
import { IMovie } from './shared/types';
import MovieListPage from './components/movieListPage';

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const initialMovie: IMovie = {
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

  return (
    <>
      <MovieListPage />
      {showDialog && (
        <Dialog
          onClose={() => {
            setShowDialog(false);
          }}
          title={'edit movie'}
        >
          <MovieForm
            initialMovieInfo={initialMovie}
            onSubmit={(movie) => {
              console.log(movie);
            }}
          />
        </Dialog>
      )}
      <Button
        onClick={() => {
          setShowDialog(true);
        }}
      >
        Show dialog
      </Button>
    </>
  );
}

export default App;
