import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMovie } from '../../shared/api';
import Dialog from '../dialog';
import MovieForm from '../movieForm';

const AddMovieForm: React.FC = () => {
  const [showDialog, setShowDialog] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      {showDialog && (
        <Dialog
          data-testid='add-movie-dialog'
          title='Add Movie'
          onClose={() => {
            setShowDialog(false);
            navigate(-1);
          }}
        >
          <MovieForm
            onSubmit={async (movie) => {
              setShowDialog(false);
              await createMovie(movie);
              navigate(-1);
            }}
          />
        </Dialog>
      )}
    </div>
  );
};

export default AddMovieForm;
