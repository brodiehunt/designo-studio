import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderNavStyles = styled.nav`
  display: ${({$type}) => ($type === 'small') ? 'block' : 'none'};
  ul {
      list-style: none;
    }

    li {
      padding: 1rem 0;
      overflow: hidden;
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

const linkVariants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.2,
    }
  },
  exit: {
    y: 50,
    transition: {
      duration: 0.15
    }
  }
}

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    }
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    } 
  }
}

export default function HeaderNav({type, setModalOpen}) {

  return (
    <HeaderNavStyles $type={type}>
      <motion.ul
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <li>
          <motion.div
            variants={linkVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
          >
            <Link 
              to="/our-company" 
              onClick={() => setModalOpen(false)}
            >
              Our company
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={linkVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
          >
            <Link to="/locations" onClick={() => setModalOpen(false)}>
              Locations
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={linkVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
          >
            <Link to="/contact" onClick={() => setModalOpen(false)}>
              Contact
            </Link>
          </motion.div>
        </li>
      </motion.ul>
    </HeaderNavStyles>
  )
}