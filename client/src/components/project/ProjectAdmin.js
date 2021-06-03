import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import Button from '../utils/Button'

const StyledProject = styled.div`
  padding: 10px;
  width: 90%;
  //height: 300px;
  border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-radius: 10px;
  background: rgb(231, 230, 230);
  background: linear-gradient(
    39deg,
    rgba(231, 230, 230, 1) 0%,
    rgba(240, 240, 240, 1) 41%,
    rgba(241, 241, 241, 1) 95%
  );
  box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.3);

  span {
    font-weight: ${({ theme }) => theme.typography.weightBold};
    color: ${({ theme }) => theme.colors.accent};
  }
  p {
    border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
    margin: 0.5em;
  }
  p:last-of-type {
    border-bottom: unset;
  }
  button {
    display: block;
    margin: 10px auto;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const ProjectAdmin = ({ slug, _id, title, category, date, description, location }) => {
  const dateToConvert = new Date(date);
  const dateToPut = `${dateToConvert.getDate()} ${dateToConvert.toLocaleString(
    'default',
    {
      month: 'long',
    },
  )} ${dateToConvert.getFullYear()}`;

  return (
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
      <StyledLink to={location => `${location.pathname}/edit/${slug}`}>
        <Button>Edytuj</Button>
      </StyledLink>
    </StyledProject>
  );
};

export default ProjectAdmin;
