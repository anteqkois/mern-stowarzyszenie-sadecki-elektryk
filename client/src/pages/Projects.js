import React from 'react';
import styled from 'styled-components';

import ProjectsIntro from '../containers/ProjectsIntro';
import AllProjects from '../containers/AllProjects';

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
