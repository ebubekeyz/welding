import styled from 'styled-components';

const Wrapper = styled.div`
  .foot-blog-img {
    width: 2rem;
  }
  .footer {
    padding: 2rem;

    background: #131111;
  }
  .footer h1 {
    font-size: 2rem;
    letter-spacing: 0;
  }
  .footer p {
    color: var(--clr-grey-8);
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
  }

  .form {
    margin: 0 auto;
    display: grid;
    gap: 1rem;
  }
  .form-input {
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;
  }

  .footer-second {
    display: grid;
    place-items: center;
    gap: 1rem;
    text-align: center;
    margin-top: 4rem;
  }

  .socials {
    display: block;
  }
  .ico,
  .footer-icon {
    font-size: 1.2rem;
    color: rgba(235, 165, 16, 0.9);
  }
  .detail {
    display: flex;

    gap: 1rem;
  }

  .block {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    color: rgba(235, 165, 16, 0.9);
  }

  .circle {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .detail p {
    font-size: 1rem;
    color: var(--clr-grey-9);
  }

  .footer-logo {
    width: 7rem;
  }
  .block p {
    transition: var(--transition);
  }
  .block p:hover {
    color: rgba(235, 165, 16, 0.9);
  }
  .flex-inner-form {
    position: relative;
  }
  .footer-third {
    margin-top: 4rem;
  }
  .envelope {
    position: absolute;
    top: 15px;
    right: 0;
    margin-right: 15px;
    color: var(--clr-grey-8);
  }
  .sub-btn {
    width: 100%;
  }
  .footer-second p {
    max-width: 30rem;
  }
  .third {
    display: grid;
    gap: 0.1rem;
  }
  @media screen and (min-width: 900px) {
    .footer {
      display: flex;
      justify-content: space-between;
      gap: 3rem;
    }

    .socials {
      display: flex;
      column-gap: 1rem;
      align-items: center;
    }

    .footer-second,
    .footer-third {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
