import styled from "styled-components";
import Logo from '../../assets/shared/desktop/logo-dark.png';
import hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import close from '../../assets/shared/mobile/icon-close.svg';
import HeaderNav from "./HeaderNav";
import HeaderMenuModal from "./HeaderMenuModal";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

const HeaderStyles = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.2rem 1.5rem;
  margin: 0 auto;

  .logo {
    width: 12.625rem;
  } 
  
  .logo-link {
    position:relative;
  }

  .logo-link:focus {
      outline: none;
  };

  .logo-link:focus::after {
    content: '';
    position: absolute;
    background-color: var(--primary);
    bottom: -10px;
    /* bottom: 0; */
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 0.2rem;
  }

  .nav-toggle {
    background: none;
    border: none;
    display: none; 
  }

  .visible {
    display: block;
  }

  @media (min-width: 768px) {
    padding: 4rem 2.5rem;

    .nav-toggle {
      display: none;
    }
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    padding: 4rem 0;
  }
`;

export default function Header(){
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HeaderStyles>
      <Link to="/" className="logo-link">
        <img 
          className="logo"
          src={Logo} 
          alt="Designo Company Logo" 
        />
      </Link>
      <button 
        className={modalOpen ? 'visible nav-toggle' : 'nav-toggle'}
        onClick={() => setModalOpen(!modalOpen)}
      >
        <img 
          className="hamburger-icon"
          src={close} 
          alt="Close menu Icon"
        />
      </button>
      <button
        className={modalOpen ? 'nav-toggle' : 'visible nav-toggle'}
        onClick={() => setModalOpen(!modalOpen)}
      >  
        <img 
          className="hamburger-icon"
          src={hamburger} 
          alt="Open menu hamburger icon"
        />
      </button>
      <HeaderNav type='large'/>
      <AnimatePresence>
        {modalOpen && 
          <HeaderMenuModal setModalOpen={setModalOpen}/>
        }
      </AnimatePresence>
    </HeaderStyles>
  )
}