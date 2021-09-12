import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../../components/utils/Button';
import Delete from '../../components/utils/Delete';
import Modal from '../../components/utils/Modal';
import Loading from '../../components/utils/Loading';

import * as projectsAPI from '../../helpers/projectsAPI';
import { useError } from '../../hooks/useError';

const StyledContainer = styled.main`
  padding: 5px 10px;

  header {
    text-align: center;
    margin: 30px 0;
    color: ${({ theme }) => theme.colors.text};
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
    row-gap: 20px;
    padding: 20px 10px;
    margin: 20px 0;
    width: 100%;
    max-width: 500px;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
    border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
    border-radius: 10px;
    background: ${({ theme }) => `linear-gradient(
      120deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.secondary} 85%
      )`};
    background-size: 150%;
    box-shadow: ${({ theme }) => theme.colors.primary} 0px -8px 1px,
      ${({ theme }) => theme.colors.primary} 0px -12px 30px,
      black 0px 0px 10px -4px;
    transition: background 0.4s ease-in-out;

    p {
      grid-column: 1/3;
    }

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

const StyledLink = styled(Link)`
  all: unset;
`;

const ListOfProjectsToEdit = ({ location }) => {
  const [projects, setProjects] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const [haveError, setHaveError, showError] = useError(() =>
    window.location.assign('/admin'),
  );

  useEffect(() => {
    (async () => {
      try {
        setProjects(await projectsAPI.getAll());
      } catch (error) {
        setHaveError(error.response.data);
      }
      setIsLoading(false);
    })();
  }, []);

  const handleDelete = async (slug, title) => {
    const accpet = window.confirm(
      `Czy napewno chcesz usunąć projekt ,,${title}'' ?`,
    );

    if (accpet) {
      (async () => {
        await projectsAPI
          .remove(slug)
          .then(({ data }) => {
            setDeleted(title);
          })
          .catch((error) => {
            setHaveError(error.response.data);
          });
      })();
    }
  };

  return isLoading ? (
    <Loading loadingMessage="łądowanie projektów" />
  ) : haveError ? (
    showError()
  ) : (
    <StyledContainer>
      <header>Wszyskie projekty</header>
      <ul>
        {projects.map(({ slug, _id, title }) => (
          <li key={_id}>
            <p>{title}</p>
            <Delete onClick={() => handleDelete(slug, title)}>
              Usuń
            </Delete>
            <StyledLink to={(location) => `${location.pathname}/${slug}`}>
              <Button option="normal">Edytuj</Button>
            </StyledLink>
          </li>
        ))}
      </ul>
      {deleted && (
        <Modal
          setIsOpen={() => {
            setDeleted(!deleted);
            window.location.reload();
          }}
        >
          <p>
            Projekt <q>{deleted}</q> został usunięty!
          </p>
        </Modal>
      )}
      {showError()}
    </StyledContainer>
  );
};

export default ListOfProjectsToEdit;
