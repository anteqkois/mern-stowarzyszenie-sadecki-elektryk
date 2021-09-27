import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

import { ReactComponent as TeacherAndStudent } from '../../assets/StudentAndTeacher.svg';

const StyledNotFound = styled.div`
  display: grid;
  grid-template-rows: 30% 50% 20%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 80%;
    margin: 10% auto;
    max-width: 400px;
  }
  a {
    all: unset;
    justify-self: center;
  }
  
  ${({ theme }) => theme.media.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    padding: 5vw;
    
    svg{
      max-width: unset;
      place-self: center;
      transform: translateY(7vw);
    }
    a{
      grid-column: 2/3;
      grid-row: 1/2;
      place-self: center;
      transform: translateY(10vw);
    }
  }
`;

const StyledHeader = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: clamp(120px, 35vw, 350px);
    line-height: 1em;
    font-weight: ${({ theme }) => theme.typography.weightBold};
    :nth-of-type(2) {
      padding: 0 10%;
      text-transform: unset;
      font-size: clamp(25px, 5vw, 50px);
    }
  }
  ${({ theme }) => theme.media.tablet} {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: center;
    h1:nth-of-type(2) {
      padding: 0;
    }
  }
`;

function NotFound({location}) {
  return (
    <StyledNotFound>
      <StyledHeader>
        <h1>404</h1>
        <h1>
          Nie znaleziono strony pod adresem: <i>{location.pathname}</i>
        </h1>
      </StyledHeader>
      <TeacherAndStudent />
      <Link to="/" tabIndex="-1">
        <Button>Strona Główna</Button>
      </Link>
    </StyledNotFound>
  );
}

export default NotFound;
