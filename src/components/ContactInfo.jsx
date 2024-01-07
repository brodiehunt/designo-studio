import styled from "styled-components";

const ContactInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
  color: ${({$theme}) => $theme ? 'var(--secondary-dark)' : 'var(--primary-light)'};
  opacity: ${({$theme}) => $theme ? '1' : '0.5'};
  line-height: 1.625rem;

  .bold {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    text-align: start;
    gap: 6rem;
    .column1, .column2 {
      flex-grow: 1;
    }
  }

  @media (min-width: 900px) {
    gap: 8rem;
  }
`

export default function ContactInfo({location, theme}) {

  return (
    <ContactInfoStyles $theme={theme}>
      <div className="column1">
        <div className="bold">
          {location?.address.office || 'Designo Central Office'}
        </div>
        <p>{location?.address.street || '3886 Wellington Street'}</p>
        <p>{location?.address.city || 'Toronto, Ontario M9C 3J5'}</p>
      </div>
      <div className="column2">
      <div className="bold">
          Contact {!location && 'Us (Central Office)'}
        </div>
        <p>P: {location?.contact.phone || '+1 253-863-8967'}</p>
        <p>M: {location?.contact.email || 'contact@designo.co'}</p>
      </div>
    </ContactInfoStyles>
  )
}