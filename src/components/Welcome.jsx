import Wrapper from '../assets/wrappers/Welcome';

const Welcome = () => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const welcome = document.querySelector('.welcome');
    const welcomeHeight = document
      .querySelector('.welcome')
      .getBoundingClientRect().height;

    if (scrollHeight > welcomeHeight) {
      welcome.classList.add('add-anim');
    } else {
      welcome.classList.remove('add-anim');
    }
  });

  return (
    <Wrapper>
      <div className="welcome">
        <h1>
          Welcome to <span className="col">Weld Central!</span>
        </h1>
        <p>
          Your ultimate destination for all things welding! Whether you're a
          seasoned professional or just starting out in the world of welding,
          we've got you covered. Explore our extensive range of welding
          equipment, tools, and accessories designed to meet your every need.
        </p>
      </div>
    </Wrapper>
  );
};
export default Welcome;
