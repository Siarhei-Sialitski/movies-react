import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Search from '../search';

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return (
    <div className='flex content-center'>
      {' '}
      <button
        className='w-60 absolute top-10 right-10 opacity-60 bg-gray-400 h-14 rounded uppercase'
        onClick={() =>
          navigate({ pathname: 'new', search: searchParams.toString() })
        }
        data-testid='add-movie-button'
      >
        + add movie
      </button>
      <Search />
      <Outlet />
    </div>
  );
};

export default SearchForm;
