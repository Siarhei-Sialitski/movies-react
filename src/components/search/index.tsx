import React, { useState } from 'react';
import { SearchProps } from './types';

const Search: React.FC<SearchProps> = ({ initialValue, onSearch }) => {
    const [searchValue, setSearchValue] = useState(initialValue);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(searchValue)
        }
    }

    return (
        <div>
            <input
                className='searchInput'
                value={searchValue}
                onChange={e => {setSearchValue(e.target.value)}}
                onKeyDown={handleKeyDown}
                placeholder='What do you want to watch?'/>
            <button
                className='searchButton'
                onClick={() => {onSearch(searchValue)}}>search</button>
        </div>
    )
}

export default Search;