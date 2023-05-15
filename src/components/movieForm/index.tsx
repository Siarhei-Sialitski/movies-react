import { IMovieFormProps } from './types';
import React, { useId } from 'react';
import Select from 'react-select';
import { IMovie, IOption } from '../../shared/types';
import { genres } from '../../shared/constants';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    title: yup.string().required('Title is required'),
    vote_average: yup
      .number()
      .typeError('Rating is required')
      .min(0, 'Rating must be between 0 and 100')
      .max(100, 'Rating must be between 0 and 100')
      .required('Rating is required'),
    release_date: yup.string().required('Release Date is required'),
    poster_path: yup
      .string()
      .url('Poster path is not valid')
      .required('Poster path is required'),
    overview: yup.string().required('Overview is required'),
    genres: yup
      .array()
      .transform((genre) =>
        genre.map((g: IOption) => {
          return g.value;
        })
      )
      .min(1, 'At least one genre should be selected')
      .required(),
    runtime: yup
      .number()
      .typeError('Runtime is required')
      .min(0)
      .required('Runtime is required'),
  })
  .required();
type MovieFormData = yup.InferType<typeof schema>;

const MovieForm: React.FC<IMovieFormProps> = ({
  initialMovieInfo,
  onSubmit,
}) => {
  const defaultValue = {
    title: initialMovieInfo?.title ?? '',
    release_date: initialMovieInfo?.release_date ?? '',
    poster_path: initialMovieInfo?.poster_path ?? '',
    runtime: initialMovieInfo?.runtime,
    genres:
      initialMovieInfo?.genres.map((g) => {
        return { value: g };
      }) ?? [],
    vote_average: initialMovieInfo?.vote_average,
    overview: initialMovieInfo?.overview,
  };

  const {
    control,
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<MovieFormData>({
    resolver: yupResolver(schema),
    defaultValues: defaultValue,
  });
  const titleInputId = useId();
  const posterPathInputId = useId();
  const releaseDateInputId = useId();
  const voteAverageInputId = useId();
  const genreInputId = useId();
  const runtimeInputId = useId();
  const overwieInputId = useId();
  const options = genres.map((g) => {
    return { value: g, label: g };
  });

  const handleFormSubmit: SubmitHandler<MovieFormData> = (movieModel) => {
    const movie: IMovie = {
      id: initialMovieInfo?.id ?? undefined,
      title: movieModel.title,
      release_date: movieModel.release_date,
      poster_path: movieModel.poster_path,
      runtime: movieModel.runtime,
      genres: movieModel.genres,
      vote_average: movieModel.vote_average,
      overview: movieModel.overview,
    };

    onSubmit(movie);
  };

  return (
    <form
      className="h-[24rem] max-w-2xl gap-1 p-1"
      onSubmit={handleSubmit(handleFormSubmit)}
      onReset={(e) => {
        e.preventDefault();
        reset();
      }}
      data-testid="form"
    >
      <div className="grid grid-cols-[350px_260px] gap-5">
        <div className="col-start-1 col-end-1 flex flex-col gap-0.5">
          <label
            htmlFor={titleInputId}
            className="text-base font-semibold uppercase text-rose-500 opacity-80"
          >
            title
          </label>
          <input
            id={titleInputId}
            {...register('title')}
            placeholder="Movie title"
            data-testid="movieTitle"
            className="rounded text-base font-normal text-black opacity-80 mix-blend-normal placeholder:opacity-50"
          />
        </div>
        <div className="col-start-2 col-end-2 flex flex-col gap-0.5">
          <label
            htmlFor={releaseDateInputId}
            className="text-base font-semibold uppercase text-rose-500 opacity-80"
          >
            release date
          </label>
          <input
            id={releaseDateInputId}
            {...register('release_date')}
            type="date"
            data-testid="releaseDate"
            className="rounded text-base font-normal text-black opacity-80 mix-blend-normal placeholder:opacity-50"
          />
        </div>
        <div className="col-start-1 col-end-1 flex flex-col gap-0.5">
          <label
            htmlFor={posterPathInputId}
            className="text-base font-semibold uppercase text-rose-500 opacity-80"
          >
            movie url
          </label>
          <input
            id={posterPathInputId}
            {...register('poster_path')}
            placeholder="https://"
            data-testid="posterPath"
            className="rounded text-base font-normal text-black opacity-80 mix-blend-normal placeholder:opacity-50"
          />
        </div>
        <div className="col-start-2 col-end-2 flex flex-col gap-0.5">
          <label
            htmlFor={voteAverageInputId}
            className="text-base font-semibold uppercase text-rose-500 opacity-80"
          >
            rating
          </label>
          <input
            {...register('vote_average', { valueAsNumber: true })}
            id={voteAverageInputId}
            placeholder="7.8"
            data-testid="voteAverage"
            type="number"
            step="0.1"
            className="rounded text-base font-normal text-black opacity-80 mix-blend-normal placeholder:opacity-50"
          />
        </div>
        <div className="col-start-1 col-end-1 flex flex-col gap-0.5">
          <label
            htmlFor={genreInputId}
            className="text-base font-semibold uppercase text-rose-500 opacity-80"
          >
            genre
          </label>
          <Controller
            name="genres"
            control={control}
            data-testid="dropdown"
            render={({ field }) => (
              <Select
                classNamePrefix="react-select"
                closeMenuOnSelect={false}
                options={options}
                hideSelectedOptions={false}
                getOptionLabel={(option) => option.value}
                getOptionValue={(option) => option.value}
                isMulti={true}
                {...field}
              />
            )}
          />
        </div>
        <div className="col-start-2 col-end-2 flex flex-col gap-0.5">
          <label
            htmlFor={runtimeInputId}
            className="text-base font-semibold uppercase text-rose-500 opacity-80"
          >
            runtime
          </label>
          <input
            id={runtimeInputId}
            {...register('runtime', { valueAsNumber: true })}
            placeholder="minutes"
            data-testid="runtime"
            type="number"
            className="rounded text-base font-normal text-black opacity-80 mix-blend-normal placeholder:opacity-50"
          />
        </div>
        <div className="col-start-1 col-end-3 flex flex-col gap-0.5">
          <label
            htmlFor={overwieInputId}
            className="text-base font-semibold uppercase text-rose-500 opacity-80"
          >
            overview
          </label>
          <textarea
            placeholder="Movie description"
            id={overwieInputId}
            {...register('overview')}
            data-testid="overview"
            className="rounded text-base text-black opacity-80 mix-blend-normal placeholder:opacity-50"
          />
          <div className="text-base text-rose-500">
            <p role="alert">{errors.title?.message}</p>
            <p role="alert">{errors.release_date?.message}</p>
            <p role="alert">{errors.poster_path?.message}</p>
            <p role="alert">{errors.vote_average?.message}</p>
            <p role="alert">{errors.runtime?.message}</p>
            <p role="alert">{errors.overview?.message}</p>
            <p role="alert">{errors.genres?.message}</p>
          </div>
        </div>
      </div>
      <div className="px-2 py-4">
        <div className="float-right w-96 space-x-8">
          <input
            className="h-12 w-44 rounded bg-neutral-800 text-base text-rose-500"
            type="reset"
            value="Reset"
          />
          <input
            className="h-12 w-44 rounded bg-rose-500 text-base text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
};

export default MovieForm;
