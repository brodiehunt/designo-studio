import styled from "styled-components";
import backgroundCircle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';
import { ButtonLinkStyles } from "../styles/ButtonLink";

const LocationCallToActionStyles = styled.div`
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

export default function LocationCallToAction({location}) {

  return (
    <LocationCallToActionStyles>
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