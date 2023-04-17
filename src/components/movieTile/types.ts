import { IMovie } from '../../shared/types';

export interface IMovieTileProps {
  movie: IMovie;
  onClick: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
