import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import image from '../assets/project-block.jpg';
import ImageBlock from '../components/utils/ImageBlock';
import Project from '../components/project/Project';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 30px;
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

// let data = [
//   {
//     slug: 'zsem-z-ii-miejscem-w-rankingu-perspektyw',
//     _id: '601d9972e4b1cf0eac3e84e3',
//     title: 'ZSEM z II miejscem w Rankingu Perspektyw',
//     category: {
//       _id: '60151f1133b10306b42ad8ac',
//       category: 'learn',
//       __v: 0,
//     },
//     date: '2021-01-26T23:00:00.000Z',
//     description:
//       'W bardzo trudnym roku, z powodu panujących warunków, Sądecki Elektryk znów znajduję się na podium Rankingu Najlepszych Techników w Polsce. W 2021 roku zajmuje II miejsce, tak jak w poprzednim roku. Wszystko dzięki wspólnemu wysiłkowi Uczniów, Nauczycieli, Pracowników szkoły jak i Rodziców. Do sukcesu przyczyniło się też z pewnością Stowarzyszenie, do którego należy wielu nauczycieli i wspomagają Oni uczniów w szelaki sposób w nauce i rozwoju swoich umiejętności.',
//     __v: 0,
//   },
//   {
//     slug: 'ix-piknik-naukowy-w-elektryku',
//     _id: '6001d22c966a700824201320',
//     category: {
//       _id: '60151f1133b10306b42ad8ac',
//       category: 'learn',
//       __v: 0,
//     },
//     title: 'IX Piknik Naukowy w Elektryku',
//     date: '2020-02-13T23:00:00.000Z',
//     description:
//       'Piknik Naukowy odbył już się dziewiąty raz. Gościł on też Prezydenta Nowego Sącza Ludomira Handzla, który spotkał się z pasjonatami prezentującymi swoje prace podczas IX Pikniku Naukowego w Elektryku. Uczniowie prezentowali swoje prace w czterech kategoriach: elektronika/elektrotechnika, automatyka/robotyka, multimedia oraz informatyka. Wszystkich wynalazków było dwadzieścia. Oczywiście najlepsze z nich zostały nagrodzone, a wyróżnienia wręczał prezydent Nowego Sącza Ludomir Handzel. W pikniku chodzi także o to by świetne pomysły były później wcielone w życie i służyły ludziom. Projekty budzą zainteresowanie firm, a nawet tych zza granicy.',
//     __v: 0,
//   },
//   {
//     slug: 'nauka-programowania-w-praktyce-iii-edycja',
//     _id: '6001d22c966a700824201321',
//     category: {
//       _id: '60151f1133b10306b42ad8ae',
//       category: 'programing',
//       __v: 0,
//     },
//     title: 'Nauka Programowania w Praktyce III Edycja',
//     date: '2019-12-10T23:00:00.000Z',
//     description:
//       'To ostatni projekt realizowany w roku 2019. Rozpoczął się we wrześniu 15 godzinnymi zajęciami z programowania, które prowadzili studenci należący do Koła Naukowego Informatyków.  Następnie uczniowie mieli dwa miesiące na pracę własną. 11 grudnia wszyscy spotkali się, żeby ocenić przygotowane projekty programistyczne. Ocena prac oraz podsumowanie projektu odbyło się w salach Instytutu Technicznego PWSZ o godzinie 10-tej. Uczestniczyli w nim beneficjenci projektu oraz uczniowie klasy programistycznej I pP.  Komisja konkursowa składała się z trzech wykładowców Instytutu Technicznego po przewodnictwem dr Grzegorza Litawy. Ostatecznie swoje prace programistyczne zaprezentowało 10 uczestników.',
//     __v: 0,
//   },
// ];

const Projects = () => {
  const [project, setProject] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  //console.log(project);

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

  return (  
    isLoading === true ? (
      <div>Loading...</div>
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
    )
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
  );
};

export default Projects;
