import { useState } from 'react';
import { SearchProps } from './types';

export default function Search({ initialValue, onSearch } :SearchProps) {
    const [searchValue, setSearchValue] = useState(initialValue);

    return (
        <div>
            <input
                className='searchInput'
                value={searchValue}
                onChange={e => {setSearchValue(e.target.value)}}
                placeholder='What do you want to watch?'/>
            <button
                className='searchButton'
                onClick={() => {onSearch(searchValue)}}>search</button>
        </div>
    )
}