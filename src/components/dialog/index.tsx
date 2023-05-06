import React from 'react';
import { createPortal } from 'react-dom';
import { IDialogProps } from './types';
import FocusTrap from 'focus-trap-react';

const Dialog: React.FC<IDialogProps> = ({ title, children, onClose }) => {
  return (
    <>
      {createPortal(
        <FocusTrap
          role={'dialog'}
          focusTrapOptions={{
            allowOutsideClick: true,
          }}
        >
          <div className='fixed bottom-0 top-0 left-0 right-0 flex items-center justify-center'>
            <div className='w-[42rem] opacity-100 bg-gray-800 h-auto'>
              <div className='h-8'>
                <button
                  onClick={onClose}
                  type='button'
                  className='bg-neutral-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 float-right'
                  data-testid='dismissButton'
                >
                  <svg
                    className='h-6 w-6 text-red-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='white'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='h-12 uppercase text-4xl pl-10 text-white'>
                {title}
              </div>
              <div className='px-2'>{children}</div>
            </div>
          </div>
        </FocusTrap>,
        document.body
      )}
    </>
  );
};

export default Dialog;
