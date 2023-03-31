import React from 'react';
import { render, screen } from '@testing-library/react';
import TileMenu from '..';
import userEvent from '@testing-library/user-event';

const handleEditMock = jest.fn();
const handleDeleteMock = jest.fn();
const setup = () => {
  const user = userEvent.setup();
  const utils = render(
    <TileMenu onEdit={handleEditMock} onDelete={handleDeleteMock} />
  );
  const button = screen.getByTestId('menuIcon');
  return {
    button,
    user,
    ...utils,
  };
};

describe('Tile Menu', () => {
  it('should renders menu icon without menu items', () => {
    const { button } = setup();

    expect(button).toBeInTheDocument();
  });

  it('should not render menu items', () => {
    setup();

    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });

  describe('Edit menu item', () => {
    it('should renders Edit menu item after icon clicked', async () => {
      const { button } = setup();

      await userEvent.click(button);

      expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('should invoke onEdit after Edit item click', async () => {
      const { button } = setup();

      await userEvent.click(button);
      await userEvent.click(screen.getByText('Edit'));

      expect(handleEditMock).toBeCalledTimes(1);
    });
  });

  describe('Delete menu item', () => {
    it('should renders Delete menu item after icon clicked', async () => {
      const { button } = setup();

      await userEvent.click(button);

      expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    it('should invoke onEdit after Edit item click', async () => {
      const { button } = setup();

      await userEvent.click(button);
      await userEvent.click(screen.getByText('Delete'));

      expect(handleDeleteMock).toBeCalledTimes(1);
    });
  });
});
