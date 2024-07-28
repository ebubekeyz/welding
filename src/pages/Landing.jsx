import Wrapper from '../assets/wrappers/Landing';
import { Founder, HomeServices, Portfolio, Team, Welcome } from '../components';
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
      </section>
    </Wrapper>
  );
};
export default Landing;
