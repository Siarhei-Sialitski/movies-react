import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('0px', '20px'),
    ...shorthands.padding('20px'),
  },
  searchContainer: {
    display: 'flex',
    backgroundImage: 'url(/images/Header.png)',
    height: '390px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {},
  searchIcon: {
    position: 'relative',
    top: '10px',
    color: '#F65261',
    float: 'right',
  },
  contentContainer: {
    ...shorthands.padding('0px', '20px'),
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortContainer: {
    float: 'right',
  },
  contentBody: {
    display: 'flex',
    flexWrap: 'wrap',
    ...shorthands.padding('15px', '10px'),
    ...shorthands.gap('50px', '30px'),
  },
  tileContainer: {
    ...shorthands.flex('200px'),
  },
});

export default useStyles;
