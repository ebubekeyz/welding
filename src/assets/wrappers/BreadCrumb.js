import styled from 'styled-components';

const Wrapper = styled.div`
  .breadcrumb {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -200;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/breadcrumb.jpg') center/cover no-repeat;
    width: 100%;
    height: 40%;
  }
  .breadcrumb-inner {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    gap: 0rem;
    place-items: center;
    width: 100%;
  }

  .slash {
    color: rgba(235, 165, 16, 0.9);
  }
  .inner-text {
    display: flex;
    gap: 1rem;
  }
  .breadcrumb-inner h1 {
    font-size: 2rem;
  }
  .inner-text li {
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .inner-text a {
    color: var(--clr-grey-9);
  }

  .inner-text li:hover {
    color: rgba(235, 165, 16, 0.9);
  }

  @media screen and (min-width: 1130px) {
    .breadcrumb-inner h1 {
      font-size: 3rem;
    }
  }
`;

export default Wrapper;
