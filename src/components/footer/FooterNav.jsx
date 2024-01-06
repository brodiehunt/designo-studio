import styled from "styled-components";
import Logo from '../../assets/shared/desktop/logo-light.png';
import { Link } from "react-router-dom";
const FooterNavStyles = styled.div`
  max-width: 1111px;
  width: 100%;
  margin: 0 auto;

  .logo {
    width: 12.625rem;
    display: block;
    margin: 0 auto;
    padding-bottom: 2rem;
    
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    border-top: 1px solid rgba(255,255,255, 0.1);
    padding: 2rem 0;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--primary-light);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 0.875rem; 
    letter-spacing: 0.125rem;
    font-weight: 300;
    cursor: pointer;
  } 

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    
    .logo {
      padding: 0;
    }

    ul {
      display: flex;
      flex-direction: row;
      gap: 2.5rem;
      padding: 0;
      border: 0;
    }
  }
 
`

export default function FooterNav() {

  return (
    <FooterNavStyles>
      <div>
        <img className="logo" src={Logo} alt="Designo studios logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/our-company">
              Our company
            </Link>
          </li>
          <li>
            <Link to="/locations">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </FooterNavStyles>
  )
}
