import {cleanup, render, screen} from '@testing-library/react';
import GenreSelect from '../index';
import userEvent from '@testing-library/user-event'

afterEach(cleanup);

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const selectedGenre = genres[0];
const handleSelectMock = jest.fn(() => {})
const setup = () => {
  const user = userEvent.setup();
  const utils = render(<GenreSelect genreNames={genres} selectedGenre={selectedGenre} onSelect={handleSelectMock}/>)
  const buttons =screen.getAllByRole('button');
  return {
    buttons,
    user,
    ...utils,
  }
}

describe('Genre Select', () => {
    it('Component renders all genres passed in props', () => {
      const { buttons } = setup();

      expect(buttons).toHaveLength(genres.length);
    });

    it('Component highlights a selected genre passed in props', () => {
      setup();

      expect(screen.getByText(selectedGenre)).toHaveClass('genreButtonHighlited');
    });

    it('After a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', async () => {
      const newSelectedGenre = genres[1];
      const { user } = setup();

      await user.click(screen.getByText(newSelectedGenre));

      expect(handleSelectMock).toBeCalledWith(newSelectedGenre);
    });
})