import styled from 'styled-components';
import { ButtonLinkStyles } from './styles/ButtonLink';
import phoneImg from '../assets/home/desktop/image-hero-phone.png';
import backgroundCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg';
import { motion } from 'framer-motion';

const HomeHeroStyles = styled(motion.section)`
  position: relative;
  background-color: var(--primary);
  color: var(--primary-light);
  padding: 5rem 1.5rem;
  text-align: center;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 33rem;
    margin: 0 auto;
  };

  h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.25rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.5625rem;
    padding-bottom: 1.5rem;
  }

  .img-container {
    width: 100%;
    height: 400px;
    position: relative;
  }
  .phone-img {
    position: absolute;
    width: 600px;
    left: 50%;
    top: -5rem;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .circle {
    position: absolute;
    width: 40rem;
    height: 40rem;
    transform: translateX(-20%) rotate(45deg);
    pointer-events: none;
  }

  @media (min-width: 768px){
    margin: 0 2.5rem;
    border-radius: 0.9375rem;

    h1 {
      font-size: 3rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    p {
      width: 27rem;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 9rem 6rem;
    max-width: 1111px;
    margin: 0 2.5rem;

    .content {
      align-items: start;
      text-align: start;
    }

    p {
      margin: 0;
    }

    .phone-img {
      top: -10rem;
      left: 60%;
    }

    .circle {
      top: 0;
      bottom: 0;
      right: 0;
      transform: translate(0) rotate(90deg)
    }
  }

  @media (min-width: 1150px) {
    margin: 0 auto;
  }
`;

export default function HomeHero(){

  return (
    <HomeHeroStyles>
      <motion.img 
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 1.5}}
        className="circle"
        src={backgroundCircle}
        aria-hidden="true"
      /> 
      <div className="content"> 
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
        </p>
        <ButtonLinkStyles $theme='light' to="/our-company">
          Learn More
        </ButtonLinkStyles>
      </div>
      <div className="img-container">
        <motion.img 
          initial={{scale: 0, x: '-50%', opacity: 0}}
          animate={{scale: 1, x: '-50%', opacity: 1}}
          transition={{duration: 1}}
          src={phoneImg} 
          alt="phone illustration of our digital designs" 
          className="phone-img"
        />
      </div>
    </HomeHeroStyles>
  )
};