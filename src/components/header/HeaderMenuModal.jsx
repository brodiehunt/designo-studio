import styled from "styled-components"
import HeaderNav from "./HeaderNav"
import { AnimatePresence, motion } from 'framer-motion';

const HeaderMenuModalStyles = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: calc(100svh - 100%);
  z-index: 3;
  transform-origin: top;

  .dropdown-container {
    background: #1D1C1E;
    padding: 3rem 1.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const menuVariants = {
  initial: {
    scaleY: 0
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0]
    }
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
      ease: [0.12, 0, 0.39, 1]
    }
  }
}

export default function HeaderMenuModal({setModalOpen}) {

  return (
    <HeaderMenuModalStyles 
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={() => setModalOpen(false)}
    >
      <motion.div 
        className="dropdown-container"
      >
        <HeaderNav type="small" setModalOpen={setModalOpen}/>
      </motion.div>
    </HeaderMenuModalStyles>
  )
}