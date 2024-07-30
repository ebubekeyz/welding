import Wrapper from '../assets/wrappers/SingleTeam';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { team } from '../utils';
import { useEffect, useState } from 'react';
import { BreadCrumb } from '../components';
import { FaEnvelope } from 'react-icons/fa6';
import { profile } from '../utils';
import { nanoid } from 'nanoid';
import { FaAngleDoubleRight } from 'react-icons/fa';

export const loader = async ({ params }) => {
  const teamItem = team.find((item) => item.id === Number(params.id));

  return { teamItem };
};
const SingleTeam = () => {
  const [loading, setLoading] = useState(true);
  //   const [jobs, setJobs] = useState(profile);
  const [currentItem, setCurrentItem] = useState(0);
  const { teamItem } = useLoaderData();
  const { id, img, category, text, title, name, desc, team } = teamItem;

  const {
    company,
    dates,
    duties,
    title: tit,
  } = Object.values(teamItem.profile)[currentItem];

  const dutyMap = duties.map((duty, index) => {
    const id = nanoid();
    return { id, duty };
  });
  console.log(dutyMap);
  return (
    <Wrapper>
      <BreadCrumb
        heading={category}
        link1="/"
        link2="#"
        text1="Home"
        text2="Blog"
      />
      <div className="team">
        <article>
          <div className="team-cont">
            <article className="team-cont-inner">
              <div className="team-img-cont">
                <img src={img} alt={name} className="team-img" />
              </div>
              <h3 style={{ marginTop: '1rem' }}>{name}</h3>
              <h4>{title}</h4>
            </article>
          </div>
        </article>
        <article>
          <div className="btn-container">
            {Object.values(teamItem.profile).map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentItem(index)}
                  className={
                    index === currentItem ? 'job-btn active-btn' : 'job-btn'
                  }
                >
                  {item.company}
                </button>
              );
            })}
          </div>

          <article className="job-info">
            <h3>{tit}</h3>
            {/* <span className="job-company">{company}</span> */}
            {/* <p className="job-date">{dates}</p> */}
            <div>
              {duties.map((duty, index) => {
                const id = nanoid();
                // console.log(id);
                return (
                  <div key={id} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p className="dut">{duty}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </article>
      </div>
    </Wrapper>
  );
};
export default SingleTeam;
