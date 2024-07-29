import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Team';
import { team } from '../utils';

const Team = () => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const team = document.querySelectorAll('.team-cont-inner');
    team.forEach((item) => {
      const teamHeight = item.getBoundingClientRect().height;

      if (scrollHeight > teamHeight) {
        item.classList.add('anim2');
      } else {
        item.classList.remove('anim2');
      }
    });
  });
  return (
    <Wrapper>
      <div className="team">
        <h2>Our Team</h2>
        <div className="team-cont">
          {team.slice(0, 3).map((item) => {
            const { id, name, text, link, title, img } = item;
            return (
              <article className="team-cont-inner" key={id}>
                <a href={`singleTeam/${id}`} className="team-img-cont">
                  <img src={img} alt={name} className="team-img" />
                  <button className="btn team-btn">View Info</button>
                </a>
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{text}</p>

                <h5>
                  <Link to={`singleTeam/${id}`}>View Info</Link>
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
