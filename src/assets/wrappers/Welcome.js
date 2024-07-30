import styled from 'styled-components';

const Wrapper = styled.div`
  .welcome {
   
    width:95%;
    max-width: 30rem;
    margin: 1rem auto;
    text-align: center;
   
    z-index: -300;
  }
  .add-anim {
    animation: appear 1s linear 1;
  }
  h1 {
    font-size: 1.8rem;
    font-family: font-family: 'Bebas Neue', sans-serif;
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
    
   
      max-width: 40rem;
    }
  }
`;

export default Wrapper;
