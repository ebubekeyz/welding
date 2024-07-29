import Wrapper from '../assets/wrappers/SingleBlog';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { blog } from '../utils';
import { useEffect, useState } from 'react';
import { BreadCrumb } from '../components';
import { FaEnvelope } from 'react-icons/fa6';

export const loader = async ({ params }) => {
  const blogItem = blog.find((item) => item.id === Number(params.id));

  return { blogItem };
};
const SingleBlog = () => {
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
          <form className="form">
            <div className="flex-inner-form">
              <input
                type="text"
                className="form-input"
                placeholder="Email Address"
              />
              <FaEnvelope type="submit" className="envelope2" />
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
                    <a href={`singleBlog/${id}`}>
                      <p>{text.slice(0, 69)}...</p>
                    </a>
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
