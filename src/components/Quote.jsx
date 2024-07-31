import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/Quote';
import { Form, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { useState } from 'react';

const Quote = () => {
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
      <div className="quote">
        <form onSubmit={handleSubmit} className="form">
          <h2>Free Quote</h2>
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
                type="text"
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
      </div>
    </Wrapper>
  );
};
export default Quote;
