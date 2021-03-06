import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ProjectAdmin from '../components/project/ProjectAdmin';
import Loading from '../components/utils/Loading';

import * as projectsAPI from '../helpers/projectsAPI.js';

const StyledContainer = styled.div`
  //margin: 70px 0 70px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  header {
    font-size: ${({ theme }) => theme.typography.sizeH5};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    text-transform: uppercase;
  }

  ${({ theme }) => theme.media.desktop} {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);

    header {
      text-align: center;
      grid-column: 1/3;
    }
  }
`;

const ProjectsAdminView = () => {
  const [projects, setProjects] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setProjects(await projectsAPI.getAll());
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <StyledContainer>
      <header>Wszyskie projekty</header>
      {projects.map(({ slug, _id, title, category, date, description }) => (
        <ProjectAdmin
          key={_id}
          _id={_id}
          slug={slug}
          title={title}
          category={category.category}
          date={date}
          description={description}
        />
      ))}
    </StyledContainer>
  );
};

export default ProjectsAdminView;
