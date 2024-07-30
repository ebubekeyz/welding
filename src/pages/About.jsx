import Wrapper from '../assets/wrappers/About';
import {
  BreadCrumb,
  Founder,
  HomeServices,
  Partner,
  Welcome,
} from '../components';

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
          <Welcome />
          <Founder />
          <HomeServices />
        </div>
        <Partner />
      </section>
    </Wrapper>
  );
};
export default About;
