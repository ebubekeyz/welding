import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Error';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="error">
          <img src="/not-found.svg" alt="not-found" />
          <h1 className="header">Page not found</h1>
          <p className="text">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="link ">
            <Link to="/" className="btn">
              Go back home
            </Link>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h4>Error... </h4>
      </div>
    </Wrapper>
  );
};
export default Error;
