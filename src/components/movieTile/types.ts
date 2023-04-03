export interface IMovieTileProps {
  movieId: string;
  imageUrl: string;
  movieName: string;
  releaseYear: string;
  genres: string[];
  onClick: (movieId: string) => void;
  onEdit: (movieId: string) => void;
  onDelete: (movieId: string) => void;
}
