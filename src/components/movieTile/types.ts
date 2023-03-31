export interface MovieTileProps {
  imageUrl: string;
  movieName: string;
  releaseYear: string;
  genres: string[];
  onClick: (movieName: string) => void;
  onEdit: (movieName: string) => void;
  onDelete: (movieName: string) => void;
}
