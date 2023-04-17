import React, { useState } from "react";
import { SearchProps } from "./types";
import useStyles from './styles';

const Search: React.FC<SearchProps> = ({ initialValue, onSearch }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  const styles = useStyles();

  return (
    <div className={styles.root}>
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
        onClick={() => {
          onSearch(searchValue);
        }}
        data-testid='search-button'
      >
        search
      </button>
    </div>
  );
};

export default Search;
