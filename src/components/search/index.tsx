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
    <div className='flex gap-10 w-[48rem]' data-testid='search'>
      <input
        className='w-full h-14 bg-gray-700 opacity-80 rounded text-xl text-neutral-300 pl-5 placeholder:opacity-50'
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder='What do you want to watch?'
        data-testid='search-input'
      />
      <button
        className='rounded bg-rose-500 w-60 font-montserrat text-neutral-300 uppercase text-xl opacity-80'
        onClick={handleSearch}
        data-testid='search-button'
      >
        search
      </button>
    </div>
  );
};

export default Search;
