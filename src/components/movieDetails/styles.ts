import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    width: '1100px',
    display: 'flex',
    ...shorthands.gap('30px'),
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '20px',
  },
  image: {
    width: '323.41px',
    height: '486px',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  movieName: {
    height: '49px',
    fontSize: '40px',
    lineHeight: '49px',
    textAlign: 'center',
    letterSpacing: '1px',
    textyTransform: 'uppercase',
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
  },
  rating: {
    height: '51px',
    width: '51px',
    ...shorthands.borderRadius('50%'),
    ...shorthands.border('1px', 'solid', '#FFFFFF'),
    position: 'relative',
    left: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsRating: {
    position: 'absolute',
    height: '24px',
    left: '21.67%',
    right: '21.67%',
    top: 'calc(50% - 24px/2)',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  movieGenresContainer: {
    flexBasis: '100%',
  },
  detailsYearAndTime: {
    flexBasis: '100%',
    width: '323px',
    display: 'flex',
    ...shorthands.gap('100px'),
    fontSize: '24px',
    lineHeight: '29px',
    color: '#F65261',
  },
  detailsDescription: {
    width: '698px',
    height: '292px',
    lineHeight: '24px',
    color: '#FFFFFF',
    mixBlendMode: 'normal',
    opacity: '0.5',
  },
});

export default useStyles;
