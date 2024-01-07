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

  .social-link {
    transition: 0.2s ease-in all;
  }

  .social-link:hover {
    transform: scale(1.15);
  }

  .social-link:focus {
    outline: none;
    border-bottom: 3px solid var(--primary);
  }

  @media (min-width: 768px) {
    flex-grow: 1;
    justify-content: end;
  }
`
export default function FooterSocials() {
  return (
    <FooterSocialStyles>
      <a href="" className="social-link">
        <img src={IconFacebook} />
      </a>
      <a href="" className="social-link">
        <img src={IconYoutube} />
      </a>
      <a href="" className="social-link">
        <img src={IconTwitter} />
      </a>
      <a href="" className="social-link">
        <img src={IconPintrest} />
      </a>
      <a href="" className="social-link">
        <img src={IconInstagram} />
      </a>
    </FooterSocialStyles>
  )
}