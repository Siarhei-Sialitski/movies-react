import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    width: '676px',
    height: 'auto',
    backgroundColor: '#232323',
    ...shorthands.padding('10px'),
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
