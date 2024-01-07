import styled from "styled-components";
import ContactInfo from '../ContactInfo';
import backgroundCircles3 from '../../assets/shared/desktop/bg-pattern-three-circles.svg';

const LocationCardStyles = styled.section`
  margin-bottom: 2.5rem;
  overflow: hidden;

  &:nth-child(3) {
    margin-bottom: 7.5rem;
  }

  img {
    width: 100%;
    display: block;
  }

  .content-container {
    position: relative;
    padding: 5rem 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    background-color: #FDF3F0;
    overflow: hidden;
  }

  h2 {
    color: var(--primary);
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.25rem;
  }

  .circles {
    position: absolute;
    height: 38.5rem;
    width: 38.5rem;
    top: 0;
    left: 0;
  }

  @media (min-width: 768px) {
    margin: 0 2.5rem;
    margin-bottom: 7.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    picture {
      img {
        /* margin-bottom: 2rem; */
        border-radius: 0.9375rem;
      }
    }

    .content-container {
      border-radius: 0.9375rem;
      align-items: start;
      justify-content: center;
    }

    .circles {
      top: unset;
      bottom: 0;
    }

  }

  @media (min-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: ${({$layout}) => $layout ? '1fr 2fr' : '2fr 1fr'};
    grid-row: 1 / 2;
    margin-bottom: 2rem;

    picture {
      grid-column: ${({$layout}) => $layout ? '1/ 2' : '2/3'};
      grid-row: 1 / 2;
      display: block;

      img {
        height: 100%;
      }
    }

    .content-container {
      grid-column: ${({$layout}) => $layout ? '2/ 3' : '1/2'}
    }
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    margin-right: auto;
    margin-left: auto;

  }
`;

export default function LocationCard({location, layout}) {

  return (
    <LocationCardStyles $layout={layout}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={location.map.small} />
        <source media="(min-width: 600px)" srcSet={location.map.large} />
        <img src={location.map.small} alt={`Location of ${location.location} office on map.`} />
      </picture>
      <div className="content-container">
        <img className="circles" src={backgroundCircles3} aria-hidden="true" />
        <h2>{location.location}</h2>
        <ContactInfo location={location} theme="light"/>
      </div>
    </LocationCardStyles>
  )
}