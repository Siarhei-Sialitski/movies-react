import { IDeleteMovieFormProps } from './types';
import React from 'react';
import useStyles from './styles';

const DeleteMovieForm: React.FC<IDeleteMovieFormProps> = ({ onConfirm }) => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.root}>
        <span className={styles.message}>
          Are you sure you want to delete this movie?
        </span>
        <input
          className={styles.button}
          type='submit'
          value='Confirm'
          onClick={onConfirm}
        />
      </div>
    </>
  );
};

export default DeleteMovieForm;
