export interface GenreSelectProps {
  genreNames: string[];
  selectedGenre: string;
  onSelect: (selectedGenre: string) => void;
}
