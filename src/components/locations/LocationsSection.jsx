import styled from "styled-components";
import { locations } from '../../data/locations';
import LocationCallToAction from "./LocationCallToAction";

const LocationsSectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 7.5rem;

  @media (min-width: 768px) {
    margin-bottom: 8.5rem;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    margin: 0 auto;
    margin-bottom: 8.5rem;
  }
`;


export default function LocationsSection() {

  return (
    <LocationsSectionStyles>
      {locations.map((location, index) => {
        return (
          <LocationCallToAction key={index} location={location} />
        )
      })}
    </LocationsSectionStyles>
  )
}