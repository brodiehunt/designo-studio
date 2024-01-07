import styled from "styled-components";
import ContactForm from "./ContactForm";
import backgroundCircle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';

const ContactHeroStyles = styled.div`
  position: relative;
  padding: 4.5rem 1.5rem;
  background-color: var(--primary);
  color: var(--primary-light);
  margin-bottom: 7.5rem;
  overflow: hidden;

  .content-container {
    margin-bottom: 3rem;

    h1 {
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.25rem;
      margin-bottom: 1.5rem;
    }

    p {
      text-align: center;
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 1.5625rem;
    }
  }

  .circle1, .circle2 {
      display: block;
      position: absolute;
      width: 18.5rem;
      height: 18.5rem;
      pointer-events: none;
  }

  .circle1 {
    top: 0;
    right: 40%;
    transform: rotate(90deg);

  }

  .circle2 {
    top: 0;
    left: 60%;
  }

  @media (min-width: 786px) {
    padding: 4.5rem 3.6rem;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    border-radius: 0.9375rem;

    .content-container {
      h1 {
        text-align: left;
      }

      p {
        text-align: left;
      }
    }

    .circle2 {
      display: none;
    }
    .circle1 {
      width: 40rem;
      height: 40rem;
      top: -5.2rem;
      left: -7.6rem;
      transform: rotate(270deg);
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6rem;
    padding: 3.3rem 6rem;

    .content-container {
      align-self: center;
    }
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    margin-right: auto;
    margin-left: auto;
  }
`

export default function ContactHero() {

  return (
    <ContactHeroStyles>
      <img src={backgroundCircle} className="circle1" aria-hidden="true" />
      <img src={backgroundCircle} className="circle2" aria-hidden="true" />
      <div className="content-container">
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
        </p>
      </div>
      <ContactForm />
    </ContactHeroStyles>
  )
}