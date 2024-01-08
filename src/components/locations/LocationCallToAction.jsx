import styled from "styled-components";
import backgroundCircle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';
import { ButtonLinkStyles } from "../styles/ButtonLink";
import { motion } from 'framer-motion';

const LocationCallToActionStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-container {
    position: relative;
    margin-bottom: 3rem;
  }

  .circle {
    position: absolute;
    left: 0;
    pointer-events: none;
  }

  &:nth-child(1) .circle{
    transform: rotate(90deg);
  }

  &:nth-child(3) .circle {
    transform: rotate(-80deg);
  }

  .location {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.625rem; /* 130% */
    letter-spacing: 0.3125rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

`;

export default function LocationCallToAction({location, index}) {
  const delay = index / 6;
  return (
    <LocationCallToActionStyles
      initial={{y: 200}}
      whileInView={{y: 0}}
      transition={{delay: delay}}
      viewport={{ once: true, amount: 0.01 }}
    >
      <div className="img-container">
        <img src={location.svg} alt={location.alt}/>
        <img className="circle" src={backgroundCircle} aria-hidden="true"/>
      </div>
      <div className="location">{location.location}</div>
      <ButtonLinkStyles to={location.url} $theme="dark">
        See Location
      </ButtonLinkStyles>
    </LocationCallToActionStyles>
  )
}