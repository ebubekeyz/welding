import { useLoaderData } from 'react-router-dom';
import { menu } from '../utils';
import { useEffect, useState } from 'react';
import { BreadCrumb } from '../components';
import Wrapper from '../assets/wrappers/SinglePortfolio';

export const loader = async ({ params }) => {
  const portfolioItem = menu.find((item) => item.id === Number(params.id));

  return { portfolioItem };
};

const SinglePortfolio = () => {
  const [show, setShow] = useState([]);
  const { portfolioItem } = useLoaderData();
  const { id, desc, img, category, text } = portfolioItem;

  //   useEffect(() => {
  //     const bodyMain = document.querySelector('.body-main');
  //     bodyMain.innerHTML = `${body}`;
  //     console.log(bodyMain);
  //   }, []);

  const removePop = () => {
    setShow('');
  };
  const displayImage = () => {
    setShow(
      <Wrapper>
        <div className="pop-cont" onClick={removePop}>
          <img src={img} alt="image" className="pop-img" />
        </div>
      </Wrapper>
    );
  };

  return (
    <Wrapper>
      <BreadCrumb
        heading={category}
        link1="/"
        link2="/about"
        text1="Home"
        text2="About"
      />
      {show ? <div id="pop">{show}</div> : ''}
      <div className="portfolio" onClick={displayImage}>
        <img className="port-img" src={img} alt="portfolio" />

        <h4>{desc}</h4>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};
export default SinglePortfolio;
