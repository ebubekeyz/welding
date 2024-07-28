import moment from 'moment';
import Wrapper from '../assets/wrappers/Copyright';

const Copyright = () => {
  return (
    <Wrapper>
      <div className="copyright">
        <p>
          Copyright {moment().format('YYYY')} &copy; Created By{' '}
          <a target="_blank" href="https://optilogix.netlify.app">
            Code Addict
          </a>
          &nbsp;All Rights Reserved
        </p>
      </div>
    </Wrapper>
  );
};
export default Copyright;
