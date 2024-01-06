import IconFacebook from '../../assets/shared/desktop/icon-facebook.svg';
import IconInstagram from '../../assets/shared/desktop/icon-instagram.svg';
import IconTwitter from '../../assets/shared/desktop/icon-twitter.svg';
import IconYoutube from '../../assets/shared/desktop/icon-youtube.svg';
import IconPintrest from '../../assets/shared/desktop/icon-pinterest.svg';
import styled from 'styled-components';

const FooterSocialStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    flex-grow: 1;
    justify-content: end;
  }
`
export default function FooterSocials() {
  return (
    <FooterSocialStyles>
      <img src={IconFacebook} />
      <img src={IconYoutube} />
      <img src={IconTwitter} />
      <img src={IconPintrest} />
      <img src={IconInstagram} />
    </FooterSocialStyles>
  )
}