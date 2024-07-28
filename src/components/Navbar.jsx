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

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">services</a>
          </li>

          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/portfolio">portfolio</a>
          </li>
          <li>
            <a href="/contacts">contacts</a>
          </li>
        </ul>

        <article className="socials">
          <div className="detail">
            <FaPhone className="ico" />

            <p>+1 333 222 333</p>
          </div>
          <div className="detail">
            {' '}
            <FaEnvelope className="ico" />
            <p>test@gmail.com</p>
          </div>
        </article>
      </nav>

      <section className="nav-body">
        <div className="small-header">
          <FaTimes className="times" onClick={closeTrans} />
        </div>

        <ul className="nav-body-list">
          <a href="/">
            <li>Home </li>
          </a>

          <a href="/services">
            <li>services </li>
          </a>

          <a href="/about">
            <li>about </li>
          </a>

          <a href="/portfolio">
            <li>portfolio </li>
          </a>

          <a href="/contacts">
            {' '}
            <li style={{ marginBottom: '1rem' }}>contacts </li>
          </a>

          <div className="socials2">
            <div className="detail2">
              <FaPhone className="ico" />
              <p>+1 333 222 333</p>
            </div>
            <div className="detail2">
              <FaEnvelope className="ico" />
              <p>test@gmail.com</p>
            </div>
          </div>
        </ul>
      </section>
    </Wrapper>
  );
};
export default Navbar;
