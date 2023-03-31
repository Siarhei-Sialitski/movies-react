import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    width: '250px',
  },
  label: {
    paddingTop: '9px',
    width: '100px',
    height: '20px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.888889px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    mixBlendMode: 'normal',
    opacity: '0.6',
    float: 'left',
  },
  dropDown: {
    minWidth: '150px',
    float: 'right',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.888889px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  option: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.888889px',
    color: '#FFFFFF',
  },
  expandIcon: {
    color: '#F65261',
  },
});

export default useStyles;
