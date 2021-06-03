import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ProjectAdmin from '../components/project/ProjectAdmin';

import * as projectsAPI from '../helpers/projectsAPI.js';

const StyledContainer = styled.div`
  //margin: 70px 0 70px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  h5 {
    font-size: ${({ theme }) => theme.typography.sizeH5};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    text-transform: uppercase;
  }

  ${({ theme }) => theme.media.desktop}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h5{
      text-align: center;
      grid-column: 1/3;
    }
  }
`;

const testData = [
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
  {
    slug: 'ii-edycja-debaty-naukowej-w-elektryku',
    _id: '6001d22c966a700824201322',
    category: {
      _id: '60151f1133b10306b42ad8ab',
      category: 'culture',
      __v: 0,
    },
    title: 'II Edycja Debaty Naukowej w Elektryku',
    date: '2019-12-09T23:00:00.000Z',
    description:
      '10 grudnia 2019 w świetlicy ZSEM odbyła się ostatnia w ramach projektu debata, tym razem szkolna, która była ostatnim elementem projektu.  Do tej debaty zgłosiły się dwie klasy informatyczne III j oraz II i. Obie klasy wystawiła do debaty trzy, 3-osobowe grupy, z których każda debatowała na inny temat. Tematy nad którymi debatowano to: "Gry komputerowe – rozwijają czy szkodzą?", "Planeta albo plastik – czy mamy jeszcze szansę?", "Unia Europejska – brexit czy sojusz ?". W komisji konkursowej zasiedli: Przewodnicząca Jury Pani Katarzyna Tokarczyk, dziennikarka z Gazety Krakowskiej, która pełniła rolę moderatora debaty, Wicedyrektorka ZSEM Pani Ewa Dziedzic, Prezes Stowarzyszenia Sądecki Elektryk Pan Marek Ryglewicz, Wychowawczyni klasy III j Pani Małgorzata Matląg, Wychowawca klasy II j Pan Piotr Szczypuła.',
    __v: 0,
  },
  {
    slug: 'spotkania-z-kultura-w-elektryku',
    _id: '6001d22c966a700824201323',
    category: {
      _id: '60151f1133b10306b42ad8ab',
      category: 'culture',
      __v: 0,
    },
    title: 'Spotkania z Kulturą w Elektryku',
    date: '2019-12-06T23:00:00.000Z',
    description:
      '28 grudnia 2019r. w Zespole Szkół Elektryczno- Mechanicznych w Nowym Sączu odbył się konkurs literacko- teatralny. Młodzież zaprezentowała swoje umiejętności, zdobyte podczas warsztatów poetyckich i teatralnych, realizowanych w ramach projektu "Spotkania z kulturą w Elektryku". Konkurs składał się z dwóch części: pierwszej literackiej - młodzież prezentowała swoje wiersze oraz drugiej teatralnej - krótkie formy teatralne. W konkursie wzięli udział uczniowie  Zespołu Szkół Elektryczno - Mechanicznych w Nowym Sączu i II Liceum Ogólnokształcącego w Nowym Sączu.',
    __v: 0,
  },
  {
    slug: 'pszczoly-zagoscily-w-elektryku-ii-edycja',
    _id: '6001d22c966a700824201324',
    category: {
      _id: '60151f1133b10306b42ad8ad',
      category: 'nature',
      __v: 0,
    },
    title: 'Pszczoły Zagościły w Elektryku II Edycja',
    date: '2019-12-03T23:00:00.000Z',
    description:
      'Tym razem 4 grudnia 2019r. w świetlicy szkolnej spotkali się wszyscy uczestnicy projektu na podsumowaniu oraz ogłoszeniu wyników prac konkursowych w trzech kategoriach: plakat, strona oraz aplikacja. W komisji konkursowej zasiedli przedstawiciele Karpackiego Związku Pszczelarzy pp. Stanisław Kowalczyk - Prezes KZP, Narcyz Kędziora - instruktor w KZP, Zbigniew Gawryś - Prezes Koła Pszczelarzy w Nowym Sączu oraz Adam Szołdra z KZP. Wśród gości obecni było p. Ewa Dziedzic, wicedyrektor szkoły, dyrektor wydziału środowiska Grzegorz Tabasz oraz przedstawicielka firmy Wiśniowski p. Urszula Kądziołka. Prowadzeniem spotkania oraz organizacją całej imprezy zajęły się klasy I oraz II g pod kierunkiem p. Anny Chronowskiej. ',
    __v: 0,
  },
  {
    slug: 'i-maraton-coding-night-w-elektryku',
    _id: '6001d22c966a700824201325',
    category: {
      _id: '60151f1133b10306b42ad8ae',
      category: 'programing',
      __v: 0,
    },
    title: 'I Maraton Coding Night w Elektryku',
    date: '2019-10-24T22:00:00.000Z',
    description:
      'W dniach 25-26 października 2019 odbyła się pierwsza edycja Coding Night w Elektryku. A w niej wzięło udział 12 zespołów, w każdym od 2 do 5 uczniów, w sumie 37 programistów. Cała impreza zaczęła się o godzinie 13 i trwała aż 20, jednak znalazł się też czas choćby na zjedzenie pizzy ! Tematem pierwszej edycji był bardzo przyjemny dla uczniów, a mianowicie wyzywanie polegało na zaprojektowaniu gry komputerowej. Zwycięzcy byli wybrani przez jury złożone m.in z programistów z dwóch firm programistycznych IBCS Poland oraz GOTOMA, które są partnerami stowarzyszenia i wspierali je w realizacji tego przedsięwzięcia. W komisji znajdowali się również przedstawiciele z firmy FAKRO, która od wielu lat wspiera stowarzyszenie. Również Prezydent Nowego Sącza, Ludomir Handzel objął Patronatem Honorowym I Maraton Programistyczny w sądeckim Elektryku. Trzy zwycięskie drużyny zgarnęły wypasione nagrody pieniężne, jednak pozostałe również otrzymały nagrody pocieszenia w kwocie 100 zł, a pizzernia GONDOLA przygotowało niespodziankę dla wszystkich zawodników w postaci bonu.',
    __v: 0,
  },
];

const ProjectsAdminView = () => {
  const [projects, setProjects] = useState(testData);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     setProjects(await projectsAPI.getAll());
  //     setIsLoading(false);
  //   })();
  // }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <StyledContainer>
      <h5>Wszyskie projekty</h5>
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
