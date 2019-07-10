import classnames from 'classnames';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Header, Sidebar } from '../../components';

interface ContactUsProps {
  handleSubmit: any;
  valid: boolean;
}
const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const handleSubmitForm = (values: any) => {
  console.log(values);
};
const requiredString = (value: string) =>
  !value || value === ' ' ? 'This field I required' : undefined;
const requiredEmail = (value: string | undefined) => {
  if (value) console.log(emailRegex.test(value));
  return value && value.match(emailRegex) ? undefined : 'Invalid Email';
};

const renderInput = ({input, meta}: any) => {
  const formFieldClass = classnames('form-field', {
    'has-error': meta.error && meta.touched
  });
  return (
    <div className={formFieldClass}>
      <label htmlFor={input.name}>{input.name}:</label>
      <div className="input-container">
        {input.name === 'message' ? (
          <textarea
            {...input}
            errormessage={meta.error}
            type="text"
            className={meta.error && meta.touched ? 'has-error' : null}
          />
        ) : (
          <input
            {...input}
            errormessage={meta.error}
            type="text"
            className={meta.error && meta.touched ? 'has-error' : null}
          />
        )}

        <span />
        <p className="error">{meta.error}</p>
      </div>
    </div>
  );
};

const ContactUs: React.FunctionComponent<ContactUsProps> = (props) => {
  return (
    <div className="contact-us">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="contact-us-form-container">
          <h1>Contact Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptate, temporibus vitae tenetur voluptatem cupiditate quam
            consectetur reprehenderit repellendus nemo. Ipsam harum quidem ipsa,
            eveniet mollitia repellendus nemo architecto eaque.
          </p>
          <form className="contact-form" onSubmit={props.handleSubmit}>
            <Field
              name="name"
              component={renderInput}
              validate={requiredString}
            />
            <Field
              name="email"
              component={renderInput}
              validate={requiredEmail}
            />
            <Field
              name="topic"
              component={renderInput}
              validate={requiredString}
            />
            <Field
              name="message"
              component={renderInput}
              validate={requiredString}
            />
            <div className="submit-button-container">
              <button
                disabled={!props.valid}
                type="submit"
                className="submit-button"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({form: 'contact_us_form', onSubmit: handleSubmitForm})(
  ContactUs
);
