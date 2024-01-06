import styled from "styled-components";

const FooterExtensionStyles = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  transform: translateY(-100%);
  background-color: var(--primary-dark);
  /* background-color: blue; */
  z-index: -1;

  @media (min-width: 768px) {
    height: 100px;
  }

  @media (min-width: 1024px) {
    height: 80px;
  }
`

export default function FooterExtension() {

  return (
    <FooterExtensionStyles>

    </FooterExtensionStyles>
  )
}