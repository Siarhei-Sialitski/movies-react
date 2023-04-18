import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    ...shorthands.gap('20px'),
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  searchInput: {
    width: '675px',
    height: '57px',
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    mixBlendMode: 'normal',
    opacity: '0.8',
    ...shorthands.borderRadius('4px'),
    ...shorthands.padding('0px', '19px'),
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#ffffff',
    ...shorthands.border('none'),
    '&::placeholder': {
      fontFamily: 'Montserrat',
      position: 'absolute',
      height: '24px',
      left: '2.66%',
      right: '56.94%',
      top: 'calc(50% - 24px / 2 + 0.5px)',
      color: '#ffffff',
      mixBlendMode: 'normal',
      opacity: '0.3',
    },
  },
  searchButton: {
    width: '233px',
    height: '57px',
    backgroundColor: '#f65261',
    ...shorthands.borderRadius('4px'),
    color: '#ffffff',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    mixBlendMode: 'normal',
    opacity: '0.8',
    ...shorthands.border('none'),
  },
});

export default useStyles;
