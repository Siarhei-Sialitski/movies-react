import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  menuIcon: {
    transform: 'rotate(90deg)',
    position: 'absolute',
  },
  menuItem: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#FFFFFF',
    mixBlendMode: 'normal',
    opacity: '0.8',
    '&:hover': {
      backgroundColor: '#F65261',
    },
  },
  menuPopover: {
    position: 'absolute',
    top: '100px',
    backgroundColor: 'rgba(35, 35, 35, 0.918051)',
    backdropFilter: 'blur(13.5914px)',
    ...shorthands.padding('0px'),
  },
});

export default useStyles;
