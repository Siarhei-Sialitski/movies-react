import React, { useState } from 'react';
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

  const handleSearch = () => {
    if (searchParams.get('query') !== searchValue) {
      searchValue
        ? searchParams.set('query', searchValue)
        : searchParams.delete('query');
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="flex w-[48rem] gap-10" data-testid="search">
      <input
        className="h-14 w-full rounded bg-gray-700 pl-5 text-xl text-neutral-300 opacity-80 placeholder:opacity-50"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="What do you want to watch?"
        data-testid="search-input"
      />
      <button
        className="w-60 rounded bg-rose-500 text-xl uppercase text-neutral-300 opacity-80"
        onClick={handleSearch}
        data-testid="search-button"
      >
        search
      </button>
    </div>
  );
};

export default Search;
