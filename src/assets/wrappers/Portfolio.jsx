import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8rem;
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
    padding: 5rem 0;
  }

  .btn-container {
    margin: 2rem 0 4rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .port-center {
    width: 100%;
    margin: 0 auto;
    max-width: var(--max-width);
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
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.6px;
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
  .menu-item {
    max-width: 25rem;
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
      width: 95vw;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Wrapper;
