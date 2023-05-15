import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Search from '../search';

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return (
    <div className="flex content-center">
      {' '}
      <button
        className="absolute right-10 top-10 h-14 w-60 rounded bg-gray-400 uppercase opacity-60"
        onClick={() => navigate({ pathname: 'new', search: searchParams.toString() })}
        data-testid="add-movie-button"
      >
        + add movie
      </button>
      <Search />
      <Outlet />
    </div>
  );
};

export default SearchForm;
