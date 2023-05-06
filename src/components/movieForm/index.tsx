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
      className='gap-1 max-w-2xl p-1 h-[24rem]'
      onSubmit={handleSubmit(handleFormSubmit)}
      onReset={(e) => {
        e.preventDefault();
        reset();
      }}
      data-testid='form'
    >
      <div className='grid grid-cols-[350px_260px] gap-5'>
        <div className='col-start-1 col-end-1 flex flex-col gap-0.5'>
          <label
            htmlFor={titleInputId}
            className='opacity-80 text-base uppercase text-rose-500 font-semibold'
          >
            title
          </label>
          <input
            id={titleInputId}
            {...register('title')}
            placeholder='Movie title'
            data-testid='movieTitle'
            className='rounded opacity-80 mix-blend-normal text-black text-base font-normal placeholder:opacity-50'
          />
        </div>
        <div className='col-start-2 col-end-2 flex flex-col gap-0.5'>
          <label
            htmlFor={releaseDateInputId}
            className='opacity-80 text-base uppercase text-rose-500 font-semibold'
          >
            release date
          </label>
          <input
            id={releaseDateInputId}
            {...register('release_date')}
            type='date'
            data-testid='releaseDate'
            className='rounded opacity-80 mix-blend-normal text-black text-base font-normal placeholder:opacity-50'
          />
        </div>
        <div className='col-start-1 col-end-1 flex flex-col gap-0.5'>
          <label
            htmlFor={posterPathInputId}
            className='opacity-80 text-base uppercase text-rose-500 font-semibold'
          >
            movie url
          </label>
          <input
            id={posterPathInputId}
            {...register('poster_path')}
            placeholder='https://'
            data-testid='posterPath'
            className='rounded opacity-80 mix-blend-normal text-black text-base font-normal placeholder:opacity-50'
          />
        </div>
        <div className='col-start-2 col-end-2 flex flex-col gap-0.5'>
          <label
            htmlFor={voteAverageInputId}
            className='opacity-80 text-base uppercase text-rose-500 font-semibold'
          >
            rating
          </label>
          <input
            {...register('vote_average', { valueAsNumber: true })}
            id={voteAverageInputId}
            placeholder='7.8'
            data-testid='voteAverage'
            type='number'
            step='0.1'
            className='rounded opacity-80 mix-blend-normal text-black text-base font-normal placeholder:opacity-50'
          />
        </div>
        <div className='col-start-1 col-end-1 flex flex-col gap-0.5'>
          <label
            htmlFor={genreInputId}
            className='opacity-80 text-base uppercase text-rose-500 font-semibold'
          >
            genre
          </label>
          <Controller
            name='genres'
            control={control}
            data-testid='dropdown'
            render={({ field }) => (
              <Select
                classNamePrefix='react-select'
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
        <div className='col-start-2 col-end-2 flex flex-col gap-0.5'>
          <label
            htmlFor={runtimeInputId}
            className='opacity-80 text-base uppercase text-rose-500 font-semibold'
          >
            runtime
          </label>
          <input
            id={runtimeInputId}
            {...register('runtime', { valueAsNumber: true })}
            placeholder='minutes'
            data-testid='runtime'
            type='number'
            className='rounded opacity-80 mix-blend-normal text-black text-base font-normal placeholder:opacity-50'
          />
        </div>
        <div className='col-start-1 col-end-3 flex flex-col gap-0.5'>
          <label
            htmlFor={overwieInputId}
            className='opacity-80 text-base uppercase text-rose-500 font-semibold'
          >
            overview
          </label>
          <textarea
            placeholder='Movie description'
            id={overwieInputId}
            {...register('overview')}
            data-testid='overview'
            className='rounded opacity-80 placeholder:opacity-50 mix-blend-normal text-black text-base'
          />
          <div className='text-base text-rose-500'>
            <p role='alert'>{errors.title?.message}</p>
            <p role='alert'>{errors.release_date?.message}</p>
            <p role='alert'>{errors.poster_path?.message}</p>
            <p role='alert'>{errors.vote_average?.message}</p>
            <p role='alert'>{errors.runtime?.message}</p>
            <p role='alert'>{errors.overview?.message}</p>
            <p role='alert'>{errors.genres?.message}</p>
          </div>
        </div>
      </div>
      <div className='py-4 px-2'>
        <div className='float-right w-96 space-x-8'>
          <input
            className='text-rose-500 bg-neutral-800 rounded text-base w-44 h-12'
            type='reset'
            value='Reset'
          />
          <input
            className='text-white w-44 h-12 text-base rounded bg-rose-500'
            type='submit'
            value='Submit'
          />
        </div>
      </div>
    </form>
  );
};

export default MovieForm;
