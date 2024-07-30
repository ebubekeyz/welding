import styled from 'styled-components';

const Wrapper = styled.div`
  .team {
    margin-top: 22rem;
    padding: 0 1rem;
    margin-bottom: 4rem;
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
  }
  .team-cont-inner p {
    text-align: center;
    padding: 0 0.6rem;
  }

  .team-cont-inner h5 {
    border-top: 1px solid var(--clr-grey-3);
    text-align: center;
    width: 100%;
    padding: 0.5rem;
    text-transform: uppercase;
  }
  .team-img {
    height: 20rem;
    object-fit: cover;
  }
  .team-img-cont {
    height: 20rem;
    position: relative;
    width: 100%;
    transition: var(--transition);
    cursor: pointer;
  }
  h4 {
    margin-bottom: 2rem;
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

  .jobs-center {
    width: 80vw;
    margin: 5rem auto;
    max-width: var(--max-width);
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 0rem;
    flex-wrap: wrap;
    margin: 2rem 0;
    margin-bottom: 0;
  }

  .job-btn {
    background: #1a1a1a;
    border-color: transparent;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    transition: var(--transition);
    padding: 0.9rem 0.9rem;
  }
  .job-btn:hover {
    background: rgba(235, 165, 16, 0.3);
  }
  .active-btn {
    background: rgba(235, 165, 16, 0.3);
  }

  .job-info {
    background: #1a1a1a;
    border-top: 2px solid rgba(235, 165, 16, 0.3);
    padding: 2rem;
  }
  .job-company {
    text-transform: uppercase;
    color: var(--grey-700);
    background: var(--grey-300);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    margin: 0.75rem 0;
  }
  .job-date {
    color: var(--grey-500);
    letter-spacing: var(--letterSpacing);
    margin-bottom: 2rem;
  }

  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .job-icon {
    color: var(--primary-500);
  }

  .job-desc p {
    color: var(--grey-700);
    line-height: 1.5;
  }

  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      margin-bottom: 0rem;
      margin: 0rem 0;
    }
    .job-btn {
      margin-bottom: 0rem;
    }
    .job-btn:hover {
      box-shadow: -2px 0px rgba(235, 165, 16, 0.3);
    }
    .active-btn {
      box-shadow: -2px 0px rgba(235, 165, 16, 0.3);
    }
  }

  @media screen and (min-width: 900px) {
    .team {
      margin-top: 18rem;
      margin-bottom: 4rem;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 400px 1fr;

      width: 100%;
      gap: 4rem;
    }
  }
`;

export default Wrapper;
