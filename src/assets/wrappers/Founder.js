import styled from 'styled-components';

const Wrapper = styled.div`
  .founder {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    box-shadow: var(--dark-shadow);
    background: #131111;
    margin-bottom: 2rem;
  }
  .founder-img {
    object-fit: cover;
  }
  .founder-info {
    padding: 2rem;
  }
  .founder-info h3 {
    color: rgba(235, 165, 16, 0.7);
  }
  .signature {
    width: 12rem;
  }
  @media screen and (min-width: 900px) {
    .founder-img {
      width: 50%;
    }
    .founder-info {
      width: 50%;
      padding-left: 5rem;
      padding-right: 5rem;
    }
    .founder {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 4rem;

      background: #131111;
    }
  }
`;

export default Wrapper;
