import React, { useState } from 'react';
import useStyles from './styles';
import { useSearchParams } from 'react-router-dom';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('query') ?? ''
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const styles = useStyles();

  const handleSearch = () => {
    searchValue
      ? searchParams.set('query', searchValue)
      : searchParams.delete('query');
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.root} data-testid='search'>
      <input
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder='What do you want to watch?'
        data-testid='search-input'
      />
      <button
        className={styles.searchButton}
        onClick={handleSearch}
        data-testid='search-button'
      >
        search
      </button>
    </div>
  );
};

export default Search;
