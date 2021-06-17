import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../components/utils/Button';
import Delete from '../components/utils/Delete';

import { get, post } from '../helpers/projectsAPI';
import { getAll } from '../helpers/categoriesAPI';

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

    :disabled {
      background-color: ${({ theme }) => theme.colors.noActive};
      cursor: not-allowed;
    }

    &:nth-of-type(3) {
      height: 520px;

      ${({ theme }) => theme.media.bigTablet} {
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

  div {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

const StyledProcessing = styled.div`
  > div {
    :nth-of-type(1) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${({ theme }) => theme.colors.noActive};
      z-index: ${({ theme }) => theme.zIndex.level2};
      opacity: 0.7;
    }
    :nth-of-type(2) {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 80vw;
      height: 70vh;
      display: flex;
      gap: 40px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      text-align: center;
      font-size: ${({ theme }) => theme.typography.sizeH5};
      font-weight: ${({ theme }) => theme.typography.weightBold};
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.accent};
      z-index: ${({ theme }) => theme.zIndex.level3};
      box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.37);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      transform: translate(-50%, -50%);
    }
  }
`;

const StyledLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //text-align: center;
  font-size: ${({ theme }) => theme.typography.sizeH5};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  color: ${({ theme }) => theme.colors.accent};
  transform: translate(-50%, -50%);
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

const OPTION_TYPE = {
  normal: 'normal',
  processing: 'processing',
  saved: 'saved',
};

const ProjectsEdit = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [option, setOption] = useState('normal');

  const [categories, setCategories] = useState('');
  const [project, setProject] = useState('');

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const toAdd = match.path.search(/add/) >= 0;

  useEffect(() => {
    (async () => {
      const data = !toAdd ? await get(match.params.id) : '';

      setProject(!toAdd ? await get(match.params.id) : '');
      setSlug(data ? data.slug : '');
      setTitle(data ? data.title : '');
      setDate(data ? convertDate(data.date) : '');
      setCategory(data ? data.category : '');
      setDescription(data ? data.description : '');

      setCategories(await getAll());
      setIsLoading(false);
    })();
  }, [match.params.id, toAdd]);

  const handlePOST = async (values) => {
    // setTimeout(() => {
    //   setOption('saved');
    // }, 3000);

    const data = await post(values);
    console.log(data);
    setOption('saved');
  };

  const handlePUT = () => {
    console.log('PUT');
  };

  const formik = useFormik({
    initialValues: {
      slug: slug,
      title: title,
      category: category,
      date: date,
      description: description,
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setOption('processing');
      setSlug(values.slug);
      setTitle(values.title);
      setCategory(values.category);
      setDate(values.date);
      setDescription(values.description);
      (() => (toAdd ? handlePOST(values) : handlePUT()))();
      resetForm();
    },
    enableReinitialize: true,
  });

  return isLoading ? (
    <StyledLoading>
      <h5>Loading...</h5>
    </StyledLoading>
  ) : (
    <StyledContainer>
      {toAdd ? (
        <h5>Wypełnij dane projektu:</h5>
      ) : (
        <h5>
          Edytujesz: <span>{title}</span>
        </h5>
      )}

      {option === OPTION_TYPE.normal && (
        <StyledForm onSubmit={formik.handleSubmit}>
          <label htmlFor="slug">Slug:</label>
          <textarea
            disabled={toAdd ? true : false}
            //required
            id="slug"
            name="slug"
            onChange={formik.handleChange}
            value={formik.values.slug}
          />
          <label htmlFor="title">Tytuł:</label>
          <textarea
            id="title"
            name="title"
            //required
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="category">Kategoria:</label>
          <select
            id="category"
            name="category"
            //required
            onChange={formik.handleChange}
            value={formik.values.category.category}
          >
            <option key={'default'} value="" selected disabled hidden>
              Wybierz kategorię
            </option>
            {categories.map(({ category, _id }) => (
              <option key={_id} value={_id}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor="date">Data:</label>
          <input
            id="date"
            name="date"
            type="date"
            //required
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          <label htmlFor="description">Opis:</label>
          <textarea
            id="description"
            name="description"
            //required
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <div>
            <Delete onClick={formik.resetForm}></Delete>
            <Button type="submit">Zapisz</Button>
          </div>
        </StyledForm>
      )}

      {option !== OPTION_TYPE.normal && (
        <StyledProcessing>
          <div></div>
          <div>
            {option === OPTION_TYPE.processing && (
              <p>Trwa zapisywanie projektu</p>
            )}
            {option === OPTION_TYPE.saved && (
              <>
                <p>
                  Projekt <q>{title}</q> został zapisany
                </p>
                <Link to="/admin">
                  <Button>Wróć do menu</Button>
                </Link>
              </>
            )}
          </div>
        </StyledProcessing>
      )}
    </StyledContainer>
  );
};

export default ProjectsEdit;
