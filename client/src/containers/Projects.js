import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import image from '../assets/project-block.jpg';
import ImageBlock from '../components/utils/ImageBlock';
import Project from '../components/project/Project';
import Spinner from '../components/utils/Spinner';

import * as projectsAPI from '../helpers/projectsAPI.js';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 70px;
  justify-items: center;
`;

const StyledLoading = styled.div`
  margin: 0 auto;
  width: 300px;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizeH5};
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

  return isLoading === true ? (
    <>
      <ImageBlock img={image} title="Projekty" />
      <StyledLoading>
        <Spinner />
        <h5>Pobieraie projektów z bazy danych...</h5>
      </StyledLoading>
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
  // <StyledProjects>
  //   <ImageBlock img={image} title="Projekty" />
  //   {isLoading ? <div>Loading...</div> :
  //   {project.map(({ slug, _id, title, category, date, description }) => (
  //        <Project
  //          key={_id}
  //          slug={slug}
  //          title={title}
  //          category={category}
  //          date={date}
  //          description={description}
  //        />
  //      ))}
  //   }
  // </StyledProjects>
};

export default Projects;
