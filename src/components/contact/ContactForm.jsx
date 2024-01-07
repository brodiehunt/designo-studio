import styled from "styled-components";
import { useState } from "react";
import errorIcon from '../../assets/contact/desktop/icon-error.svg';

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 2;

  .form-group {
    width: 100%;
    position: relative;
  }

  .form-error {
    position: absolute;
    right: 0.86rem;
    top: 0.7rem;
    display: flex; 
    align-items: center;
    gap: 1rem;
    font-size: 0.75rem;

    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  input, textarea {
    background: inherit;
    border: none;
    border-bottom: 1px solid var(--primary-light);
    padding: 0.7rem 0.86rem;
    font-family: 'Jost', sans-serif;
    color: var(--primary-light);
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.625rem;
    width: 100%;
  }

  input::placeholder, textarea::placeholder {
    color: var(--primary-light);
    opacity: 0.6;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.625rem;
  }

  input:focus, textarea:focus {
    border-bottom: 3px solid var(--primary-light);
    outline: none;
  }

  textarea {
    margin-bottom: 2.5rem;
  }
`;

const ButtonStyles = styled.button`
  border: none;
  display: block;
  width: fit-content;
  color: ${({$theme}) => $theme === 'dark' ? 'var(--primary-light)' : 'var(--secondary-dark)'};
  background-color: ${({$theme}) => $theme === 'dark' ? 'var(--primary)' : 'var(--primary-light)'};
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  padding: 1.12rem 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in all;
  position: relative;
  z-index: 2;
  align-self: center;


  &:hover, &:focus {
    color: var(--primary-light);
    background-color: var(--secondary);
  }

  @media (min-width: 768px) {
    align-self: end;
  }
`

export default function ContactForm() {
  const [formState, setFormState] = useState({name: '', email: '', phone: '', message: ''});
  const [formErrors, setFormErrors] = useState({name: '', email: '', phone: '', message: ''});

  const handleChange = (event) => {
    const {value, name} = event.target;
    setFormState({...formState, [name]: value})
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length < 1) {
      return 'Email Required!';
    }
    if (!emailRegex.test(email)) {
      return 'Email must be valid!';
    }
    return '';
  }
  const validateForm = () => {
    const newErrors = {
      name: formState.name.length > 0 ? '' : 'Name required!',
      email: validateEmail(formState.email),
      phone: formState.phone.length > 0 ? '' : 'Phone required!',
      message: formState.message.length > 0 ? '' : 'Message Required!',
    }

    setFormErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.phone && !newErrors.message) {
      // Submit form
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  }

  return (
    <FormStyles onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formState.name}
          placeholder="Name"
          aria-label="Your Name"
          onChange={handleChange}
        />
        {formErrors.name &&
          <div className="form-error">
            {formErrors.name} 
            <img className="error-icon" src={errorIcon}/>
          </div>
        }
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formState.email}
          placeholder="Email Address"
          aria-label="Your Email Address"
          onChange={handleChange}
        />
        {formErrors.email &&
          <div className="form-error"> 
            {formErrors.email}
            <img className="error-icon" src={errorIcon}/>
          </div>
        }
      </div>
      <div className="form-group">
        <input
        type="tel"
        name="phone"
        value={formState.phone}
        placeholder="Phone"
        aria-label="Your Name"
        onChange={handleChange}
        />
        {formErrors.phone &&
          <div className="form-error">
            {formErrors.phone}  
            <img className="error-icon" src={errorIcon}/>
          </div>
        }
      </div>
      <div className="form-group">
        <textarea 
          name="message"
          value={formState.message}
          placeholder="Your Message"
          aria-label="Your Message"
          rows="4"
          onChange={handleChange}
        ></textarea>
         {formErrors.message &&
          <div className="form-error">
            {formErrors.message} 
            <img className="error-icon" src={errorIcon}/>
          </div>
        }
      </div>
      

      <ButtonStyles
        $theme="light" 
        type="submit"
      >
        Submit
      </ButtonStyles>

    </FormStyles>
  )
}