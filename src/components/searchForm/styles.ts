import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  addMovieButton: {
    width: '233px',
    height: '57px',
    backgroundColor: '#606060AD',
    ...shorthands.borderRadius('4px'),
    color: '#F65261',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    mixBlendMode: 'normal',
    opacity: '0.8',
    ...shorthands.border('none'),
    position: 'relative',
    bottom: '150px',
    left: '250px',
    float: 'right',
  },
});

export default useStyles;
