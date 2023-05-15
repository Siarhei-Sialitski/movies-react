import React from 'react';
import {
  LoaderFunction,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import { getMovie } from '../../shared/api';
import { IMovie } from '../../shared/types';
import { minutesToHMText } from '../../utils/dateTimeUtils';
import MovieGenres from '../movieGenres';

const MovieDetails: React.FC = () => {
  const movie = useLoaderData() as IMovie;

  return (
    <div
      className="flex w-[64rem] gap-x-6 text-xl"
      data-testid="moviedetailsrootcontainer"
    >
      <img className="h-[30rem] w-80" src={movie.poster_path} alt={movie.title} />
      <div className="flex flex-wrap">
        <span
          className="h-12 whitespace-nowrap text-center text-4xl uppercase text-white"
          data-testid="moviedetails-title"
        >
          {movie.title}
        </span>
        <div className="relative left-20 h-12 w-12 items-center justify-center rounded-full border border-solid border-white">
          <span className="absolute inset-x-px top-2 h-3 text-center uppercase text-white">
            {movie.vote_average}
          </span>
        </div>
        <div className="basis-full">
          <MovieGenres genres={movie.genres} />
        </div>
        <div className="flex w-80 basis-full gap-x-24 text-2xl text-rose-500">
          <span>{movie.release_date.slice(0, 4)}</span>

          <span>{minutesToHMText(movie.runtime)}</span>
        </div>
        <div className="h-72 w-[40rem] text-white opacity-50">
          <span>{movie.overview}</span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export const movieLoader: LoaderFunction = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const movieId = params.movieId as string;
  if (movieId) {
    return await getMovie(movieId, request.signal);
  }
};

export default MovieDetails;
