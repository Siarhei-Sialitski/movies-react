import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { updateMovie } from '../../shared/api';
import Dialog from '../dialog';
import { IMovieLoaderData } from '../movieDetails/types';
import MovieForm from '../movieForm';

const EditMovieForm: React.FC = () => {
  const { movie } = useLoaderData() as IMovieLoaderData;

  const [showDialog, setShowDialog] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      {showDialog && (
        <Dialog
          title='Edit Movie'
          onClose={() => {
            setShowDialog(false);
            navigate(-1);
          }}
        >
          <MovieForm
            initialMovieInfo={movie}
            onSubmit={async (movie) => {
              setShowDialog(false);
              await updateMovie(movie);
              navigate(-1);
            }}
          />
        </Dialog>
      )}
    </div>
  );
};

export default EditMovieForm;
