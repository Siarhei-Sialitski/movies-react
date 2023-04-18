import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  rootContainer: {
    width: '330px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  image: {
    width: '323.41px',
    height: '486px',
    float: 'left',
  },
  tileContainer: {
    position: 'relative',
    top: '10px',
    width: '323.41px',
  },
  divTileMovieName: {
    float: 'left',
  },
  tileMovieName: {
    width: '232px',
    height: '22px',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FFFFFF',
    mixBlendMode: 'normal',
    opacity: '0.7',
  },
  divTileReleaseYear: {
    boxSizing: 'border-box',
    width: '66px',
    height: '26px',

    mixBlendMode: 'normal',
    opacity: '0.5',
    ...shorthands.border('1px', 'solid', '#979797'),
    ...shorthands.borderRadius('4px'),
    float: 'right',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spanTileReleaseYear: {
    width: '50px',
    height: '17px',
    fontSize: '14px',
    lineHeight: '17px',
    textAlign: 'center',
    color: '#FFFFFF',
    mixBlendMode: 'normal',
    opacity: '0.7',
  },
  genres: {
    float: 'left',
  },
  menu: {
    position: 'relative',
    top: '40px',
    left: '280px',
  },
});

export default useStyles;
