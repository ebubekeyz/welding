import styled from 'styled-components';

const Wrapper = styled.div`
  .team {
    margin-top: 4rem;
    padding: 0 1rem;
    margin-bottom: 4rem;
  }

  .team h2 {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }
  .team-cont {
    display: grid;
    gap: 1rem;
  }
  h4 {
    text-align: center;
    width: 90%;
  }

  .team-cont-inner {
    display: grid;
    place-items: center;
    gap: 0.7rem;
    background: #131111;
  }

  .team-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    margin: 0 auto;
    background: transparent;
    border: 2px solid white;
    visibility: hidden;

    z-index: 700;
    transition: var(--transition);
  }
  .team-cont-inner h3,
  h4 {
    padding: 0;
    margin: 0;
  }
  .team-cont-inner h4 {
    color: rgba(235, 165, 16, 0.9);
    padding-top: 2rem;
  }
  .team-cont-inner p {
    text-align: center;
    padding: 0 0.6rem;
    padding-bottom: 2rem;
  }

  .team-cont-inner h5 {
    border-top: 1px solid var(--clr-grey-3);
    text-align: center;
    width: 100%;
    padding: 0.5rem;
    text-transform: uppercase;
  }
  .team-img {
    height: 20rem;
    object-fit: cover;
  }
  .team-img-cont {
    height: 20rem;
    position: relative;
    width: 100%;
    transition: var(--transition);
    cursor: pointer;
  }

  .team-img-cont::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    transition: var(--transition);
  }
  .team-img-cont:hover::after {
    background: rgba(0, 0, 0, 0.5);
  }

  .team-img-cont:hover .team-btn {
    visibility: visible;
  }

  @media screen and (min-width: 900px) {
    .team-cont {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
    .team {
      padding: 0 2rem;
      max-width: 1127px;
      margin: 0 auto;
      margin-bottom: 4rem;
    }
  }

  .split {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .split .one {
    border-right: 1px solid var(--clr-grey-4);
  }
`;

export default Wrapper;
