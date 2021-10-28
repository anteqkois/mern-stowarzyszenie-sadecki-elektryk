import React, { useEffect, useState, useReducer } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../../components/utils/Button';
import Delete from '../../components/utils/Delete';
import Loading from '../../components/utils/Loading';
import Modal from '../../components/utils/Modal';

import * as projectsAPI from '../../helpers/projectsAPI';
import * as categoriesAPI from '../../helpers/categoriesAPI';
import useError from '../../hooks/useError';

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 20px 15px;
    color: ${({ theme }) => theme.colors.text};

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
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.noActive};
    border-top: unset;
    border-right: unset;
    border-radius: 5px;

    :disabled {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.primary};
      cursor: not-allowed;
    }

    &:nth-of-type(3) {
      :focus {
        height: 520px;
      }

      ${({ theme }) => theme.media.bigTablet} {
        height: 180px;
      }
    }
  }
  label {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.typography.weightBold};
  }
`;
const StyledForm = styled.form`
  padding: 20px 10px;
  border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-radius: 10px;
  background: ${({ theme }) => `linear-gradient(
    120deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 75%
  )`};
  box-shadow: ${({ theme }) => theme.colors.primary} 0px -8px 1px,
    ${({ theme }) => theme.colors.primary} 0px -12px 30px,
    black 0px 0px 10px -4px;

  div {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;
const StyledLink = styled(Link)`
  all: unset;
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
  deleted: 'deleted',
};
const PROJECT_TYPE = {
  update: 'update',
  delete: 'delete',
};

// TODO przenieśc logikę do jednego osobnego komponentu który w śordku będzi dopiero decydować co będzie wyświetlane w zależności od opcji, na wzór Component.processing
const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_TYPE.update:
      return { ...state, ...action.payload };
    case PROJECT_TYPE.delete:
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  categories: '',
  title: '',
  date: '',
  slug: '',
  category: '',
  description: '',
};

const ProjectsEdit = ({ match }) => {
  const toAdd = match.path.search(/add/) >= 0;

  const [isLoading, setIsLoading] = useState(true);

  //Uzyż useReducer !!!
  const [project, dispatch] = useReducer(reducer, initialState);

  const [option, setOption] = useState('normal');

  const setError = useError(
    toAdd
      ? `/admin/projects/add`
      : `/admin/projects${match.params.id ? `/edit/${match.params.id}` : ''}`,
  );

  useEffect(() => {
    (async () => {
      try {
        dispatch({
          type: PROJECT_TYPE.update,
          payload: {categories: await categoriesAPI.getAll()},
        });

        !toAdd &&
          (async () => {
            try {
              const data = await projectsAPI.get(match.params.id);

              dispatch({
                type: PROJECT_TYPE.update,
                payload: {
                  ...data,
                  date: convertDate(data.date),
                },
              });
            } catch (error) {
              setError(error.response.data);
              match.params.id = '';
            }
          })();

        setIsLoading(false);
      } catch (error) {
        setError(error.response.data);
      } finally {
      }
    })();
  }, [match.params, toAdd, setError]);

  const handleSlug = (titleToConvert) => {
    const slugToAdd = titleToConvert
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('ć', 'c')
      .replaceAll('ś', 's')
      .replaceAll('ź', 'z')
      .replaceAll('ż', 'z')
      .replaceAll('ą', 'a')
      .replaceAll('ę', 'e');
    formik.setValues({ ...formik.values, slug: slugToAdd });
  };

  const handlePost = async (values) => {
    await projectsAPI
      .post(values)
      .then(({ data }) => {
        setOption(OPTION_TYPE.saved);
      })
      .catch((error) => {
        setError(error.response.data);
        setOption(OPTION_TYPE.normal);
      });
  };

  const handlePut = async (values) => {
    await projectsAPI
      .put(match.params.id, values)
      .then(({ data }) => {
        setOption(OPTION_TYPE.saved);
        match.params.id = values.slug;
      })
      .catch((error) => {
        setError(error.response.data);
        setOption(OPTION_TYPE.normal);
        // match.params.id = values.slug;
      });
  };

  const handleDelete = (fn) => {
    const accpet = window.confirm(
      !toAdd
        ? `Czy napewno chcesz cofnąć zmiany w projekcie ,,${project.title}''?`
        : 'Czy napewno nie chcesz zapisać nowego projektu?',
    );

    accpet && fn();
  };

  const formik = useFormik({
    initialValues: {
      slug: project.slug,
      title: project.title,
      category: project.category,
      date: project.date,
      description: project.description,
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setOption('processing');

      dispatch({
        type: PROJECT_TYPE.update,
        payload: values,
      });
      (() => (toAdd ? handlePost(values) : handlePut(values)))();
      resetForm();
    },
    enableReinitialize: true,
  });

  return isLoading ? (
    <Loading />
  ) : (
    <StyledContainer>
      {toAdd ? (
        <h5>Wypełnij dane projektu:</h5>
      ) : (
        <h5>
          Edytujesz: <span>{project.title}</span>
        </h5>
      )}

      {option === OPTION_TYPE.normal && (
        <StyledForm onSubmit={formik.handleSubmit}>
          <label htmlFor="slug">Slug:</label>
          <textarea
            disabled
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
            onKeyUp={() => handleSlug(formik.values.title)}
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
            {project.categories.map(({ category, _id }) => (
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
            <Delete onClick={() => handleDelete(formik.resetForm)}></Delete>
            <Button type="submit">Zapisz</Button>
          </div>
        </StyledForm>
      )}
      {option === OPTION_TYPE.processing && (
        <Modal setIsOpen={() => setOption(OPTION_TYPE.normal)}>
          <p>Trwa zapisywanie projektu</p>
        </Modal>
      )}
      {option === OPTION_TYPE.saved && (
        <Modal
          setIsOpen={() => {
            setOption(OPTION_TYPE.normal);
            window.location.assign(`/admin/projects/edit/${match.params.id}`);
          }}
        >
          <p>
            Projekt <q>{project.title}</q> został zapisany!
          </p>
          <StyledLink to="/admin">
            <Button>Wróć do menu</Button>
          </StyledLink>
        </Modal>
      )}
    </StyledContainer>
  );
};

export default ProjectsEdit;
