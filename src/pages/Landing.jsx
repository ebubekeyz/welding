import Wrapper from '../assets/wrappers/Landing';
import { HomeServices, Portfolio, Welcome } from '../components';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <Wrapper>
      <section className="landing">
        <Hero />
        <Welcome />
        <Portfolio />
        <HomeServices />
      </section>
    </Wrapper>
  );
};
export default Landing;
