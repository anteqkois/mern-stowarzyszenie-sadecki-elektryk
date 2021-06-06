import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

import Button from '../components/utils/Button';

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  h5 {
    margin: 20px 15px;
  }

  input {
    display: block;
    padding: 10px;
    margin: 5px 0 20px;
    min-height: 50px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.noActive};
    border-top: unset;
    border-right: unset;
    border-radius: 5px;
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


const CategoriesAdd = () => {

  const [category, setCategory] = useState('');

  
    const formik = useFormik({
      initialValues: {
        category: '',
      },
      onSubmit: (values, { setSubmitting, resetForm }) => {
        setCategory(values.category);
        resetForm();
        console.log('submit');
      },
    });

    const handleReset = (resetForm) => {
      console.log('reset');
      resetForm();
    };

  
  return (
    <StyledContainer>
      <h5>
        Dodaj nową kategorię:
      </h5>
      <StyledForm onSubmit={formik.handleSubmit}>
        <label htmlFor="slug">Nazwa kategorii:</label>
        <input
        type='text'
          id="category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
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

export default CategoriesAdd;
