import { Button } from '@fluentui/react-components';
import React from 'react';
import { createPortal } from 'react-dom';
import useStyles from './styles';
import { IDialogProps } from './types';
import { Dismiss20Regular } from '@fluentui/react-icons';
import FocusTrap from 'focus-trap-react';

const Dialog: React.FC<IDialogProps> = ({ title, children, onClose }) => {
  const styles = useStyles();

  return (
    <>
      {createPortal(
        <FocusTrap
          role={'dialog'}
          focusTrapOptions={{
            allowOutsideClick: true,
          }}
        >
          <div className={styles.container}>
            <div className={styles.header}>
              <Button
                data-testid='dismissButton'
                tabIndex={100}
                className={styles.dismissButton}
                onClick={onClose}
                icon={<Dismiss20Regular />}
              ></Button>
            </div>
            <div className={styles.headerTitle}>{title}</div>
            <div className={styles.body}>{children}</div>
          </div>
        </FocusTrap>,
        document.body
      )}
    </>
  );
};

export default Dialog;
