import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '676px',
    height: 'auto',
    backgroundColor: '#232323',
    ...shorthands.padding('10px'),
    opacity: '1',
  },
  header: {
    height: '30px',
  },
  headerTitle: {
    height: '50px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '49px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    ...shorthands.padding('0px', '20px'),
  },
  body: {
    ...shorthands.padding('0px', '20px'),
  },
  dismissButton: {
    color: '#FFFFFF',
    float: 'right',
  },
});

export default useStyles;
