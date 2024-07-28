import Wrapper from '../assets/wrappers/HomeServices';

const HomeServices = () => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const home = document.querySelectorAll('.home-info');
    home.forEach((item) => {
      const homeHeight = item.getBoundingClientRect().height;

      if (scrollHeight > homeHeight) {
        item.classList.add('anim2');
      } else {
        item.classList.remove('anim2');
      }
    });
  });
  return (
    <Wrapper>
      <div className="homeServices">
        <article className="home-info">
          <img src="/bulb.svg" alt="creativity" className="home-img" />
          <h3>Creativity</h3>
          <p>
            Complex jobs. Difficult installations. Artistic beauty. Creativity
            is found across our wide breadth of work.
          </p>
        </article>
        <article className="home-info">
          <img src="/diamond.svg" alt="creativity" className="home-img" />
          <h3>Reliability</h3>
          <p>
            Our local team is trusted to finish every job according to plan.
            Even when the plans have to change mid-stream.
          </p>
        </article>
        <article className="home-info">
          <img src="/service.svg" alt="creativity" className="home-img" />
          <h3>Services</h3>
          <p>
            From project initiation until final signoff, you’ll have dedicated,
            real people that make service our top priority.
          </p>
        </article>
        <article className="home-info">
          <img src="/search.svg" alt="creativity" className="home-img" />
          <h3>Precision</h3>
          <p>
            In every cut and angle, materials match project specs to ensure
            adherence timelines and sequencing.
          </p>
        </article>
        <article className="home-info">
          <img src="/history.svg" alt="creativity" className="home-img" />
          <h3>History</h3>
          <p>
            For more than 100 years, we have proudly served Southern California,
            with a focus on San Diego County.
          </p>
        </article>
        <article className="home-info">
          <img src="/globe.svg" alt="creativity" className="home-img" />
          <h3>Breadth</h3>
          <p>
            Working with architectural sheet metal, metal cladding, composite
            panels, Trespa, copper, bronze and more.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};
export default HomeServices;
