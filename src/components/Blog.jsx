import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Blog';
import { blog } from '../utils';

const Blog = () => {
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const blog = document.querySelectorAll('.team-cont-inner');
    team.forEach((item) => {
      const blogHeight = item.getBoundingClientRect().height;

      if (scrollHeight > blogHeight) {
        item.classList.add('anim2');
      } else {
        item.classList.remove('anim2');
      }
    });
  });
  return (
    <Wrapper>
      <div className="team">
        <h2>Our Blogs</h2>
        <div className="team-cont">
          {blog.slice(0, 3).map((item) => {
            const { id, name, text, link, title, img, category } = item;
            return (
              <article className="team-cont-inner" key={id}>
                <a href={`/singleBlog/${id}`} className="team-img-cont">
                  <img src={img} alt={name} className="team-img" />
                  <button className="btn team-btn">Read More</button>
                </a>

                <h4>{title}</h4>
                <p>{text}</p>

                <div className="split">
                  <h5 className="one">
                    <Link to={link}>{name}</Link>
                  </h5>
                  <h5 className="two">{category}</h5>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default Blog;
