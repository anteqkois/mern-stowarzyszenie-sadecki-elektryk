import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Delete from '../components/utils/Delete';
import Loading from '../components/utils/Loading';
import Modal from '../components/utils/Modal';

import * as categoriesAPI from '../helpers/categoriesAPI';
import { useError } from '../helpers/useError';

const StyledContainer = styled.main`
  padding: 5px 10px;

  header {
    text-align: center;
    margin: 20px 0;
    font-size: ${({ theme }) => theme.typography.sizeH5};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    text-transform: uppercase;
  }

  ul {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
  li {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 10px;
    margin: 20px 0;
    width: 100%;
    max-width: 500px;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
    border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
    border-radius: 10px;
    background: rgb(231, 230, 230);
    background: linear-gradient(
      39deg,
      rgba(190, 190, 190, 1) 0%,
      rgba(210, 210, 210, 1) 41%,
      rgba(251, 251, 251, 1) 95%
    );
    background-size: 150%;
    box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.3);
    transition: background 0.4s ease-in-out;

    button {
      text-align: center;
    }

    :hover {
      background-position: right;
    }
  }
  ${({ theme }) => theme.media.desktop} {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Categories = () => {
  const [categories, setCategories] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const [haveError, setHaveError, showError] = useError(() =>
    window.location.assign('/admin'),
  );

  useEffect(() => {
    (async () => {
      try {
        setCategories(await categoriesAPI.getAll());
      } catch (error) {
        setHaveError(error.response.data);
      }
      setIsLoading(false);
    })();
  }, []);

  const handleDelete = async (id, category) => {
    const accpet = window.confirm(
      `Czy napewno chcesz usunąć kategorię ,,${category}'' ?`,
    );

    if (accpet) {
      await categoriesAPI
        .remove(id)
        .then(({ data }) => {
          setDeleted(category);
        })
        .catch((error) => {
          setHaveError(error.response.data);
        });
    }
  };

  return isLoading ? (
    <Loading />
  ) : haveError ? (
    showError()
  ) : (
    <StyledContainer>
      <header>Wszyskie projekty</header>
      <ul>
        {categories.map(({ category, _id }) => (
          <li key={_id}>
            <p>{category}</p>
            <Delete onClick={() => handleDelete(_id, category)}>Usuń</Delete>
          </li>
        ))}
      </ul>
      {deleted && (
        <Modal
          setIsOpen={() => {
            setDeleted();
            window.location.reload();
          }}
        >
          Kategoria ,,{deleted}'' została usunięta
        </Modal>
      )}
    </StyledContainer>
  );
};

export default Categories;
