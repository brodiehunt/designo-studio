import styled from "styled-components";
import ProjectCard from './ProjectCard';

const ProjectsContainerStyles = styled.section`
  margin: 0 1.5rem;
  margin-bottom: 6rem;

  @media (min-width: 768px) {
    margin: 0 2.5rem;
    margin-bottom: 7.5rem;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1rem;
  }

  @media (min-width: 1150px) {
    max-width: 1111px;
    margin: 0 auto;
    margin-bottom: 7.5rem;
  }
`;

export default function ProjectsContainer({projects}) {

  return (
    <ProjectsContainerStyles>
      {projects.map((project, index) => {
        return (
          <ProjectCard key={index} project={project} />
        )
      })}
    </ProjectsContainerStyles>
  )
}