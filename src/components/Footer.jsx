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

const Footer = () => {
  return (
    <Wrapper>
      <section className="footer">
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

              <p>+1 333 222 333</p>
            </div>
            <div className="detail">
              {' '}
              <FaEnvelope className="ico" />
              <p>test@gmail.com</p>
            </div>
          </article>
        </article>

        <article className="footer-third">
          <h1>Latest News</h1>
          <div className="block">
            <FaPaperPlane className="circle" />
            <a href="/">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, neque.
              </p>
            </a>
          </div>

          <div className="block">
            <FaPaperPlane className="circle" />
            <a href="/">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, neque.
              </p>
            </a>
          </div>
          <div className="block">
            <FaPaperPlane className="circle" />
            <a href="/">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, neque.
              </p>
            </a>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
export default Footer;
