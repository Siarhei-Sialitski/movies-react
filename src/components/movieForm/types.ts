import { IMovie } from '../../shared/types';

export interface IMovieFormProps {
  initialMovieInfo?: IMovie;
  onSubmit: (movie: IMovie) => void;
}
