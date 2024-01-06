import styled from "styled-components";

const AboutSectionStyles = styled.section`
  
  img {
    width: 100%;
    display: block;
  }

  .content-container {
    padding: 5rem 1.5rem;
    background-color: ${({$theme}) => $theme === 'dark' ? 'var(--primary)' : '#FDF3F0'};
    color: ${({$theme}) => $theme === 'dark' ? 'var(--primary-light)' : 'var(--secondary-dark)'};
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
        <h2>{info.title}</h2>
        <p>{info.content1}</p>
        {info?.content2 &&
          <p>{info.content2}</p>
        }
      </div>
    </AboutSectionStyles>
  )
}