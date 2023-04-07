import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import GenreSelect from "./components/genreSelect";
import Search from "./components/search";
import React from 'react';
import Dialog from './components/dialog';
import { Button } from '@fluentui/react-components';
import MovieForm from './components/movieForm';
import { IMovie } from './shared/types';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showDialog, setShowDialog] = useState(false);

  const initialMovie: IMovie = {
    movieId: '1',
    title: 'Moana',
    releaseDate: '2018-07-22',
    url: 'https://www.moana.com',
    rating: 7.6,
    duration: 107,
    description: `Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.`,
    genres: ['Crime', 'Horror'],
  };

  return (
    <div className='App'>
      <Counter initialValue={10} />
      <Search initialValue='' onSearch={(s) => console.log(s)} />
      <GenreSelect
        genreNames={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
        selectedGenre={selectedGenre}
        onSelect={(g) => {
          console.log(g);
          setSelectedGenre(g);
        }}
      />
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
    </div>
  );
}

export default App;
