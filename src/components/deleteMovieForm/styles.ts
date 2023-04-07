import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    height: '120px',
  },
  message: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#F65261',
    color: 'white',
    float: 'right',
    width: '180px',
    height: '57px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    ...shorthands.borderRadius('4px'),
    position: 'relative',
    left: '400px',
    top: '20px',
  },
});

export default useStyles;
