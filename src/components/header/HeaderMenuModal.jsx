import styled from "styled-components"
import HeaderNav from "./HeaderNav"

const HeaderMenuModalStyles = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: calc(100svh - 100%);
  z-index: 1;

  .dropdown-container {
    background: #1D1C1E;
    padding: 3rem 1.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export default function HeaderMenuModal() {

  return (
    <HeaderMenuModalStyles>
      <div className="dropdown-container">
        <HeaderNav type="small" />
      </div>
    </HeaderMenuModalStyles>
  )
}