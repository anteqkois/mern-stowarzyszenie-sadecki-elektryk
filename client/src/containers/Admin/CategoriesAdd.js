import React, { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

import Button from '../../components/utils/Button';
import Delete from '../../components/utils/Delete';
import Modal from '../../components/utils/Modal';

import * as categoriesAPI from '../../helpers/categoriesAPI';
import useError from '../../hooks/useError';

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 20px 15px;
    color: ${({ theme }) => theme.colors.text};
  }

  input {
    display: block;
    padding: 10px;
    margin: 5px 0 20px;
    min-height: 50px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.noActive};
    border-top: unset;
    border-right: unset;
    border-radius: 5px;
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
      ${theme.colors.secondary} 85%
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

const OPTION_TYPE = {
  normal: 'normal',
  processing: 'processing',
  saved: 'saved',
};

const CategoriesAdd = () => {
  const [category, setCategory] = useState('');
  const [option, setOption] = useState(OPTION_TYPE.normal);

  const setError = useError("/admin");

  const handlePost = async (values) => {
    await categoriesAPI
      .post(values)
      .then(({ data }) => {
        setOption(OPTION_TYPE.saved);
      })
      .catch((error) => {
        setError(error.response.data);
        setOption(OPTION_TYPE.normal);
      });
  };

  const formik = useFormik({
    initialValues: {
      category: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setOption(OPTION_TYPE.processing);
      setCategory(values.category);
      resetForm();
      handlePost(values);
    },
  });

  return (
    <StyledContainer>
      <h5>Dodaj nową kategorię:</h5>
      <StyledForm onSubmit={formik.handleSubmit}>
        <label htmlFor="slug">Nazwa kategorii:</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        <div>
          <Delete onClick={formik.resetForm}>Anuluj</Delete>
          <Button type="submit">Zapisz</Button>
        </div>
      </StyledForm>
      {option === OPTION_TYPE.processing && (
        <Modal setIsOpen={() => setOption(OPTION_TYPE.normal)}>
          Dodawanie nowej kategorii...
        </Modal>
      )}
      {option === OPTION_TYPE.saved && (
        <Modal setIsOpen={() => setOption(OPTION_TYPE.normal)}>
          Udało się dodać ,,{category}'' do kategorii!
        </Modal>
      )}
    </StyledContainer>
  );
};

export default CategoriesAdd;
