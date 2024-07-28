import Wrapper from '../assets/wrappers/Landing';
import {
  Blog,
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
        <Blog />
        <Partner />
      </section>
    </Wrapper>
  );
};
export default Landing;
