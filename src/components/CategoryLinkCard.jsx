import styled from "styled-components";
import { Link } from "react-router-dom";
import rightArrow from '../assets/shared/desktop/icon-right-arrow.svg';
const CategoryLinkCardStyles = styled(Link)`
  width: 100%;
  position: relative;
  /* margin-bottom: 1.5rem; */

  img {
    border-radius: 0.9375rem;
    display: block;
    width: 100%;
    /* opacity: 0.5; */
  }

  picture {

  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    color: var(--primary-light); 
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 2.25rem; /* 128.571% */
    letter-spacing: 0.0875rem;
  }

  .call-to-action {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.3125rem;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
  }

  .screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.9375rem;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.2s ease-in all;
    z-index: 1;
  }

  &:hover .screen, &:focus .screen {
    background-color: rgba(231, 129, 107, 0.5)
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
      line-height: 3rem; 
      letter-spacing: 0.125rem;
    }
  }

  @media (min-width: 1024px) {
    &:first-child {
      grid-row-start: 1;
      grid-row-end: ${({$smallGrid}) => $smallGrid ? '2' : '3'};
    }

  }
`;

export default function CategoryLinkCard({category, smallGrid}) {
  let desktopImg = category.imgs.desktop;
  if (category.title === 'Web design' && smallGrid) {
    desktopImg = category.imgs.desktopSmall;
  }
  return (
    <CategoryLinkCardStyles to={`/design${category.url}`} $smallGrid={smallGrid} >
      <div className="screen" aria-hidden="true"></div>
      <div className="text">
        <h2>{category.title}</h2>
        <div className="call-to-action">
          View Projects
          <img src={rightArrow} />
        </div>
      </div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopImg} />
        <source media="(min-width: 768px)" srcSet={category.imgs.tablet} />
        <img src={category.imgs.mobile} alt={category.alt} />
      </picture>
    </CategoryLinkCardStyles>
  )
};

