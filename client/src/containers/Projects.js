import React from 'react';
import styled from 'styled-components';
import image from '../assets/project-block.jpg';
import ImageBlock from '../components/imageBlock/ImageBlock';
import Project from '../components/project/Project';

let data = [
  {
    slug: 'zsem-z-ii-miejscem-w-rankingu-perspektyw',
    _id: '601d9972e4b1cf0eac3e84e3',
    title: 'ZSEM z II miejscem w Rankingu Perspektyw',
    category: {
      _id: '60151f1133b10306b42ad8ac',
      category: 'learn',
      __v: 0,
    },
    date: '2021-01-26T23:00:00.000Z',
    description:
      'W bardzo trudnym roku, z powodu panujących warunków, Sądecki Elektryk znów znajduję się na podium Rankingu Najlepszych Techników w Polsce. W 2021 roku zajmuje II miejsce, tak jak w poprzednim roku. Wszystko dzięki wspólnemu wysiłkowi Uczniów, Nauczycieli, Pracowników szkoły jak i Rodziców. Do sukcesu przyczyniło się też z pewnością Stowarzyszenie, do którego należy wielu nauczycieli i wspomagają Oni uczniów w szelaki sposób w nauce i rozwoju swoich umiejętności.',
    __v: 0,
  },
  {
    slug: 'ix-piknik-naukowy-w-elektryku',
    _id: '6001d22c966a700824201320',
    category: {
      _id: '60151f1133b10306b42ad8ac',
      category: 'learn',
      __v: 0,
    },
    title: 'IX Piknik Naukowy w Elektryku',
    date: '2020-02-13T23:00:00.000Z',
    description:
      'Piknik Naukowy odbył już się dziewiąty raz. Gościł on też Prezydenta Nowego Sącza Ludomira Handzla, który spotkał się z pasjonatami prezentującymi swoje prace podczas IX Pikniku Naukowego w Elektryku. Uczniowie prezentowali swoje prace w czterech kategoriach: elektronika/elektrotechnika, automatyka/robotyka, multimedia oraz informatyka. Wszystkich wynalazków było dwadzieścia. Oczywiście najlepsze z nich zostały nagrodzone, a wyróżnienia wręczał prezydent Nowego Sącza Ludomir Handzel. W pikniku chodzi także o to by świetne pomysły były później wcielone w życie i służyły ludziom. Projekty budzą zainteresowanie firm, a nawet tych zza granicy.',
    __v: 0,
  },
  {
    slug: 'nauka-programowania-w-praktyce-iii-edycja',
    _id: '6001d22c966a700824201321',
    category: {
      _id: '60151f1133b10306b42ad8ae',
      category: 'programing',
      __v: 0,
    },
    title: 'Nauka Programowania w Praktyce III Edycja',
    date: '2019-12-10T23:00:00.000Z',
    description:
      'To ostatni projekt realizowany w roku 2019. Rozpoczął się we wrześniu 15 godzinnymi zajęciami z programowania, które prowadzili studenci należący do Koła Naukowego Informatyków.  Następnie uczniowie mieli dwa miesiące na pracę własną. 11 grudnia wszyscy spotkali się, żeby ocenić przygotowane projekty programistyczne. Ocena prac oraz podsumowanie projektu odbyło się w salach Instytutu Technicznego PWSZ o godzinie 10-tej. Uczestniczyli w nim beneficjenci projektu oraz uczniowie klasy programistycznej I pP.  Komisja konkursowa składała się z trzech wykładowców Instytutu Technicznego po przewodnictwem dr Grzegorza Litawy. Ostatecznie swoje prace programistyczne zaprezentowało 10 uczestników.',
    __v: 0,
  },
];

const Projects = () => {
  return (
    <div>
      <ImageBlock img={image} title="Projekty" />
      {data.map(({ slug, _id, title, category, date, description }) => (
        //<Project slug={slug} _id={_id}  />
        <Project key={_id} slug={slug} title={title} category={category} date={date} description={description} />
        //console.log(title)
      ))}
    </div>
  );
};

export default Projects;
