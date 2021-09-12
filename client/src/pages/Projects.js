import React from 'react';
import styled from 'styled-components';

import ProjectsIntro from '../containers/Projects/ProjectsIntro';
import AllProjects from '../containers/Projects/AllProjects';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`;

const Projects = () => {
  return (
    <StyledWrapper>
      <ProjectsIntro />
      <AllProjects />
    </StyledWrapper>
  );
};

export default Projects;
