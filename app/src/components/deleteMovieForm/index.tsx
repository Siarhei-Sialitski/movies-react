import { IDeleteMovieFormProps } from './types';
import React from 'react';

const DeleteMovieForm: React.FC<IDeleteMovieFormProps> = ({ onConfirm }) => {
  return (
    <div className='flex-col'>
      <span className='text-white text-xl'>
        Are you sure you want to delete this movie?
      </span>
      <input
        className='bg-rose-500 w-44 h-14 rounded'
        type='submit'
        value='Confirm'
        onClick={onConfirm}
      />
    </div>
  );
};

export default DeleteMovieForm;
