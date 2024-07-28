import Wrapper from '../assets/wrappers/Portfolio';
import { useEffect, useState } from 'react';
import { menu } from '../utils';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Popup = ({ onClick, id }) => {
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

  return (
    <Wrapper>
      {' '}
      <section className="slider-container" onClick={onClick} id={id}>
        <div className="inner">
          {' '}
          {people.map((person, personIndex) => {
            const { id, img, desc } = person;
            return (
              <article
                className="slide"
                style={{
                  transform: `translateX(${
                    100 * (personIndex - currentPerson)
                  }%)`,
                  opacity: personIndex === currentPerson ? 1 : 0,
                  visibility:
                    personIndex === currentPerson ? 'visible' : 'hidden',
                }}
                key={id}
              >
                <img src={img} alt={desc} className="person-img" />
                {/* <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p> */}
              </article>
            );
          })}
          <div className="chev">
            {' '}
            <button type="button" className="prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button type="button" className="next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Popup;
