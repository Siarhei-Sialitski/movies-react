import React, { useId, useState } from 'react';
import { ITileMenuProps } from './types';

const TileMenu: React.FC<ITileMenuProps> = ({ onEdit, onDelete }) => {
  const id = useId();
  const [isOpen, setOpen] = useState(false);
  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onEdit();
    handleDropDown(e);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onDelete();
    handleDropDown(e);
  };

  const handleDropDown = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpen(!isOpen);
  };

  return (
    <>
      <button
        id='dropdownMenuIconButton'
        data-dropdown-toggle={id}
        className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        type='button'
        onClick={handleDropDown}
        data-testid='menuIcon'
      >
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
        </svg>
      </button>
      <div
        id={id}
        className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownMenuIconButton'
        >
          <li>
            <a
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={handleEdit}
            >
              Edit
            </a>
          </li>
          <li>
            <a
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={handleDelete}
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TileMenu;
