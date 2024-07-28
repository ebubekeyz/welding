import Wrapper from '../assets/wrappers/Quote';
import { Form } from 'react-router-dom';
const Quote = () => {
  return (
    <Wrapper>
      <div className="quote">
        <Form method="post" className="form">
          <h2>Free Quote</h2>
          <article className="form-inner">
            <div className="input-1">
              <input
                name="name"
                type="text"
                className="form-input"
                placeholder="Full Name"
              />
              <input
                name="email"
                type="text"
                className="form-input"
                placeholder="Email Address"
              />
              <input
                name="phone"
                type="text"
                className="form-input"
                placeholder="Phone Number"
              />
            </div>
            <textarea
              name="message"
              id=""
              className="textarea"
              placeholder="Message"
            ></textarea>
            <button className="btn form-btn">Send Now</button>
          </article>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Quote;
