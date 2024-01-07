import styled from "styled-components";
import backgroundCircle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';
import backgroundCircle3 from '../../assets/shared/desktop/bg-pattern-three-circles.svg';
const AboutSectionStyles = styled.section`
  margin-bottom: ${({$type}) => $type ? '' : '7.5rem'};

  img {
    width: 100%;
    display: block;
  }

  .content-container {
    position: relative;
    padding: 5rem 1.5rem;
    background-color: ${({$theme}) => $theme === 'dark' ? 'var(--primary)' : '#FDF3F0'};
    color: ${({$theme}) => $theme === 'dark' ? 'var(--primary-light)' : 'var(--secondary-dark)'};
    overflow: hidden;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
    color: ${({$theme}) => $theme === 'dark' ? 'var(--primary-light)' : 'var(--primary)'};
  }

  p {
    text-align: center;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.5625rem;
  }

  .circle-about {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-40%) rotate(-90deg);
    width: 20rem;
    pointer-events: none;
  }

  .circles-three {
    position: absolute;
    top: 0;
    left: 0;
    height: 36.5rem;
    width: 36.5rem;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    margin: 0 2.5rem;
    margin-bottom: 7.5rem;
    border-radius: 0.9375rem;
    overflow: hidden;

    .content-container {
      padding: 4.25rem 3.5rem;
    }

    h2 {
      font-size: ${({$type}) => $type === 'hero' ? '3rem' : '2.5rem'};
      font-weight: 400;
      line-height: 3rem; /* 100% */
    }

    p {
      max-width: 650px;
      margin: 0 auto;
      margin-bottom: 1.5rem;
    }

    .circle-about {
      right: 20%;
      bottom: 40%;
      top: unset;
      transform: translateY(0) rotate(-180deg);
      width: 40rem;
    }

    .circles-three {
      top: unset;
      left: unset;
      right: 0;
      bottom: 2.5rem;
      
    }

  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: ${({$layout}) => $layout === 'right' ? '4fr 3fr' : '3fr 4fr'};

    picture {
      grid-column: ${({$layout}) => $layout === 'right' ? '2 / 3' : '1 / 2'};
      grid-row: 1 / 2;
    }

    .content-container {
      grid-column: ${({$layout}) => $layout === 'right' ? '1 / 2' : '2 / 3'};
      grid-row: 1 / 2;
      display: flex; 
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      text-align: left;
    }

    p {
      text-align: left;
    }

    .circle-about {
      right: -20px;
      bottom: 0;
    }

    .circles-three {
      right: 0;
      bottom: 0;
      transform: translateX(-25%);
    }
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    margin: 0 auto;
    margin-bottom: 10rem;
  }

`;

export default function AboutSection({info, theme, layout, type}) {
  
  return (
    <AboutSectionStyles $theme={theme} $layout={layout} $type={type}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={info.desktop} />
        <source media="(min-width: 600px)" srcSet={info.tablet} />
        <img src={info.mobile} alt={info.alt} />
      </picture>
      <div className="content-container">
        {type ? (
          <img className="circle-about" src={backgroundCircle} />
        ): (
          <img className="circles-three" src={backgroundCircle3} />
        )}
        <h2>{info.title}</h2>
        <p>{info.content1}</p>
        {info?.content2 &&
          <p>{info.content2}</p>
        }
      </div>
    </AboutSectionStyles>
  )
}