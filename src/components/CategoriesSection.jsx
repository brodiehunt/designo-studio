import styled from "styled-components";
import { linkCards } from "../data/categories";
import CategoryLinkCard from "./CategoryLinkCard";
import { useLocation } from "react-router-dom";

const CategoriesSectionStyles = styled.section`
  padding: 7.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
   padding: 7.5rem 2.5rem;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: ${({$smallGrid}) => $smallGrid ? '1fr' : '1fr 1fr'};
    grid-column-gap: 1.8rem;
    grid-row-gap: 1.5rem;
  }

  @media (min-width: 1150px) {
    padding: 7.5rem 0;
    margin: 0 auto;
    max-width: 1110px;
  }
`;

export default function CategoriesSection() {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <CategoriesSectionStyles >
        {linkCards.map((category, index) => {
          return (
            <CategoryLinkCard key={index} category={category} />
          )
        })}
      </CategoriesSectionStyles>
    )
  }

  const cardsToRender = linkCards.filter((card) => {
    return location.pathname !== `/design${card.url}`;
  });
  const smallGrid = true;

  return (
    <CategoriesSectionStyles $smallGrid={smallGrid}>
      {cardsToRender.map((category, index) => {
        return (
          <CategoryLinkCard key={index} category={category} smallGrid={smallGrid}/>
        )
      })}
    </CategoriesSectionStyles>
  )
  
}
