import { IMovieFormProps } from './types';
import React from 'react';
import {
  Input,
  Label,
  Textarea,
  useId,
  Dropdown,
  Option,
} from '@fluentui/react-components';
import useStyles from './styles';
import { IMovie, OptionOnSelectData } from '../../shared/types';
import { TriangleDown12Filled } from '@fluentui/react-icons';
import { genres } from '../../shared/constants';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    title: yup.string().required('Title is required'),
    vote_average: yup
      .string()
      .required('Average vote is required')
      .matches(/^[1-9]\d*(\.\d+)?$/, 'Invalid average vote, example 7.8'),
    release_date: yup.string().required('Release Date is required'),
    poster_path: yup
      .string()
      .required('Poster path is required')
      .matches(/^https?:\/\//, 'Poster path is not valid'),
    overview: yup.string().required('Overview is required'),
    runtime: yup
      .string()
      .required('Runtime is required')
      .matches(/^\d+$/, 'Invalid runtime, example 130'),
  })
  .required();
type MovieFormData = yup.InferType<typeof schema>;

const MovieForm: React.FC<IMovieFormProps> = ({
  initialMovieInfo,
  onSubmit,
}) => {
  const styles = useStyles();
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<MovieFormData>({ resolver: yupResolver(schema) });
  const titleInputId = useId('titleInput');
  const posterPathInputId = useId('posterPathInput');
  const releaseDateInputId = useId('releaseDateId');
  const voteAverageInputId = useId('voteAverageInput');
  const genreInputId = useId('genreInput');
  const runtimeInputId = useId('runtimeInput');
  const overwieInputId = useId('overwieInput');

  const handleFormSubmit: SubmitHandler<MovieFormData> = (movieModel) => {
    const movie: IMovie = {
      id: initialMovieInfo?.id ?? undefined,
      title: movieModel.title,
      release_date: movieModel.release_date,
      poster_path: movieModel.poster_path,
      runtime: +movieModel.runtime,
      genres: selectedOptions,
      vote_average: +movieModel.vote_average,
      overview: movieModel.overview,
    };

    onSubmit(movie);
  };

  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(
    initialMovieInfo?.genres ?? []
  );

  const handleOptionSelect = (ev: unknown, data: OptionOnSelectData) => {
    setSelectedOptions(data.selectedOptions);
    setValue(data.selectedOptions.join(', '));
  };
  const [value, setValue] = React.useState(
    initialMovieInfo?.genres.join(', ') ?? ''
  );

  const optionList = genres.map((option) => {
    return (
      <Option
        className={styles.option}
        key={option}
        value={option}
        data-testid='movie-form-genre-option'
      >
        {option}
      </Option>
    );
  });

  return (
    <form
      className={styles.root}
      onSubmit={handleSubmit(handleFormSubmit)}
      onReset={() => {
        setSelectedOptions(initialMovieInfo?.genres ?? []);
        setValue(initialMovieInfo?.genres.join(', ') ?? '');

        reset();
      }}
      data-testid='form'
    >
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <Label htmlFor={titleInputId}>title</Label>
          <Controller
            name='title'
            control={control}
            defaultValue={initialMovieInfo?.title ?? ''}
            render={({ field }) => (
              <Input
                id={titleInputId}
                {...field}
                placeholder='Movie title'
                data-testid='movieTitle'
              />
            )}
          />
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={releaseDateInputId}>release date</Label>
          <Controller
            name='release_date'
            control={control}
            defaultValue={initialMovieInfo?.release_date ?? ''}
            render={({ field }) => (
              <Input
                id={releaseDateInputId}
                {...field}
                placeholder='Select date'
                type='date'
                data-testid='releaseDate'
              />
            )}
          />
        </div>
        <div className={styles.leftColumn}>
          <Label htmlFor={posterPathInputId}>movie url</Label>
          <Controller
            name='poster_path'
            control={control}
            defaultValue={initialMovieInfo?.poster_path ?? ''}
            render={({ field }) => (
              <Input
                id={posterPathInputId}
                {...field}
                placeholder='https://'
                data-testid='posterPath'
              />
            )}
          />
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={voteAverageInputId}>rating</Label>
          <Controller
            name='vote_average'
            control={control}
            defaultValue={initialMovieInfo?.vote_average.toString() ?? ''}
            render={({ field }) => (
              <Input
                id={voteAverageInputId}
                {...field}
                placeholder='7.8'
                data-testid='voteAverage'
              />
            )}
          />
        </div>
        <div className={styles.leftColumn}>
          <Label htmlFor={genreInputId}>genre</Label>
          <Dropdown
            id={genreInputId}
            appearance='filled-darker'
            className={styles.dropDown}
            expandIcon={<TriangleDown12Filled className={styles.expandIcon} />}
            data-testid='dropdown'
            onOptionSelect={handleOptionSelect}
            multiselect={true}
            defaultSelectedOptions={initialMovieInfo?.genres ?? []}
            selectedOptions={selectedOptions}
            placeholder='Select genres'
            name='genres'
            defaultValue={value}
            value={value}
          >
            {optionList}
          </Dropdown>
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={runtimeInputId}>runtime</Label>
          <Controller
            name='runtime'
            control={control}
            defaultValue={initialMovieInfo?.runtime.toString() ?? ''}
            render={({ field }) => (
              <Input
                id={runtimeInputId}
                {...field}
                placeholder='minutes'
                data-testid='runtime'
              />
            )}
          />
        </div>
        <div className={styles.fullColumn}>
          <Label htmlFor={overwieInputId}>overview</Label>
          <Controller
            name='overview'
            control={control}
            defaultValue={initialMovieInfo?.overview ?? ''}
            render={({ field }) => (
              <Textarea
                placeholder='Movie description'
                appearance='outline'
                id={overwieInputId}
                {...field}
                data-testid='overview'
              />
            )}
          />

          <div className={styles.errorsContainer}>
            <p role='alert'>{errors.title?.message}</p>
            <p role='alert'>{errors.release_date?.message}</p>
            <p role='alert'>{errors.poster_path?.message}</p>
            <p role='alert'>{errors.vote_average?.message}</p>
            <p role='alert'>{errors.runtime?.message}</p>
            <p role='alert'>{errors.overview?.message}</p>
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
