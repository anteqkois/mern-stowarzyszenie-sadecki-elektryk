import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/utils/Button';

import { ReactComponent as Background } from '../assets/background.svg';

const StyledHeader = styled.header`
  position: relative;
  height: 700px;
  width: 100%;
  padding: 90px 10% 0;
  overflow-x: hidden;
  overflow-y: clip;

  h1 {
    margin: 1em 0;
    text-transform: uppercase;
    line-height: 1.1em;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.sizeH5};
    font-weight: ${({ theme }) => theme.typography.weightExtraBold};
  }

  p {
    margin: 3em 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.sizeNormal};
    max-width: 60ch;
  }

  ${({ theme }) => theme.media.desktop} {
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH3};
    }
  }
`;

const StyledBackground = styled(Background)`
  width: 200vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: -50px;
  z-index: ${({ theme }) => theme.zIndex.levelMinus1};

  ${({ theme }) => theme.media.desktop} {
    width: 100vw;
    max-height: unset;
    left: 0;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
`;

const StyledButton = styled(Button)`
  left: 50%;
  transform: translateX(-50%);
  
  :hover,
  :focus {
    transform: translate(-50%, -7px);
  }

  ${({ theme }) => theme.media.tablet} {
    left: 25%;
  }
`;

const ProjectsIntro = () => {

  return (
    <StyledHeader>
      <StyledBackground fill="url(#light)" />
      <h1>Zrealizowane projekty</h1>
      <p>
        Stowarzyszenie zrealizowało wiele projektów związnych z róznymi
        kategoriami jak chociażby z programowaniem, naturą czy kulturą. Poniżej
        reszta kart z zrealizwoanymi projektami, które zostały narazie opisane.
      </p>
      <StyledLink to="/">
        <StyledButton  option='white' >Strona główna</StyledButton>
      </StyledLink>
    </StyledHeader>
  );
};

export default ProjectsIntro;
