import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Project from '../components/project/Project';
import Spinner from '../components/utils/Spinner';

const StyledLoading = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  //width: 100%;

  h5 {
    font-size: ${({ theme }) => theme.typography.sizeH5};
  }
`;

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 70px;
  justify-items: center;
`;

const AllProjects = () => {
  const [projects, setProjects] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(
  //   () => async () => {
  //     const { data } = await axios.get('projects');
  //     setProjects(data);
  //     console.log('i am working !')
  //     data && setIsLoading(false);
  //   },
  //   [],
  // );

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('projects');
      setProjects(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const { data } = await axios.get('projects');
  //     setProjects(data);
  //     console.log(data);
  //     setIsLoading(false);
  //   }, 0);
  //     }, []);

  return isLoading ? (
    <StyledLoading>
      <Spinner />
      <h5>Pobieraie projektów z bazy danych...</h5>
    </StyledLoading>
  ) : (
    <StyledProjects>
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

export default AllProjects;

// const Projects = () => {
//   const [project, setProject] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(async () => {
//       const { data } = await axios.get('projects');
//       setProject(data);
//       setIsLoading(false);
//     }, 0);

//     // const fetchData = async () => {
//     //   const { data } = await axios.get('projects');
//     //   console.log(data);
//     //   setProject(data);
//     // };
//     // fetchData();
//   }, []);

//   return isLoading === true ? (
//     <>
//       <ImageBlock img={image} title="Projekty" />
//       <StyledLoading>
//         Pobieraie projektów z bazy danych...
//         <Spinner />
//       </StyledLoading>
//     </>
//   ) : (
//     <StyledProjects>
//       <ImageBlock img={image} title="Projekty" />
//       {project.map(({ slug, _id, title, category, date, description }) => (
//         <Project
//           key={_id}
//           slug={slug}
//           title={title}
//           category={category.category}
//           date={date}
//           description={description}
//         />
//       ))}
//     </StyledProjects>
//   );
//   // <StyledProjects>
//   //   <ImageBlock img={image} title="Projekty" />
//   //   {isLoading ? <div>Loading...</div> :
//   //   {project.map(({ slug, _id, title, category, date, description }) => (
//   //        <Project
//   //          key={_id}
//   //          slug={slug}
//   //          title={title}
//   //          category={category}
//   //          date={date}
//   //          description={description}
//   //        />
//   //      ))}
//   //   }
//   // </StyledProjects>
// };
