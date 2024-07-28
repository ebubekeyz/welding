import styled from 'styled-components';

const Wrapper = styled.div`
  .homeServices {
    display: grid;

    justify-content: center;

    margin: 0 auto;
    text-align: center;
    gap: 2em;
    padding: 0 2rem;
  }
  .home-info h3 {
    padding: 0;
    margin: 0;
  }
  .home-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 0 auto;
    place-items: center;
    text-align: center;
    transition: var(--transition);
  }

  .home-img {
    width: 2.5em;
    margin: 0;
    padding: 0;
    transition: var(--transition);
  }
  .home-info:hover .home-img {
    transform: translateY(-10px);
  }

  @media screen and (min-width: 1300px) {
    .homeServices {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;

      margin: 0 auto;
      text-align: center;
      gap: 2em;
    }
  }
`;

export default Wrapper;
