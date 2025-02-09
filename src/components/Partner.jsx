import Wrapper from '../assets/wrappers/Partner';

const Partner = () => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const partner = document.querySelectorAll('.partner-img');
    partner.forEach((item) => {
      const partnerHeight = item.getBoundingClientRect().height;

      if (scrollHeight > partnerHeight) {
        item.classList.add('partner-anim');
      } else {
        item.classList.remove('partner-anim');
      }
    });
  });
  return (
    <Wrapper>
      <div className="partner">
        <img src="/partner1.png" alt="partner" className="partner-img" />
        <img src="/partner2.png" alt="partner" className="partner-img" />
        <img src="/partner3.png" alt="partner" className="partner-img" />
        <img src="/partner4.png" alt="partner" className="partner-img" />
        <img src="/partner5.png" alt="partner" className="partner-img" />
        <img src="/partner6.png" alt="partner" className="partner-img" />
        <img src="/partner7.png" alt="partner" className="partner-img" />
      </div>
    </Wrapper>
  );
};
export default Partner;
