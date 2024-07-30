import styled from 'styled-components';

const Wrapper = styled.div`
  .pop-cont {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1200;
    cursor: pointer;
  }
  .pop-img {
    width: 90%;
    max-width: 27rem;
    border-radius: 0.5rem;
    box-shadow: var(--dark-shadow);
  }
  .portfolio {
    margin: 20rem auto;
    display: grid;
    gap: 1rem;
    justify-items: center;
    width: 85%;
    max-width: 27rem;
    position: relative;
    margin-bottom: 4rem;
    background: #131111;
    margin-top: 20%;
  }
  .portfolio::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: var(--transition);
    z-index: 900;
  }
  .portfolio:hover::after {
    background: rgba(0, 0, 0, 0.3);
  }

  .port-img {
    object-fit: cover;
    height: 40vh;
    width: 100%;
  }

  .portfolio p {
    text-align: center;
    max-width: 25rem;
  }
  @media screen and (min-width: 1300px) {
    .portfolio {
      max-width: 60rem;
      margin-top: 18rem;
    }
    .port-img {
      height: 60vh;
    }
    .portfolio p {
      text-align: center;
      max-width: 50rem;
    }
  }
`;

export default Wrapper;
