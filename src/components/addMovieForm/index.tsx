import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createMovie } from '../../shared/api';
import Dialog from '../dialog';
import MovieForm from '../movieForm';

const AddMovieForm: React.FC = () => {
  const [showDialog, setShowDialog] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <div>
      {showDialog && (
        <Dialog
          data-testid='add-movie-dialog'
          title='Add Movie'
          onClose={() => {
            setShowDialog(false);
            navigate({ pathname: '/', search: searchParams.toString() });
          }}
        >
          <MovieForm
            onSubmit={async (movie) => {
              try {
                const createdMovie = await createMovie(movie);
                navigate({
                  pathname: `/${createdMovie.id}`,
                  search: searchParams.toString(),
                });
                setShowDialog(false);
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

export default AddMovieForm;
