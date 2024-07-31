import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Footer';
import {
  FaCalendar,
  FaCheck,
  FaCircle,
  FaEnvelope,
  FaIdBadge,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from 'react-icons/fa6';
import moment from 'moment';
import { blog } from '../utils';

const Footer = () => {
  const blogFilter = blog.filter((item) => item.featured === true);

  return (
    <Wrapper>
      <section className="footer">
        <div className="foot-inner"></div>
        <article>
          <h1>Newsletter</h1>
          <p>
            Subscribe to our newsletter for news, tips, and special offers
            delivered right to your inbox.
          </p>

          <Form className="form">
            <div className="flex-inner-form">
              <input
                type="text"
                className="form-input"
                placeholder="Email Address"
              />
              <FaEnvelope className="envelope" />
            </div>
            <button className="btn sub-btn">Submit</button>
          </Form>
        </article>

        <article className="footer-second">
          <img src="/logo.png" alt="logo" className="footer-logo" />
          <p>
            At Weld Central, we pride ourselves on delivering top-notch welding
            solutions with unmatched precision and reliability.
          </p>

          <article className="socials">
            <div className="detail">
              <FaPhone className="ico" />

              <p>1(800) 123-12345</p>
            </div>
            <div className="detail">
              {' '}
              <FaEnvelope className="ico" />
              <p>help.weldcentral@gmail.com</p>
            </div>
          </article>
        </article>

        <article className="footer-third">
          <h1>Latest News</h1>
          <div className="third">
            {blogFilter.slice(0, 3).map((item) => {
              const { id, text, img } = item;
              return (
                <div className="block" key={id}>
                  <img src={img} alt="image" className="foot-blog-img" />
                  <a href={`/singleBlog/${id}`}>
                    <p>{text.slice(0, 69)}...</p>
                  </a>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
export default Footer;
