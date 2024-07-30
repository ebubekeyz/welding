import styled from 'styled-components';

const Wrapper = styled.div`
  .singleBlog {
    margin-top: 60%;
    margin-bottom: 4rem;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr;

    width: 100%;
    gap: 4rem;
  }
  .foot-blog-img {
    width: 2rem;
  }
  .block p {
    margin: 0;
    padding: 0;
    transition: var(--transition);
  }
  .block {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: rgba(235, 165, 16, 0.9);
  }
  .footer-third {
    margin-top: 4rem;
  }
  .third {
    display: grid;
    gap: 1rem;
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
  .flex-inner-form {
    position: relative;
  }
  .envelope2 {
    position: absolute;
    top: 15px;
    right: 0;
    margin-right: 15px;
    color: var(--clr-grey-8);
    cursor: pointer;
  }
  .envelope {
    position: absolute;
    top: 4px;
    right: 0;
    cursor: pointer;
    margin-right: 15px;
    width: 3.6rem;

    background: transparent;
    color: var(--clr-grey-8);
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

  .team-cont-inner {
    display: grid;
    place-items: center;
    gap: 0.7rem;
    background: #131111;
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
  li {
    margin: 1rem 0;
  }

  .team-cont-inner p {
    text-align: justify;

    padding-bottom: 2rem;
    width: 90%;
  }

  .team-cont-inner h5 {
    border-top: 1px solid var(--clr-grey-3);

    width: 100%;
    padding: 0.5rem;
    text-transform: uppercase;
  }
  .team-img {
    height: 20rem;
    width: 100%;
    object-fit: cover;
  }
  .team-img-cont {
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

  @media screen and (min-width: 900px) {
    .singleBlog {
      margin-top: 18rem;
      margin-bottom: 4rem;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 400px 1fr;

      width: 100%;
      gap: 4rem;
    }
  }
  h4,
  h5 {
    text-align: center;
  }
  .search {
    margin-top: 2rem;
  }
  .split {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .split .one {
    border-right: 1px solid var(--clr-grey-4);
  }
  .split h5 {
    text-align: center;
  }
`;

export default Wrapper;
