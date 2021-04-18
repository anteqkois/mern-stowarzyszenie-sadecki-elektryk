import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import image from '../assets/project-block.jpg';
import ImageBlock from '../components/utils/ImageBlock';
import Project from '../components/project/Project';
import Spinner from '../components/utils/Spinner';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 50px;
  justify-items: center;

  ${({ theme }) => theme.media.tablet} {
    div {
      justify-self: start;
      transform: translateX(10vw);
    }
    div:nth-of-type(2n-1) {
      justify-self: end;
      transform: translateX(-10vw);
    }
    div:nth-of-type(1) {
      transform: translateX(0vw);
    }
  }
  ${({ theme }) => theme.media.bigTablet} {
    div {
      transform: translateX(20vw);
    }
    div:nth-of-type(2n-1) {
      transform: translateX(-15vw);
    }
    div:nth-of-type(1) {
      transform: translateX(0vw);
    }
  }
`;

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-direction: column;
  width: 100vw;
  height: 150px;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizeH6};
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
        Pobieraie projektów z bazy danych...
        <Spinner />
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
