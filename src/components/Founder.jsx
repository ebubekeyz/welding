import Wrapper from '../assets/wrappers/Founder';

const Founder = () => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const founder = document.querySelector('.founder');
    const founderHeight = document
      .querySelector('.founder')
      .getBoundingClientRect().height;

    if (scrollHeight > founderHeight) {
      founder.classList.add('add-anim');
    } else {
      founder.classList.remove('add-anim');
    }
  });
  return (
    <Wrapper>
      <div className="founder">
        <article className="founder-info">
          <h2>Scott Parker</h2>
          <h3>Founder</h3>
          <p>
            Scott Parker, a gritty visionary with a passion for precision,
            founded Weld Central from the cluttered garage of his modest home.
            Armed with little more than a second-hand welding torch and an
            unyielding drive, Scott transformed his humble beginnings into a
            thriving enterprise. His commitment to quality and innovation
            quickly earned him a reputation for excellence, propelling Welding
            Central into a leading position within the industry. With a blend of
            hands-on expertise and forward-thinking technology, Scott's company
            not only met the rigorous demands of modern construction but also
            set new standards in the field, all while staying true to the core
            values of integrity and craftsmanship that first ignited his
            entrepreneurial spirit.
          </p>
          <img src="/signature.png" alt="" className="signature" />
        </article>
        <img src="/scott.jpg" alt="" className="founder-img" />
      </div>
    </Wrapper>
  );
};
export default Founder;
