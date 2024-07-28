import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/BreadCrumb';

const BreadCrumb = ({ heading, link1, link2, text1, text2 }) => {
  return (
    <Wrapper>
      <section className="breadcrumb">
        <div className="breadcrumb-inner">
          <h1>{heading}</h1>
          <ul className="inner-text">
            <Link to={link1}>
              <li>{text1}</li>
            </Link>
            <li className="slash">/</li>
            <a href={link2}>
              <li>{text2}</li>
            </a>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};
export default BreadCrumb;
