import Wrapper from '../assets/wrappers/Navbar';
import {
  FaBarsStaggered,
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa6';
import { FaTimes, FaUserTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Loading from './Loading';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [show2, setShow2] = useState(true);

  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const nav = document.querySelector('.nav');
    const navHeight = document
      .querySelector('.nav')
      .getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
      nav.classList.add('add-bac');
    } else {
      nav.classList.remove('add-bac');
    }
  });

  window.addEventListener('load', () => {
    <Loading />;
  });
  const showTrans = () => {
    const nav = document.querySelector('nav');
    const bar = document.querySelector('.bar');
    const navBody = document.querySelector('.nav-body');
    bar.classList.toggle('toggleBar');
    navBody.classList.toggle('show-trans');
    nav.classList.toggle('hide-nav');
  };

  const closeTrans = () => {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('nav');
    const navBody = document.querySelector('.nav-body');
    bar.classList.toggle('toggleBar');
    navBody.classList.remove('show-trans');
    nav.classList.toggle('hide-nav');
  };

  return (
    <Wrapper>
      <nav className="nav">
        {/* small screen */}
        <div className="small-screen">
          <img src="/logo.png" alt="logo" className="logo" />

          <FaBarsStaggered className="bar" onClick={showTrans} />
        </div>
        {/* end small screen */}

        <ul className="list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">services</NavLink>
          </li>

          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contacts</NavLink>
          </li>
        </ul>

        <article className="socials">
          <div className="detail">
            <FaPhone className="ico" />

            <p>1(800) 123-12345</p>
          </div>
          <div className="detail">
            {' '}
            <FaEnvelope className="ico" />
            <p>help.weldcentral@gmail.com</p>
          </div>
        </article>
      </nav>

      <section className="nav-body">
        <div className="small-header">
          <FaTimes className="times" onClick={closeTrans} />
        </div>

        <ul className="nav-body-list">
          <NavLink to="/" onClick={closeTrans}>
            <li>Home </li>
          </NavLink>

          <NavLink to="/services" onClick={closeTrans}>
            <li>services </li>
          </NavLink>

          <NavLink to="/about" onClick={closeTrans}>
            <li>about </li>
          </NavLink>

          <NavLink to="/portfolio" onClick={closeTrans}>
            <li>Gallery</li>
          </NavLink>

          <NavLink to="/contact" onClick={closeTrans}>
            {' '}
            <li style={{ marginBottom: '1rem' }}>contacts </li>
          </NavLink>

          <div className="socials2">
            <div className="detail2">
              <FaPhone className="ico" />
              <p>1(800) 123-12345</p>
            </div>
            <div className="detail2">
              <FaEnvelope className="ico" />
              <p>help.weldcentral@gmail.com</p>
            </div>
          </div>
        </ul>
      </section>
    </Wrapper>
  );
};
export default Navbar;
