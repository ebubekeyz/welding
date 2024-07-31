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

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const text = document.querySelector('.form-btn');
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let phone = document.querySelector('.phone');
  let subject = document.querySelector('.subject');
  let mess = document.querySelector('.message');

  try {
    text.textContent = 'Sending...';
    const response = await customFetch.post('/contact', data);
    const message = response.data.msg || 'Registration Failed';
    toast.success(`${message}`);

    name.value = '';

    email.value = '';
    phone.value = '';
    subject.value = '';
    mess.value = '';
    text.textContent = 'Message Sent';
    return redirect('/contact');
  } catch (error) {
    console.log(error);
    const errorMessage = error.response.data.msg;
    toast.error(errorMessage);
    return null;
  }
};

const Contact = () => {
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
          <Form method="post" className="form">
            <h3>Contact Form</h3>
            <article className="form-inner">
              <div className="input-1">
                <input
                  name="name"
                  type="text"
                  className="form-input name"
                  placeholder="Full Name"
                />
                <input
                  name="email"
                  type="email"
                  className="form-input email"
                  placeholder="Email Address"
                />
                <input
                  name="phone"
                  type="text"
                  className="form-input phone"
                  placeholder="Phone Number"
                />

                <input
                  name="subject"
                  type="text"
                  className="form-input subject"
                  placeholder="Subject"
                />
              </div>
              <textarea
                name="message"
                id=""
                className="textarea message"
                placeholder="Message"
              ></textarea>
              <button className="btn form-btn">Send Now</button>
            </article>
          </Form>

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
