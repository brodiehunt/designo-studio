import styled from "styled-components";

const ContactInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
  color: var(--primary-light);
  opacity: 0.5;
  line-height: 1.625rem;

  .bold {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-grow: 1;
    justify-content: start;
    text-align: start;
    
    .column1, .column2 {
      flex-grow: 1;
      
    }
  }
`

export default function ContactInfo({contact}) {

  return (
    <ContactInfoStyles>
      <div className="column1">
        <div className="bold">
          {contact?.office || 'Designo Central Office'}
        </div>
        <p>{contact?.address.street || '3886 Wellington Street'}</p>
        <p>{contact?.address.location || 'Toronto, Ontario M9C 3J5'}</p>
      </div>
      <div className="column2">
      <div className="bold">
          Contact Us (Central Office)
        </div>
        <p>P: {contact?.phone || '+1 253-863-8967'}</p>
        <p>M: {contact?.email || 'contact@designo.co'}</p>
      </div>
    </ContactInfoStyles>
  )
}