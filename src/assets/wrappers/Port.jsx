import styled from 'styled-components';

const Wrapper = styled.div`
  .about-main {
    margin-top: 75%;
    padding: 0 1rem;
  }

  .popup-inner {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    z-index: 500;
    display: grid;
    place-items: center;
  }
  .popup-img {
    width: 80%;
    max-width: 30rem;
    height: 20rem;
    object-fit: cover;
  }
  .menu {
    padding: 0rem 0;
  }

  .btn-container {
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .port-center {
    display: grid;
    transition: var(--transition);
    gap: 2rem;
  }
  .port-btn {
    text-transform: uppercase;
  }
  .port-img {
    object-fit: cover;
    transition: var(--transition);
    /* border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem; */
  }
  .menu-item {
    transition: var(--transition);
    position: relative;
    height: 15rem;
    border-radius: 0.5rem;
    width: 100%;
  }

  .menu-item .img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    cursor: pointer;
  }

  .menu-item::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    transition: var(--transition);
  }
  .menu-item:hover::after {
    background: rgba(0, 0, 0, 0.4);
  }

  .menu-item:hover .item-info {
    display: grid;
  }

  .item-info {
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 1rem;
    position: absolute;
    top: 50%;
    transition: var(--transition);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 100%;
    display: none;
  }
  .item-info header {
    transition: var(--transition);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .item-info h4 {
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.4px;
    text-align: center;
  }
  .item-price {
    background: var(--primary-500);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    letter-spacing: var(--letterSpacing);
    border-radius: var(--borderRadius);
  }

  .icon {
    background: rgba(235, 165, 16, 0.5);
    color: var(--clr-grey-10);
    font-size: 3rem;
    padding: 1rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .icon:hover {
    transform: rotate(90deg);
  }

  .item-text {
    line-height: 2;
    color: var(--grey-500);
  }
  .port-center {
    justify-items: center;
  }

  @media screen and (min-width: 992px) {
    .port-center {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
  @media screen and (min-width: 992px) {
    .port-center {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
  @media screen and (min-width: 1170px) {
    .port-center {
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      place-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }

  .slider-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.9);
    z-index: 800;
  }
  .slide {
    display: grid;
    place-items: center;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transition: var(--transition);
  }
  .person-img {
    width: 80%;
    max-width: 30rem;
    height: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    border: 4px solid var(--primary-200);
    box-shadow: var(--shadow-3);
  }

  .name {
    text-transform: uppercase;
    color: var(--primary-500);
    margin-bottom: 0.75rem;
  }
  .title {
    text-transform: capitalize;
    color: var(--grey-700);
    margin-bottom: 0.75rem;
  }
  .text {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
    color: var(--grey-500);
  }
  .ico {
    font-size: 3rem;
    margin-top: 1rem;
    color: var(--primary-500);
  }
  .prev,
  .next {
    padding: 7rem 1rem;
    position: absolute;
    top: 200px;
    background: var(--grey-500);
    color: var(--white);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;

    place-items: center;
    border-color: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: var(--primary-500);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }

  .times {
    cursor: pointer;
    background: rgba(255, 0, 0, 0.3);
    border-radius: 100%;
    padding: 0.3rem;
    font-size: 1.4rem;
  }
  .close {
    top: 0;
    right: 1rem;
  }
  @media screen and (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .about-main {
      max-width: 1127px;
      margin: 0 auto;
      margin-top: 18rem;
      margin-bottom: 4rem;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
      padding: 7rem 22rem;
    }
  }
  .next-slide {
    transform: translateX(100%);
  }
`;

export default Wrapper;
