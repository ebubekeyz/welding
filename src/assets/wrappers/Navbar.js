import styled from 'styled-components';

const Wrapper = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    z-index: 100;
    visibility: visible;
    position: fixed;
    top: 0;

    width: 100vw;
  }
  .add-bac {
    background: #131111;
  }
  .hide-nav {
    visibility: hidden;
  }
  .small-screen {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 1rem;
    padding-right: 2rem;
  }
  .bar {
    font-size: 1.7rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .toggleBar {
    transform: rotate(90deg);
  }
  .logo {
    width: 3.5em;
  }

  .list,
  .socials {
    display: none;
    transition: var(--transition);
  }
  .icon:hover {
    outline: 1px solid rgba(235, 165, 16, 0.9);
  }
  .socials2 {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .detail2 p {
    color: var(--clr-grey-9);
    font-size: 0.9rem;
    text-transform: lowercase;
  }
  .list li {
    text-transform: uppercase;
    transition: var(--transition);
  }
  .list li a {
    color: var(--clr-grey-9);
  }
  .icon {
    outline: 1px solid white;
    padding: 0.5rem;
    border-radius: 100%;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: var(--transition);
  }
  .ico {
    font-size: 1.2rem;
    color: rgba(235, 165, 16, 0.9);
  }
  .detail {
    display: flex;
    margin-top: 1.5rem;
    gap: 1rem;
  }
  .detail p {
    font-size: 0.7rem;
    color: var(--clr-grey-9);
  }

  .small-header {
    display: flex;
    justify-content: end;
    padding: 1rem;
    background: rgba(0, 0, 0, 1);
  }

  .times {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .nav-body {
    width: 0em;
    overflow-x: hidden;
    transition: var(--transition);
    position: fixed;
    top: 0;
    left: 0;

    z-index: 200;
  }

  .show-trans {
    width: 100%;
  }
  .nav-body-list {
    transition: var(--transition);
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.9);
    height: 100vh;
    text-align: center;
  }
  .nav-body-list li {
    cursor: pointer;

    padding: 1rem;
  }

  .nav-body-list a {
    color: var(--clr-grey-10);
  }

  .nav-body-list li:hover {
    padding-left: 2rem;
    background: rgba(235, 165, 16, 0.3);
  }
  @media screen and (min-width: 1120px) {
    .logo {
      width: 5em;
    }
    .small-screen {
      padding: 1rem 2rem;
      width: 0;
    }
    .nav-body {
      display: none;
    }
    .list,
    .socials {
      display: flex;
      column-gap: 2.5rem;
      align-items: center;
      padding-right: 2rem;
    }
    .bar {
      display: none;
    }
    .nav {
      visibility: visible;
    }
    .list li a:hover {
      color: rgba(235, 165, 16, 0.9);
      cursor: pointer;
    }

    .icon:hover {
      outline: 1px solid rgba(235, 165, 16, 0.9);
    }
  }
`;

export default Wrapper;
