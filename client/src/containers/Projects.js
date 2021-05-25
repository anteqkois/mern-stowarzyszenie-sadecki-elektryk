import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import image from '../assets/project-block.jpg';
import ImageBlock from '../components/utils/ImageBlock';
import Project from '../components/project/Project';
import Spinner from '../components/utils/Spinner';

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
  const [project, setProject] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get('projects');
      setProject(data);
      setIsLoading(false);
    }, 0);

    // const fetchData = async () => {
    //   const { data } = await axios.get('projects');
    //   console.log(data);
    //   setProject(data);
    // };
    // fetchData();
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
