import { IDeleteMovieFormProps } from './types';
import React from 'react';

const DeleteMovieForm: React.FC<IDeleteMovieFormProps> = ({ onConfirm }) => {
  return (
    <div className="flex-col">
      <span className="text-xl text-white">
        Are you sure you want to delete this movie?
      </span>
      <input
        className="h-14 w-44 rounded bg-rose-500"
        type="submit"
        value="Confirm"
        onClick={onConfirm}
      />
    </div>
  );
};

export default DeleteMovieForm;
