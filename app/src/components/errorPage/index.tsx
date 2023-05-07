import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  return (
    <div id='error-page' className='text-neutral-300'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
