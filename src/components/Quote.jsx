import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/Quote';
import { Form, redirect } from 'react-router-dom';
import { customFetch } from '../utils';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const text = document.querySelector('.form-btn');
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let phone = document.querySelector('.phone');

  let mess = document.querySelector('.message');

  try {
    text.textContent = 'Sending...';
    const response = await customFetch.post('/contact', data);
    const message = response.data.msg;
    toast.success(`${message}`);

    name.value = '';

    email.value = '';
    phone.value = '';

    mess.value = '';
    text.textContent = 'Message Sent';
    return redirect('/');
  } catch (error) {
    console.log(error);
    const errorMessage = error.response.data.msg;
    toast.error(errorMessage);
    return null;
  }
};

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
                className="form-input name"
                placeholder="Full Name"
              />
              <input
                name="email"
                type="text"
                className="form-input email"
                placeholder="Email Address"
              />
              <input
                name="phone"
                type="text"
                className="form-input phone"
                placeholder="Phone Number"
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
      </div>
    </Wrapper>
  );
};
export default Quote;
