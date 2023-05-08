import { IMovie } from '../../shared/types';

export interface IMovieTileProps {
  movie: IMovie;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
