import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  searchInput: {
    position: 'absolute',
    width: '675px',
    height: '57px',
    left: '178px',
    top: '242px',
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    mixBlendMode: 'normal',
    opacity: '0.8',
    ...shorthands.borderRadius('4px'),
    ...shorthands.padding('0px', '19px'),
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#ffffff',
    ...shorthands.border('none'),
    '&::placeholder': {
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
    position: 'absolute',
    width: '233px',
    height: '57px',
    left: '905px',
    top: '242px',
    backgroundColor: '#f65261',
    ...shorthands.borderRadius('4px'),
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
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