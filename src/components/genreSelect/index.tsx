import classNames from 'classnames';
import { GenreSelectProps } from './types';

const GenreSelect : React.FC<GenreSelectProps> = ({ genreNames, selectedGenre, onSelect }) => {

    const genreItems = genreNames.map(genre => {
            const btnClass = classNames({
                genreButton: true,
                genreButtonHighlited: genre === selectedGenre
            });

            return <button
                key={genre}
                className={btnClass}
                onClick={() => onSelect(genre)}>{genre}
            </button>
        })

    return (
        <div className='genreDiv'>
            {genreItems}
        </div>
    )
}

export default GenreSelect;