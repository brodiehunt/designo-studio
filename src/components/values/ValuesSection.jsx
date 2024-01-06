import styled from "styled-components";
import { values } from '../../data/values';
import ValueCard from "./ValueCard";


const ValuesSectionStyles = styled.div`
  padding: 0 1.5rem;

 @media (min-width: 768px) {
  padding: 0 2.5rem;
 }

 @media (min-width: 1024px) {
  display: flex;
  gap: 1.5rem;
 }

 @media (min-width: 1150px) {
  margin: 0 auto;
  max-width: 1111px;
  padding: 0;
 }
`;


export default function ValuesSection() {

  return (
    <ValuesSectionStyles>
      {values.map((value, index) => {
        return (
          <ValueCard key={index} value={value} />
        )
      })}
    </ValuesSectionStyles>
  )
}