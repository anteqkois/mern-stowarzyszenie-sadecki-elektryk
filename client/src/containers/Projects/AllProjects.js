import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Project from '../../components/project/Project';
import Loading from '../../components/utils/Loading';

import * as projectsAPI from '../../helpers/projectsAPI.js';

const StyledProjects = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 70px;
  justify-items: center;
  div {
    margin: 0 10px;
  }
`;


const AllProjects = () => {
  const [project, setProjects] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setProjects(await projectsAPI.getAll());
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
      <Loading loadingMessage="łądowanie projektów" />
  ) : (
    <StyledProjects>
      {project.map(({ slug, _id, title, category, date, description }) => (
        <Project
          key={_id}
          slug={slug}
          title={title}
          category={category.category}
          date={date}
          description={description}
        />
      ))}
    </StyledProjects>
  );
};

export default AllProjects;