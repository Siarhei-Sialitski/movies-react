export interface IMovie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[];
  runtime: number;
}

export type OptionOnSelectData = {
  optionValue: string | undefined;
  optionText: string | undefined;
  selectedOptions: string[];
};

export interface IGetMoviesResponse {
  data: IMovie[];
}

export interface IOption {
  label: string;
  value: string;
}
