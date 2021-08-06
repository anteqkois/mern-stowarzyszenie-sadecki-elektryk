import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ImageBlock from '../components/utils/ImageBlock';
import Project from '../components/project/Project';
import Loading from '../components/utils/Loading';

import image from '../assets/project-block.jpg';

import * as projectsAPI from '../helpers/projectsAPI.js';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 70px;
  justify-items: center;

  div{
    margin: 0 10px;

    &:nth-of-type(1){
      margin: unset;
    }
  }
`;




const Projects = () => {
  const [projects, setProjects] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async()=>{
  setProjects(await projectsAPI.getAll());
  setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <>
      <ImageBlock img={image} title="Projekty" />
  
        <Loading loadingMessage='łądowanie projektów'/>

    </>
  ) : (
    <StyledProjects>
      <ImageBlock img={image} title="Projekty" />
      {projects.map(({ slug, _id, title, category, date, description }) => (
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

export default Projects;
