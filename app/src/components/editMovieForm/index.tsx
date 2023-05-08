import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { updateMovie } from '../../shared/api';
import { IMovie } from '../../shared/types';
import Dialog from '../dialog';
import MovieForm from '../movieForm';

const EditMovieForm: React.FC = () => {
  const movie = useLoaderData() as IMovie;

  const [showDialog, setShowDialog] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <div>
      {showDialog && (
        <Dialog
          title='Edit Movie'
          onClose={() => {
            setShowDialog(false);
            navigate({
              pathname: `/${movie.id}`,
              search: searchParams.toString(),
            });
          }}
        >
          <MovieForm
            initialMovieInfo={movie}
            onSubmit={async (movie) => {
              try {
                const editedMovie = await updateMovie(movie);
                setShowDialog(false);
                navigate({
                  pathname: `/${editedMovie.id}`,
                  search: searchParams.toString(),
                });
              } catch (error) {
                console.log((error as Error)?.message);
              }
            }}
          />
        </Dialog>
      )}
    </div>
  );
};

export default EditMovieForm;
