import styled from "styled-components";
import backgroundImage from '../../assets/shared/desktop/bg-pattern-small-circle.svg';

const DesignHeroStyles = styled.section`
  position: relative;
  padding: 4.5rem 1.5rem;
  margin-bottom: 6rem;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  overflow: hidden;

  h1 {
    color: var(--primary-light);
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.25rem;
  }

  p {
    color: var(--primary-light);
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.5625rem;
    text-align: center;
    max-width: 28rem;
  }

  .circle {
    position: absolute;
    width: 18.5rem;
    height: 18.5rem;
  }

  .one {
    top: 0;
    right: 0;
  }

  .two, .three, .four, .five {
    display: none;

  }

  @media (min-width: 768px) {
    margin: 0 2.5rem;
    margin-bottom: 7.5rem;
    border-radius: 0.9375rem;

    .one {
      bottom: 50%;
      right: -10%;
      transform: rotate(-180deg)
    }
    .two {
      display: block;
      top: 50%;
      right: -10%;
      transform: rotate(-180deg);
    }

    .three {
      display: block;
      top: 50%;
      right: -10%;
      transform: translateX(-100%) rotate(180deg);
    }

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
  }

  @media (min-width: 1024px) {
    padding: 4.5rem 6rem;
    margin-bottom: 10rem;
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    margin-right: auto;
    margin-left: auto;
    
  }
`;

export default function DesignHero({title, content}) {

  return (
    <DesignHeroStyles>
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
      <h1>{title || 'Web Design'}</h1>
      <p>
        {content || "We build websites that serve as powerful marketing tools and bring memorable brand experiences."}
      </p>
    </DesignHeroStyles>
  )
}