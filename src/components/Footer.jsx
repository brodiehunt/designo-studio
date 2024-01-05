import styled from "styled-components";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";
import ContactInfo from "./ContactInfo";

const FooterStyles = styled.footer`
  background-color: var(--primary-dark);
  padding: 4rem 1.5rem;

  .container {
    max-width: 1111px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 5rem 2.5rem;

    .container {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FooterNav />
      <div className="container">
        <ContactInfo />
        <FooterSocials />
      </div>      
    </FooterStyles>
  )
}