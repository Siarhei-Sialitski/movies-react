import { IMovieFormProps } from './types';
import React from 'react';
import { Label, useId } from '@fluentui/react-components';
import Select from 'react-select';
import useStyles from './styles';
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
  const styles = useStyles();
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
  console.log(defaultValue);
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
  const titleInputId = useId('titleInput');
  const posterPathInputId = useId('posterPathInput');
  const releaseDateInputId = useId('releaseDateId');
  const voteAverageInputId = useId('voteAverageInput');
  const genreInputId = useId('genreInput');
  const runtimeInputId = useId('runtimeInput');
  const overwieInputId = useId('overwieInput');
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
      className={styles.root}
      onSubmit={handleSubmit(handleFormSubmit)}
      onReset={(e) => {
        e.preventDefault();
        reset();
      }}
      data-testid='form'
    >
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <Label htmlFor={titleInputId}>title</Label>
          <input
            id={titleInputId}
            {...register('title')}
            placeholder='Movie title'
            data-testid='movieTitle'
          />
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={releaseDateInputId}>release date</Label>
          <input
            id={releaseDateInputId}
            {...register('release_date')}
            type='date'
            data-testid='releaseDate'
          />
        </div>
        <div className={styles.leftColumn}>
          <Label htmlFor={posterPathInputId}>movie url</Label>
          <input
            id={posterPathInputId}
            {...register('poster_path')}
            placeholder='https://'
            data-testid='posterPath'
          />
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={voteAverageInputId}>rating</Label>
          <input
            {...register('vote_average', { valueAsNumber: true })}
            id={voteAverageInputId}
            placeholder='7.8'
            data-testid='voteAverage'
            type='number'
            step='0.1'
          />
        </div>
        <div className={styles.leftColumn}>
          <Label htmlFor={genreInputId}>genre</Label>
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
                styles={{
                  control: (base) => ({
                    ...base,
                    background: 'rgba(50, 50, 50, 0.948044)',
                  }),
                  option: (base, { isFocused }) => ({
                    ...base,
                    background: isFocused
                      ? 'gray'
                      : 'rgba(50, 50, 50, 0.948044)',
                  }),
                }}
                {...field}
              />
            )}
          />
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={runtimeInputId}>runtime</Label>
          <input
            id={runtimeInputId}
            {...register('runtime', { valueAsNumber: true })}
            placeholder='minutes'
            data-testid='runtime'
            type='number'
          />
        </div>
        <div className={styles.fullColumn}>
          <Label htmlFor={overwieInputId}>overview</Label>
          <textarea
            placeholder='Movie description'
            id={overwieInputId}
            {...register('overview')}
            data-testid='overview'
          />

          <div className={styles.errorsContainer}>
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
      <div className={styles.footer}>
        <div className={styles.footerButtons}>
          <input className={styles.reset} type='reset' value='Reset' />
          <input className={styles.submit} type='submit' value='Submit' />
        </div>
      </div>
    </form>
  );
};

export default MovieForm;
