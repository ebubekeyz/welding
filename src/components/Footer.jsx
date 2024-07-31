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
import { blog, customFetch } from '../utils';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Footer = () => {
  const [footer, setFooter] = useState([
    {
      email: '',
    },
  ]);

  const handleSubmit = async (e) => {
    const text = document.querySelector('.form-btn');
    const email = document.querySelector('.email');
    e.preventDefault();
    const emailValue = e.target.email.value;

    setFooter({
      email: emailValue,
    });
    try {
      text.textContent = 'Sending...';
      const response = await customFetch.post('/notification', {
        email: footer.email,
      });

      toast.success(`Email Subscription Successful`);
      email.value = '';
      text.textContent = 'Sent';
      return null;
    } catch (error) {
      console.log(error);

      toast.error('Something went wrong');
      return null;
    }
  };
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

          <form onSubmit={handleSubmit} className="form">
            <div className="flex-inner-form">
              <input
                type="email"
                name="email"
                className="form-input email"
                placeholder="Email Address"
              />
              <FaEnvelope className="envelope" />
            </div>
            <button type="submit" className="btn sub-btn">
              Submit
            </button>
          </form>
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
