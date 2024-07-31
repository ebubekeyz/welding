import Wrapper from '../assets/wrappers/SingleBlog';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { blog, customFetch } from '../utils';
import { useEffect, useState } from 'react';
import { BreadCrumb } from '../components';
import { FaEnvelope } from 'react-icons/fa6';
import { toast } from 'react-toastify';

export const loader = async ({ params }) => {
  const blogItem = blog.find((item) => item.id === Number(params.id));

  return { blogItem };
};
const SingleBlog = () => {
  const [send, setSend] = useState('Subscribe');
  const [footer, setFooter] = useState({
    email: '',
  });

  const handleSubmit = async (e) => {
    let email = document.querySelector('.email');
    let form = document.querySelector('.form');

    e.preventDefault();

    try {
      setSend('Subscribing...');

      const response = await customFetch.post('/notification', {
        email: footer.email,
      });

      toast.success(`Email Subscription Successful`);
      setFooter({
        email: '',
      });

      setSend('Subscribe');

      return null;
    } catch (error) {
      console.log(error);

      setSend('Subscribe');
      toast.error('Something went wrong');
      setFooter({
        email: '',
      });

      return null;
    }
  };
  const blogFilter = blog.filter((item) => item.featured === true);
  const { blogItem } = useLoaderData();
  const { id, img, category, text, title, name, desc } = blogItem;

  const func = () => {
    const describe = document.querySelector('.desc');

    describe.innerHTML = desc;
  };

  useEffect(() => {
    func();
  }, [func]);
  return (
    <Wrapper>
      <BreadCrumb
        heading={category}
        link1="/"
        link2="#"
        text1="Home"
        text2="Blog"
      />
      <div className="singleBlog">
        <article>
          <h3>Newsletter</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="flex-inner-form">
              <input
                type="text"
                name="email"
                value={footer.email}
                onChange={(e) => {
                  setFooter({ ...footer, [e.target.name]: e.target.value });
                }}
                className="form-input"
                placeholder="Email Address"
              />
              <button type="submit">
                <FaEnvelope className="envelope2" />
              </button>
            </div>
          </form>

          <article className="footer-third">
            <h3>Recent Post</h3>
            <div className="third">
              {blogFilter.slice(0, 3).map((item) => {
                const { id, text, img } = item;
                return (
                  <div className="block" key={id}>
                    <img src={img} alt="image" className="foot-blog-img" />
                    <div>
                      <p>{text.slice(0, 69)}...</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <div className="search">
            <h3>Search</h3>
            <Form className="form">
              <div className="flex-inner-form">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Search for keyword"
                />
                <img src="/search.svg" alt="search" className="btn envelope" />
              </div>
            </Form>
          </div>
        </article>
        <article>
          {' '}
          <div className="team-cont">
            <article className="team-cont-inner">
              <div className="team-img-cont">
                <img src={img} alt={name} className="team-img" />
              </div>

              <h4>{title}</h4>
              <p className="desc"></p>

              <div className="split">
                <h5 className="one">{name}</h5>
                <h5 className="two">{category}</h5>
              </div>
            </article>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};
export default SingleBlog;
