import styled from 'styled-components';

const Wrapper = styled.div`
  .contact {
    margin-top: 285px;
    padding: 0 1rem;
    margin-bottom: 4rem;
  }
  .c-ico {
    color: rgba(235, 165, 16, 0.9);
  }
  .contact-info {
    display: grid;
    gap: 1rem;
  }
  .days {
    display: flex;
    gap: 1rem;
  }

  .form {
    margin-bottom: 3rem;
  }
  .input-1 {
    display: grid;
    gap: 1rem;
  }
  .form-inner {
    display: grid;
    gap: 1.5rem;
  }
  .form-input {
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;
    text-align: center;
  }
  .form-input::placeholder {
    text-align: center;
    font-style: italic;
  }
  .textarea {
    width: 100%;
    height: 8rem;
    padding-top: 1rem;
    text-align: center;
  }
  .textarea::placeholder {
    text-align: center;
    font-style: italic;
  }
  .inner-flex {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
  .info-flex {
    display: grid;
    gap: 1rem;
  }
  .form h3 {
    margin-bottom: 2rem;
  }

  .form-btn {
    width: 15rem;
  }
  @media screen and (min-width: 900px) {
    .contact {
      display: grid;
      margin-top: 18rem;
      grid-template-columns: 1fr 300px;
      max-width: 1127px;
      margin: 0 auto;
      margin-top: 18rem;
      width: 100%;
      gap: 4rem;
    }
    .input-1 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.9rem;
    }
    .quote {
      padding: 4rem 5rem;
    }
  }
`;

export default Wrapper;
