import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../utils/Button';
import Delete from '../utils/Delete';
import Modal from '../utils/Modal';

import * as projectsAPI from '../../helpers/projectsAPI';
import { useError } from '../../helpers/useError';

const StyledProject = styled.div`
  padding: 10px;
  width: 90%;
  color: ${({ theme }) => theme.colors.text};
  border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-radius: 10px;
  background: ${({ theme }) => `linear-gradient(
    120deg,
   ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 97%
  )`};
  box-shadow: ${({ theme }) => theme.colors.primary} 0px -8px 1px,
    ${({ theme }) => theme.colors.primary} 0px -12px 30px,
    black 0px 0px 10px -4px;

  span {
    font-weight: ${({ theme }) => theme.typography.weightBold};
    color: ${({ theme }) => theme.colors.label};
  }
  p {
    border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
    margin: 0.5em;
  }
  p:last-of-type {
    border-bottom: unset;
  }

  button {
    display: inline-block;
    margin: 10px;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const ProjectAdmin = ({
  slug,
  _id,
  title,
  category,
  date,
  description,
  location,
}) => {
  const [deleted, setDeleted] = useState(false);
  const [haveError, setHaveError, showError] = useError();

  const dateToConvert = new Date(date);
  const dateToPut = `${dateToConvert.getDate()} ${dateToConvert.toLocaleString(
    'default',
    {
      month: 'long',
    },
  )} ${dateToConvert.getFullYear()}`;

  const handleDelete = async () => {
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

  return (
    <>
      <StyledProject>
        <p>
          <span>Tytuł: </span>
          {title}
        </p>
        <p>
          <span>Kategoria: </span>
          {category}
        </p>
        <p>
          <span>Data: </span>
          {dateToPut}
        </p>
        <p>
          <span>id: </span>
          {_id}
        </p>
        <p>
          <span>Opis: </span>
          {description}
        </p>
        <div>
          <Delete onClick={handleDelete}>Usuń</Delete>
          <StyledLink
            to={(location) => `${location.pathname}/edit/${slug}`}
            tabIndex="-1"
          >
            <Button>Edytuj</Button>
          </StyledLink>
        </div>
      </StyledProject>
      {deleted && (
        <Modal
          setIsOpen={() => {
            setDeleted();
            window.location.reload();
          }}
        >{`Projekt ,,${title}'' został usunięty!`}</Modal>
      )}
      {showError()}
    </>
  );
};

export default ProjectAdmin;
