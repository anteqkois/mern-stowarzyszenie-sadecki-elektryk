import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

import Button from '../components/utils/Button';

import { get } from '../helpers/projectsAPI';
import { getAll } from '../helpers/categoriesAPI';

const testData = {
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
    'W dniach 25-26 października 2019 odbyła się pierwsza edycja Coding Night w Elektryku. A w niej wzięło udział 12 zespołów, w każdym od 2 do 5 uczniów, w sumie 37 programistów. Cała impreza zaczęła się o godzinie 13 i trwała aż 20, jednak znalazł się też czas choćby na zjedzenie pizzy ! Tematem pierwszej edycji był bardzo przyjemny dla uczniów, a mianowicie wyzywanie polegało na zaprojektowaniu gry komputerowej. Zwycięzcy byli wybrani przez jury złożone m.in z programistów z dwóch firm programistycznych IBCS Poland oraz GOTOMA, które są partnerami stowarzyszenia i wspierali je w realizacji tego przedsięwzięcia. W komisji znajdowali się również przedstawiciele z firmy FAKRO, która od wielu lat wspiera stowarzyszenie. Również Prezydent Nowego Sącza, Ludomir Handzel objął Patronatem Honorowym I Maraton Programistyczny w sądeckim Elektryku. Trzy zwycięskie drużyny zgarnęły wypasione nagrody pieniężne, jednak pozostałe również otrzymały nagrody pocieszenia w kwocie 100 zł, a pizzernia GONDOLA przygotowało niespodziankę dla wszystkich zawodników w postaci bonu.',
  __v: 0,
};

const testCategories = [
  {
    _id: '60151f1133b10306b42ad8ad',
    category: 'nature',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8ab',
    category: 'culture',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8aa',
    category: 'mechanics',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8ae',
    category: 'programing',
    __v: 0,
  },
  {
    _id: '60151f1133b10306b42ad8ac',
    category: 'learn',
    __v: 0,
  },
];

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 20px 15px;

    span {
      font-weight: ${({ theme }) => theme.typography.weightMedium};
    }
  }

  textarea,
  input,
  select {
    display: block;
    padding: 10px;
    margin: 5px 0 20px;
    resize: none;
    min-height: 50px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.noActive};
    border-top: unset;
    border-right: unset;
    border-radius: 5px;

    &:nth-of-type(3) {
      height: 520px;

      ${({theme}) => theme.media.bigTablet}{
        height: 180px;
      }

    }
  }
  label {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.typography.weightBold};
  }
`;
const StyledForm = styled.form`
  padding: 20px 10px;
  border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-radius: 10px;
  background: rgb(231, 230, 230);
  background: linear-gradient(
    39deg,
    rgba(204, 204, 204, 1) 0%,
    rgba(220, 220, 220, 1) 41%,
    rgba(241, 241, 241, 1) 95%
  );
  box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.3);

  div{
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

const addZero = (element) => {
  return `0${element}`;
};

const convertDate = (date) => {
  let dateToEdit = new Date(date);

  const year = dateToEdit.getFullYear();
  let month = dateToEdit.getMonth() + 1;
  month < 10 && (month = addZero(month));

  let day = dateToEdit.getDate();
  day < 10 && (day = addZero(day));

  const finalDate = [year, month, day].join('-');

  return finalDate;
};

const ProjectsEdit = ({ match }) => {
  convertDate(testData.date);

  const [categories, setCategories] = useState(testCategories);

  const [project, setProject] = useState(testData);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState(testData.title);
  const [date, setDate] = useState(convertDate(testData.date));
  const [slug, setSlug] = useState(testData.slug);
  const [category, setCategory] = useState(testData.category);
  const [description, setDescription] = useState(testData.description);

  // useEffect(() => {
  //   (async () => {
  //     setProject(await get(match.params.id));
  //     setIsLoading(false);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     setCategories(await getAll());
  //   })();
  // }, []);

  // Przy resetowaniu formularza wywołuje się także funkcja onSubmit (nie znalezione dlaczego, powinno działać?), jednak pownno dobrze działać
  // dzięki kolejnośći, najpierw wywołuje się funkcja reste, czyli finalnie formularz wraca do pierwotnej wersji,
  // a następnie zostaje zapisany, czyli nic nie pownno sięzmienić

  const formik = useFormik({
    initialValues: {
      slug: testData.slug,
      title: testData.title,
      category: testData.category,
      date: convertDate(testData.date),
      description: testData.description,
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSlug(values.slug);
      setTitle(values.title);
      setCategory(values.category);
      setDate(values.date);
      setDescription(values.description);
      resetForm();
      console.log('submit');
    },
  });

  const handleReset = (resetForm) =>{
    console.log('reset');
    resetForm();
  }

  return (
    <StyledContainer>
      <h5>
        Edytujesz: <span>{title}</span>
      </h5>
      <StyledForm onSubmit={formik.handleSubmit}>
        <label htmlFor="slug">Slug:</label>
        <textarea
          id="slug"
          name="slug"
          onChange={formik.handleChange}
          value={formik.values.slug}
        />
        <label htmlFor="title">Tytuł:</label>
        <textarea
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="category">Kategoria:</label>
        <select
          id="category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category.category}
        >
          {testCategories.map(({ category, _id }) => (
            <option key={_id} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label htmlFor="date">Data:</label>
        <input
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
        <label htmlFor="description">Opis:</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <div>
          <Button
            type="reset"
            onClick={() => handleReset(formik.resetForm)}
            option="ghost"
          >
            Anuluj
          </Button>
          <Button type="submit">Zapisz</Button>
        </div>
      </StyledForm>
    </StyledContainer>
  );
};

//  return (
//    <StyledContainer>
//      <h5>Edytujesz:{title}</h5>
//      <StyledForm onSubmit={formik.handleSubmit}>
//        <Input
//          type="text"
//          name="slug"
//          handleChange={formik.handleChange}
//          label="slug"
//          value={formik.values.slug}
//        />
//        <Input
//          type="text"
//          name="title"
//          handleChange={formik.handleChange}
//          label="title"
//          value={formik.values.title}
//        />
//        <Input
//          type="text"
//          name="category"
//          handleChange={formik.handleChange}
//          label="category"
//          value={formik.values.category}
//        />
//        <Input
//          type="date"
//          name="date"
//          handleChange={formik.handleChange}
//          label="date"
//          value={formik.values.date}
//        />
//        <Input
//          type="text"
//          name="description"
//          handleChange={formik.handleChange}
//          label="description"
//          value={formik.values.description}
//        />
//        <Button>Zaloguj</Button>
//      </StyledForm>
//    </StyledContainer>
//  );

// const Login = (props) => {
//   const [login, setLogin] = useState('');
//   const [password, setPassword] = useState('');
//   const [finished, setFinished] = useState(false);

//   const { from } = props.location.state || { from: '/' };

//   const formik = useFormik({
//     initialValues: {
//       login: login,
//       password: password,
//     },
//     onSubmit: (values, { setSubmitting }) => {
//       setLogin(values.login);
//       setPassword(values.password);
//       sessionStorage.setItem('isLogged', true);
//       setFinished(true);
//     },
//   });

//   if (finished) {
//     return <Redirect to={from.pathname} />;
//   }

//   return (
//     <StyledLogin>
//       <StyledLoginForm onSubmit={formik.handleSubmit}>
//         <h2>Zaloguj się</h2>
//         <Input
//           type="text"
//           name="login"
//           handleChange={formik.handleChange}
//           label="login"
//         />
//         <Input
//           type="password"
//           name="password"
//           handleChange={formik.handleChange}
//           label="hasło"
//         />
//         <Button>Zaloguj</Button>
//       </StyledLoginForm>
//     </StyledLogin>
//   );
// };

export default ProjectsEdit;

// {
//   testCategories.map(({ category, _id }) => {
//     const selected =
//       category === formik.values.category.category ? true : false;

//     return selected ? (
//       <option key={_id} value={category} selected>
//         {category}
//       </option>
//     ) : (
//       <option key={_id} value={category}>
//         {category}
//       </option>
//     );
//   });
// }
