import styled from 'styled-components';

const Wrapper = styled.div`
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
    // gap: 1rem;
  }
  .port-btn {
    text-transform: uppercase;
  }
  .port-img {
    object-fit: cover;
    transition: var(--transition);
  }
  .menu-item {
    transition: var(--transition);
    cursor: pointer;
    position: relative;
    height: 15rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
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
    background: rgba(0, 0, 0, 0.2);

    transition: var(--transition);
  }
  .menu-item:hover::after {
    background: rgba(0, 0, 0, 0);
  }

  /* .item-info {
    padding: 1.5rem;
  }
  .item-info header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .item-info h5 {
    font-weight: 500;
  }
  .item-price {
    background: var(--primary-500);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    letter-spacing: var(--letterSpacing);
    border-radius: var(--borderRadius);
  } */

  /* .item-text {
    line-height: 2;
    color: var(--grey-500);
  }*/

  /* .port-center {
    justify-items: center;
  } */
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
