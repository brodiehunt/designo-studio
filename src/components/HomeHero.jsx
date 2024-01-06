import styled from 'styled-components';
import { ButtonLinkStyles } from './styles/ButtonLink';
import phoneImg from '../assets/home/desktop/image-hero-phone.png';

const HomeHeroStyles = styled.section`
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
  }

  @media (min-width: 1110px) {
    margin: 0 auto;
  }
`;

export default function HomeHero(){

  return (
    <HomeHeroStyles>
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
        <img 
          src={phoneImg} 
          alt="phone illustration of our digital designs" 
          className="phone-img"
        />
      </div>
    </HomeHeroStyles>
  )
};