import Wrapper from '../assets/wrappers/Landing';
import {
  Founder,
  HomeServices,
  Partner,
  Portfolio,
  Quote,
  Team,
  Welcome,
} from '../components';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <Wrapper>
      <section className="landing">
        <Hero />
        <Welcome />
        <Portfolio />
        <HomeServices />
        <Founder />
        <Team />
        <Quote />
        <Partner />
      </section>
    </Wrapper>
  );
};
export default Landing;
