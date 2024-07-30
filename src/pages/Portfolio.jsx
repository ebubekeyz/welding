import { useState } from 'react';
import Wrapper from '../assets/wrappers/Port';
import { BreadCrumb, Partner } from '../components';
import { menu } from '../utils';

import {
  FaMap,
  FaMapLocation,
  FaMapLocationDot,
  FaMapPin,
  FaSearchengin,
} from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Portfolio = () => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const menu = document.querySelectorAll('.menu-item2');
    menu.forEach((item) => {
      const menuHeight = item.getBoundingClientRect().height;

      if (scrollHeight > menuHeight) {
        item.classList.add('add-anim');
      } else {
        item.classList.remove('add-anim');
      }
    });
  });
  const [people, setPeople] = useState(menu);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  // useEffect(() => {
  //   let sliderId = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => {
  //     clearInterval(sliderId);
  //   };
  // }, [currentPerson]);
  const [show, setShow] = useState([]);
  const [show2, setShow2] = useState(true);
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const removePop = () => {
    setShow('');
  };

  const displayImage = () => {
    setShow(<Popup onClick={removePop} />);
  };

  return (
    <Wrapper>
      <BreadCrumb
        heading="Gallery"
        link1="/"
        link2="/portfolio"
        text1="Home"
        text2="Gallery"
      />
      {show ? <div id="pop">{show}</div> : ''}
      <section className="about-main">
        <div className="btn-container">
          {categories.map((category) => {
            return (
              <button
                type="button"
                className="btn port-btn"
                key={category}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="port-center">
          {menuItems.map((item) => {
            const { id, img, title, price, desc, name } = item;
            return (
              <article key={id} className="menu-item">
                <div className="menu-item2">
                  <img
                    src={img}
                    alt={title}
                    className={`img port-img ${name}`}
                  />
                </div>
                <div className="item-info">
                  <header>
                    <FaSearchengin className="icon" onClick={displayImage} />
                    <a href={`/singlePortfolio/${id}`}>
                      {' '}
                      <FaMap className="icon" />
                    </a>
                  </header>
                  <h4 className="item-text">{desc}</h4>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Partner />
    </Wrapper>
  );
};
export default Portfolio;
