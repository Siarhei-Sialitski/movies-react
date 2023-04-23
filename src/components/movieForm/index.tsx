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

const MovieForm: React.FC<IMovieFormProps> = ({
  initialMovieInfo,
  onSubmit,
}) => {
  const styles = useStyles();
  const titleInputId = useId('titleInput');
  const posterPathInputId = useId('posterPathInput');
  const releaseDateInputId = useId('releaseDateId');
  const voteAverageInputId = useId('voteAverageInput');
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
      id: initialMovieInfo?.id ?? 0,
      genres: selectedOptions,
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
  const [value, setValue] = React.useState(initialMovieInfo?.genres.join(', '));

  const optionList = genres.map((option) => {
    return (
      <Option className={styles.option} key={option}>
        {option}
      </Option>
    );
  });

  return (
    <form className={styles.root} onSubmit={handleSubmit} data-testid='form'>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <Label htmlFor={titleInputId}>title</Label>
          <Input
            id={titleInputId}
            name='title'
            defaultValue={initialMovieInfo?.title}
            placeholder='Movie title'
            data-testid='movieTitle'
          />
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={releaseDateInputId}>release date</Label>
          <Input
            id={releaseDateInputId}
            name='release_date'
            value={initialMovieInfo?.release_date}
            placeholder='Select date'
            type='date'
            data-testid='releaseDate'
          />
        </div>
        <div className={styles.leftColumn}>
          <Label htmlFor={posterPathInputId}>movie url</Label>
          <Input
            id={posterPathInputId}
            name='poster_path'
            defaultValue={initialMovieInfo?.poster_path}
            placeholder='https://'
            data-testid='posterPath'
          />
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={voteAverageInputId}>rating</Label>
          <Input
            id={voteAverageInputId}
            name='vote_average'
            defaultValue={`${initialMovieInfo?.vote_average ?? ''}`}
            placeholder='7.8'
            data-testid='voteAverage'
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
            selectedOptions={selectedOptions}
            value={value}
            placeholder='Select genres'
          >
            {optionList}
          </Dropdown>
        </div>
        <div className={styles.rightColumn}>
          <Label htmlFor={runtimeInputId}>runtime</Label>
          <Input
            id={runtimeInputId}
            name='runtime'
            defaultValue={`${initialMovieInfo?.runtime ?? ''}`}
            placeholder='minutes'
            data-testid='runtime'
          />
        </div>
        <div className={styles.fullColumn}>
          <Label htmlFor={overwieInputId}>overview</Label>
          <Textarea
            placeholder='Movie description'
            appearance='outline'
            id={overwieInputId}
            name='overview'
            defaultValue={initialMovieInfo?.overview}
            data-testid='overview'
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
  );
};

export default MovieForm;
