import { useRouteError } from 'react-router-dom';
import useStyles from './styles';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  const styles = useStyles();

  return (
    <div id='error-page' className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
