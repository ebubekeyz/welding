import { Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Contact';
import { BreadCrumb, Partner } from '../components';
import { toast } from 'react-toastify';
import {
  FaMapLocation,
  FaMapLocationDot,
  FaMapPin,
  FaMarkdown,
  FaMarker,
  FaPencil,
  FaPhone,
} from 'react-icons/fa6';
import { FaHistory, FaMapSigns, FaTimes } from 'react-icons/fa';
import { customFetch } from '../utils';
import { useState } from 'react';

const Contact = () => {
  const [send, setSend] = useState('Send');
  const [contact, setContact] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
    subject: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSend('Sending...');

      const response = await customFetch.post('/contact', {
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        phone: contact.phone,
      });

      toast.success(response.data.msg);
      setContact({
        email: '',
        name: '',
        phone: '',
        message: '',
        subject: '',
      });

      setSend('Send');

      return null;
    } catch (error) {
      console.log(error);

      setSend('Send');
      toast.error('Something went wrong');
      setContact({
        email: '',
        name: '',
        phone: '',
        message: '',
        subject: '',
      });

      return null;
    }
  };
  return (
    <Wrapper>
      <section>
        <BreadCrumb
          heading="Contact"
          link1="/"
          link2="/contact"
          text1="Home"
          text2="Contact"
        />

        <div className="contact">
          <form onSubmit={handleSubmit} className="form">
            <h3>Contact Form</h3>
            <article className="form-inner">
              <div className="input-1">
                <input
                  name="name"
                  value={contact.name}
                  onChange={(e) => {
                    setContact({ ...contact, [e.target.name]: e.target.value });
                  }}
                  type="text"
                  className="form-input name"
                  placeholder="Full Name"
                />
                <input
                  name="email"
                  value={contact.email}
                  onChange={(e) => {
                    setContact({ ...contact, [e.target.name]: e.target.value });
                  }}
                  type="email"
                  className="form-input email"
                  placeholder="Email Address"
                />
                <input
                  name="phone"
                  value={contact.phone}
                  onChange={(e) => {
                    setContact({ ...contact, [e.target.name]: e.target.value });
                  }}
                  type="text"
                  className="form-input phone"
                  placeholder="Phone Number"
                />

                <input
                  name="subject"
                  value={contact.subject}
                  onChange={(e) => {
                    setContact({ ...contact, [e.target.name]: e.target.value });
                  }}
                  type="text"
                  className="form-input subject"
                  placeholder="Subject"
                />
              </div>
              <textarea
                name="message"
                value={contact.message}
                onChange={(e) => {
                  setContact({ ...contact, [e.target.name]: e.target.value });
                }}
                id=""
                className="textarea message"
                placeholder="Message"
              ></textarea>
              <button type="submit" className="btn form-btn">
                {send}
              </button>
            </article>
          </form>

          <article className="contact-info">
            <div className="contact-inner">
              <h3>Contact Info</h3>
              <div className="info-flex2">
                <div className="inner-flex">
                  <FaMapPin className="c-ico" />

                  <p>567 Jacksotts street, San Diego, CA</p>
                </div>

                <div className="inner-flex">
                  <FaPhone className="c-ico" />

                  <p>1(800) 123-12345</p>
                </div>

                <div className="inner-flex">
                  <FaPencil className="c-ico" />
                  <p>help.weldcentral@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-inner">
              <h3>Opening Hours</h3>
              <div className="info-flex">
                <div className="inner-flex">
                  <FaHistory className="c-ico" />

                  <div className="days">
                    <span style={{ fontWeight: 'bold' }}>
                      Monday - Friday:{' '}
                    </span>
                    <span>9:00-17:00</span>
                  </div>
                </div>

                <div className="inner-flex">
                  <FaHistory className="c-ico" />

                  <div className="days">
                    <span style={{ fontWeight: 'bold' }}>Saturday: </span>
                    <span>10:00-15:00</span>
                  </div>
                </div>

                <div className="inner-flex">
                  <FaTimes className="c-ico" />
                  <div className="days">
                    <span style={{ fontWeight: 'bold' }}>Sunday: </span>
                    <span>Closed</span>
                  </div>
                </div>

                <div className="inner-flex">
                  <FaHistory className="c-ico" />

                  <div className="days">
                    <span style={{ fontWeight: 'bold' }}>Holidays: </span>
                    <span>10:00-13:00</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Partner />
      </section>
    </Wrapper>
  );
};
export default Contact;
