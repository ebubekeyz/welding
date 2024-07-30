import styled from 'styled-components';

const Wrapper = styled.div`
  .partner {
    margin-top: 18rem;
    padding: 1rem 1rem;
    display: flex;
    gap: 1rem;
    background: rgba(235, 165, 16, 0.5);
    overflow-x: hidden;
    margin: 0 auto;
  }
  .partner-img {
    object-fit: contain;
    height: 4rem;
    transition: var(--transition);
  }
  .partner-img:hover {
    opacity: 0.5;
    transform: scale(0.9);
  }

  .partner-anim {
    animation: change 1s linear 1;
  }
  @keyframes change {
    from {
      opacity: 0.5;
      transform: scale(0.9);
    }
  }
`;

export default Wrapper;
