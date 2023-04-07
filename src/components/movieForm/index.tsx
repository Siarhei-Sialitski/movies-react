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
import { IMovie } from '../../shared/types';
import { TriangleDown12Filled } from '@fluentui/react-icons';

const MovieForm: React.FC<IMovieFormProps> = ({
  initialMovieInfo,
  onSubmit,
}) => {
  const styles = useStyles();
  const titleInputId = useId('titleInput');
  const movieUrlInputId = useId('movieUrlInput');
  const releaseDateInputId = useId('releaseDateId');
  const ratingInputId = useId('ratingInput');
  const genreInputId = useId('genreInput');
  const runtimeInputId = useId('runtimeInput');
  const overwieInputId = useId('overwieInput');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let movie = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as unknown as IMovie;

    movie = {
      ...movie,
      movieId: initialMovieInfo?.movieId ?? '',
      genres: selectedOptions,
    };
    onSubmit(movie);
  };

  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(
    initialMovieInfo?.genres ?? []
  );

  const onOptionSelect = (ev: any, data: any) => {
    setSelectedOptions(data.selectedOptions);
    setValue(data.selectedOptions.join(', '));
  };
  const [value, setValue] = React.useState(initialMovieInfo?.genres.join(', '));

  const options = ['Comedy', 'Crime', 'Horror'];
  const optionList = options.map((option) => {
    return (
      <Option className={styles.option} key={option}>
        {option}
      </Option>
    );
  });

  return (
    <>
      <form className={styles.root} onSubmit={handleSubmit} data-testId='form'>
        <div className={styles.wrapper}>
          <div className={styles.leftColumn}>
            <Label htmlFor={titleInputId}>title</Label>
            <Input
              id={titleInputId}
              name='title'
              defaultValue={initialMovieInfo?.title}
              placeholder='Movie title'
              data-testId='movieTitle'
            />
          </div>
          <div className={styles.rightColumn}>
            <Label htmlFor={releaseDateInputId}>release date</Label>
            <Input
              id={releaseDateInputId}
              name='releaseDate'
              value={initialMovieInfo?.releaseDate}
              placeholder='Select date'
              type='date'
              data-testId='movieDate'
            />
          </div>
          <div className={styles.leftColumn}>
            <Label htmlFor={movieUrlInputId}>movie url</Label>
            <Input
              id={movieUrlInputId}
              name='url'
              defaultValue={initialMovieInfo?.url}
              placeholder='https://'
              data-testId='movieUrl'
            />
          </div>
          <div className={styles.rightColumn}>
            <Label htmlFor={ratingInputId}>rating</Label>
            <Input
              id={ratingInputId}
              name='rating'
              defaultValue={`${initialMovieInfo?.rating ?? ''}`}
              placeholder='7.8'
              data-testId='movieRating'
            />
          </div>
          <div className={styles.leftColumn}>
            <Label htmlFor={genreInputId}>genre</Label>
            <Dropdown
              id={genreInputId}
              appearance='filled-darker'
              className={styles.dropDown}
              expandIcon={
                <TriangleDown12Filled className={styles.expandIcon} />
              }
              data-testid='dropdown'
              onOptionSelect={onOptionSelect}
              multiselect={true}
              selectedOptions={selectedOptions}
              value={value}
              placeholder='Select genres'
              data-testId='movieGenres'
            >
              {optionList}
            </Dropdown>
          </div>
          <div className={styles.rightColumn}>
            <Label htmlFor={runtimeInputId}>runtime</Label>
            <Input
              id={runtimeInputId}
              name='duration'
              defaultValue={`${initialMovieInfo?.duration ?? ''}`}
              placeholder='minutes'
              data-testId='movieDuration'
            />
          </div>
          <div className={styles.fullColumn}>
            <Label htmlFor={overwieInputId}>overview</Label>
            <Textarea
              placeholder='Movie description'
              appearance='outline'
              id={overwieInputId}
              name='description'
              defaultValue={initialMovieInfo?.description}
              data-testId='movieDescription'
            />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerButtons}>
            <input className={styles.reset} type='reset' value='Reset' />
            <input className={styles.submit} type='submit' value='Submit' />
          </div>
        </div>
      </form>
    </>
  );
};

export default MovieForm;
