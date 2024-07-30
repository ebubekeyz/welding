import Wrapper from '../assets/wrappers/Services';
import { BreadCrumb, Partner } from '../components';
import { services } from '../utils';

const Services = () => {
  return (
    <Wrapper>
      <div className="services">
        <BreadCrumb
          heading="Services"
          link1="/"
          link2="/services"
          text1="Home"
          text2="Services"
        />
        <div className="team-cont">
          {services.map((item) => {
            const { id, text, title, image } = item;
            return (
              <article className="team-cont-inner" key={id}>
                <div className="team-img-cont">
                  <img src={image} alt={title} className="team-img" />
                </div>
                {/* <h3>{name}</h3> */}
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
      <Partner />
    </Wrapper>
  );
};
export default Services;
