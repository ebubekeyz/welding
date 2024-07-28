import Wrapper from '../assets/wrappers/About';
import { BreadCrumb } from '../components';

const About = () => {
  return (
    <Wrapper>
      <section className="about">
        <BreadCrumb
          heading="Who we are"
          link1="/"
          link2="/about"
          text1="Home"
          text2="About"
        />
        <div className="about-main">
          <p>
            At Weld Central, we pride ourselves on delivering top-notch welding
            solutions with unmatched precision and reliability. Established with
            a commitment to excellence, our company specializes in a broad range
            of welding services, from intricate repairs to large-scale
            industrial projects. Leveraging cutting-edge technology and a team
            of highly skilled professionals, we ensure that every weld is
            executed with the highest standards of quality and safety. Our
            mission is to exceed client expectations through innovation,
            integrity, and an unwavering dedication to craftsmanship, making
            Weld Central. the trusted partner for all your welding needs.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};
export default About;
