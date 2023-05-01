import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Search from '../search';
import useStyles from './styles';

const SearchForm: React.FC = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <>
      <Search />
      <button
        className={styles.addMovieButton}
        onClick={() =>
          navigate({ pathname: 'new', search: searchParams.toString() })
        }
        data-testid='add-movie-button'
      >
        + add movie
      </button>
      <Outlet />
    </>
  );
};

export default SearchForm;
