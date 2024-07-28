import styled from 'styled-components';

const Wrapper = styled.div`
  .welcome {
    display: grid;
    gap: 1rem;
    place-items: center;
    max-width: 30rem;
    margin: 0 auto;
    text-align: center;
    margin-top: 1rem;
  }
  .add-anim {
    animation: appear 1s linear 1;
  }
  h1 {
    font-size: 1.8rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 0;
  }
  .col {
    color: rgba(235, 165, 16, 0.9);
  }

  @keyframes appear {
    from {
      transform: scale(0.8);
      opacity: 0.5;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (min-width: 800px) {
    .welcome {
      margin-top: 1rem;
      max-width: 60rem;
    }
  }
`;

export default Wrapper;
