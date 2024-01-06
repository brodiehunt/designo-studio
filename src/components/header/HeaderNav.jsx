import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderNavStyles = styled.nav`
  display: ${({$type}) => ($type === 'small') ? 'block' : 'none'};
  ul {
      list-style: none;
    }

    li {
      padding: 1rem 0;
    }

    a {
      text-decoration: none;
      text-transform: uppercase;
      color: var(--primary-light);
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5625rem; /* 104.167% */
      letter-spacing: 0.125rem;
    }

  @media (min-width: 768px) {
    position: relative;
    display: ${({$type}) => ($type === 'large') ? 'block' : 'none'};
    ul {
      display: flex;
      gap: 2.5rem;
    }

    li {
      padding: 0;
    }
    
    a {
      color: var(--secondary-dark);
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 0.875rem; 
      letter-spacing: 0.125rem;
      transition: 0.2s ease-in all;
      position: relative;
    }

    a:hover { 
      color: var(--primary);
    }  
    a:focus {
      outline: none;
    };

    a:focus::after {
      content: '';
      position: absolute;
      background-color: var(--primary);
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 0.2rem;
    }
  }
`;


export default function HeaderNav({type}) {

  return (
    <HeaderNavStyles $type={type}>
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
    </HeaderNavStyles>
  )
}