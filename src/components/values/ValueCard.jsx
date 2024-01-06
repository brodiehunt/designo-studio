import styled from "styled-components";
import backgroundCircle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';

const ValueCardStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;

  .background-circle {
    position: absolute;
  }

  &:nth-child(2) .background-circle {
    transform: rotate(-90deg)
  }

  &:nth-child(3) .background-circle {
    transform: rotate(90deg)
  }

  .illustration {
    position: relative;
    z-index: 1;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.625rem; /* 130% */
    letter-spacing: 0.3125rem;
    text-transform: uppercase;
  }  

  p {
    text-align: center;
    line-height: 1.625rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .text {
      gap: 1rem;
      align-items: start;
    }

    p {
      text-align: left;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;

    .text {
      align-items: center;
    }

    p {
      text-align: center;
    }
  }
`;

export default function ValueCard({value}) {

  return (
    <ValueCardStyles>
     

      <div className="img-container">
        <img src={backgroundCircle} className="background-circle" />
        <img className="illustration" src={value.svg} />
      </div>
      <div className="text">
        <h3>{value.value}</h3>
        <p>{value.content}</p>
      </div>
    </ValueCardStyles>
  )
}