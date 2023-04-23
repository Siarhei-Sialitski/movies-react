import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { render, screen } from '@testing-library/react';
import Search from '../index';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

const initialValue = 'test';

const setup = () => {
  userEvent.setup();
  render(
    <MemoryRouter initialEntries={[`?query=${initialValue}`]}>
      <Search />
    </MemoryRouter>
  );
};

describe('Search', () => {
  it('Component renders an input with the value equal to query param', () => {
    setup();

    const input = screen.getByTestId('search-input');

    expect(input).toHaveValue(initialValue);
  });
});
