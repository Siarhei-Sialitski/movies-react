import { GenreSelectProps } from './types';

export default function GenreSelect({ genreNames, selectedGenre, onSelect } :GenreSelectProps) {
    const genreItems = genreNames.map(genre =>
        <button
            key={genre}
            className={`genreButton ${genre === selectedGenre ? 'genreButtonHighlited' : ''}`}
            onClick={() => onSelect(genre)}>{genre}
        </button>)

    return (
        <div className='genreDiv'>
            {genreItems}
        </div>
    )
}