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

    ${({ theme }) => theme.media.tablet} {
      grid-column: 1/2;
      grid-row: 1/2;
      place-self: center;
    }
  }
  a {
    all: unset;
    justify-self: center;

    ${({ theme }) => theme.media.tablet} {
      grid-column: 2/3;
      grid-row: 1/2;
      place-self: center;
      //transform: translateY(50px);
      /* place-self: center; */
    }
  }

  ${({ theme }) => theme.media.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  text-transform: uppercase;
  h1 {
    font-size: clamp(120px, 35vw, 300px);
    line-height: 1em;
    font-weight: ${({ theme }) => theme.typography.weightBold};
    :nth-of-type(2) {
      font-size: clamp(30px, 10vw, 90px);
    }
  }
  ${({ theme }) => theme.media.tablet} {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: center;
  }
`;

function NotFound() {
  return (
    <StyledNotFound>
      <StyledHeader>
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </StyledHeader>
      <TeacherAndStudent/>
      <Link to="/projects" tabIndex="-1">
        <Button>Więcej Projektów</Button>
      </Link>
    </StyledNotFound>
  );
}

export default NotFound;
