import styled from "styled-components";
import { ButtonLinkStyles } from "./styles/ButtonLink";
import backgroundImage from '../assets/shared/desktop/bg-pattern-small-circle.svg';
import { motion } from 'framer-motion';

const FooterCallToActionStyles = styled(motion.article)`
  position: relative;
  padding: 4.5rem 1.5rem;
  margin: 0 1.5rem;
  border-radius: 0.9375rem;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  /* background-repeat: repeat; */

  .circle {
    position: absolute;
    width: 18.5rem;
    height: 18.5rem;
    pointer-events: none;
  }

  .one {
    bottom: 50%;
    right: -10%;
    transform: rotate(-180deg)
  }

  .two {
    top: 50%;
    right: -10%;
    transform: rotate(-180deg);
  }

  .three {
    top: 50%;
    right: -10%;
    transform: translateX(-100%) rotate(180deg);

  }
  .four, .five {
    display: none;
  }

  h2 {
    color: var(--primary-light);
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
    
  }

  p {
    color: var(--primary-light);
    text-align: center;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    max-width: 27rem;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    margin: 0 2.5rem;

    .four {
      display: block;
      bottom: 50%;
      right: -10%;
      transform: translateX(-100%) rotate(-180deg);
    }

    .five {
      display: block;
      top: 50%;
      right: -10%;
      transform: translateX(-200%) rotate(-90deg);
    }
    h2 {
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 2.5rem; 
    }

    p {
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4.5rem 6rem;

    h2 {
      text-align: left;
    }

    p {
      text-align: left;
    }
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    margin: 0 auto;
    
  }
`;

export default function FooterCallToAction() {

  return (
    <FooterCallToActionStyles
      initial={{x: -300}}
      whileInView={{x: 0}}
    >
      <img 
        src={backgroundImage} 
        className="circle one"
        aria-hidden="true"
      />
      <img 
        src={backgroundImage} 
        className="circle two"
        aria-hidden="true"
      />
      <img 
        src={backgroundImage} 
        className="circle three"
        aria-hidden="true"
      />
      <img 
        src={backgroundImage} 
        className="circle four"
        aria-hidden="true"
      />
      <img 
        src={backgroundImage} 
        className="circle five"
        aria-hidden="true"
      />
      <div className="text">
        <h2>Let’s talk about <br/> your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
        </p>
      </div>
      <ButtonLinkStyles to="/contact">Get in touch</ButtonLinkStyles>
    </FooterCallToActionStyles>
  )
}