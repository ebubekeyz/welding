import { useState } from 'react';
import Wrapper from '../assets/wrappers/Portfolio';
import { menu } from '../utils';
import Popup from './Popup';
import {
  FaMap,
  FaMapLocation,
  FaMapLocationDot,
  FaMapPin,
  FaSearchengin,
} from 'react-icons/fa6';
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Portfolio = () => {
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
  // const displayImage = (img) => {
  //   setShow(<Popup src={img} id="pop" />);
  // };

  return (
    <>
      {show2 && <div id="pop">{show}</div>}
      <Wrapper>
        <section>
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
                <article
                  key={id}
                  className="menu-item"
                  // onClick={() => displayImage(img)}
                >
                  <div className="menu-item2">
                    <img
                      src={img}
                      alt={title}
                      className={`img port-img ${name}`}
                    />
                  </div>
                  <div className="item-info">
                    <header>
                      <FaSearchengin className="icon" />
                      <FaMap className="icon" />
                    </header>
                    <h4 className="item-text">{desc}</h4>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </Wrapper>
    </>
  );
};
export default Portfolio;
