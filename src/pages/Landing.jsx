import Wrapper from '../assets/wrappers/Landing';
import { Portfolio, Welcome } from '../components';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <Wrapper>
      <section className="landing">
        <Hero />
        <Welcome />
        <Portfolio />
      </section>
    </Wrapper>
  );
};
export default Landing;
