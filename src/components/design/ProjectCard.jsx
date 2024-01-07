import styled from "styled-components";
import { Link } from 'react-router-dom';

const ProjectCardStyles = styled(Link)`
  display: block;
  width: 100%;
  border-radius: 0.9375rem;
  overflow: hidden;
  margin-bottom: 2.5rem;
  cursor: pointer;
  

  img {
    max-width: 100%;
    display: block;
  }

  .content-container {
    padding: 2rem 1.9rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: #FDF3F0;
    transition: 0.2s ease-in all;
  }

  h2 {
    color: var(--primary);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.625rem; /* 130% */
    letter-spacing: 0.3125rem;
    text-transform: uppercase;
    transition: 0.2s ease-in all;
  }
  p {
    color: var(--secondary-dark);
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    transition: 0.2s ease-in all;
  }

  &:focus, &:hover {
    .content-container {
      background-color: var(--primary);
    }

    h2 {
      color: var(--primary-light);
    }

    p {
      color: var(--primary-light);
    }
  }

  &:focus {
    outline: 2px solid  var(--primary);
  }

  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .content-container {
      justify-content: center;
    }
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;

    .content-container {
      flex-grow: 1;
    }
  }
`;

export default function ProjectCard({project}) {

  return (
    <ProjectCardStyles>
      <img src={project.img} />
      <div className="content-container">
        <h2>{project.title}</h2>
        <p>{project.content}</p>
      </div>
    </ProjectCardStyles>
  )
}