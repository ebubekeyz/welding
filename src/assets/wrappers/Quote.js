import styled from 'styled-components';

const Wrapper = styled.div`
  .quote {
    padding: 4rem 1rem;
    margin: 4rem 0;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
      url('/hero-img-3.jpg') center/cover fixed;
  }
  .input-1 {
    display: grid;
    gap: 1rem;
  }
  .form-inner {
    display: grid;
    gap: 2rem;
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

  .form h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-btn {
    width: 12rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 900px) {
    .input-1 {
      display: flex;
      gap: 2rem;
    }
    .quote {
      padding: 4rem 5rem;
    }
  }
`;

export default Wrapper;
