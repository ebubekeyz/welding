import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Team';
import { team } from '../utils';

const Team = () => {
  return (
    <Wrapper>
      <div className="team">
        <h2>Our Team</h2>
        <div className="team-cont">
          {team.slice(0, 3).map((item) => {
            const { id, name, text, link, title, img } = item;
            return (
              <article className="team-cont-inner" key={id}>
                <div className="team-img-cont">
                  <img src={img} alt={name} className="team-img" />
                </div>
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{text}</p>

                <h5>
                  <Link to={link}>Read More</Link>
                </h5>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default Team;
