import { useState } from 'react';
import Wrapper from '../assets/wrappers/Portfolio';
import { Link, useNavigate, useNavigation } from 'react-router-dom';

const Popup = ({ src, id }) => {
  const [show, setShow] = useState(true);
  const nav = useNavigate();

  const removeShow = () => {
    setShow(!show);
    window.location.reload('/');
  };
  return (
    <Wrapper>
      {' '}
      <div className="img-popup">
        {show && (
          <article
            className="popup-inner"
            id={id}
            onClick={removeShow}
            style={{ cursor: 'pointer' }}
          >
            <img src={src} alt="image" className="popup-img" />
          </article>
        )}
      </div>
    </Wrapper>
  );
};
export default Popup;
