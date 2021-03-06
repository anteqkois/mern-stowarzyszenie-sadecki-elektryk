import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../components/utils/Button';
import Delete from '../components/utils/Delete';
import Modal from '../components/utils/Modal';

import * as projectsAPI from '../helpers/projectsAPI';

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
    row-gap: 20px;
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

  useEffect(() => {
    (async () => {
      setProjects(await projectsAPI.getAll());
      setIsLoading(false);
    })();
  }, []);

  const handleDelete = async (slug, title) => {

    const accpet = window.confirm(
      `Czy napewno chcesz usunąć projekt ,,${title}'' ?`,
    );

    if (accpet) {
      // const { data } = await projectsAPI.remove(slug);
      // console.log(data);
      setDeleted(title);
    }
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <StyledContainer>
      <header>Wszyskie projekty</header>
      <ul>
        {projects.map(({ slug, _id, title }) => (
          <li key={_id}>
            <p>{title}</p>
            <Delete onClick={() => handleDelete(slug, title)}>Usuń</Delete>
            <StyledLink to={(location) => `${location.pathname}/${slug}`}>
              <Button option="normal">Edytuj</Button>
            </StyledLink>
          </li>
        ))}
      </ul>
        {deleted && (
          <Modal setIsOpen={()=>setDeleted(!deleted)}>
            <p>
              Projekt <q>{deleted}</q> został usunięty!
            </p>
          </Modal>
        )}
    </StyledContainer>
  );
};

export default ListOfProjectsToEdit;
