import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  genreDiv: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.margin('0'),
    marginLeft: '0',
  },
  genreButton: {
    height: '57px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    color: '#ffffff',
    ...shorthands.border('0'),
    ...shorthands.borderBottom('solid', 'transparent'),
    backgroundColor: '#232323',
  },
  genreButtonSelected: {
    ...shorthands.borderBottom('4px', 'solid', '#F65261'),
  },
});

export default useStyles;
