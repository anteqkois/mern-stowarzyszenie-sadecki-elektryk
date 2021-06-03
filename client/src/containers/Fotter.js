import React from 'react';
import styled from 'styled-components';

import Association from '../components/fotter/Association';
import Created from '../components/fotter/Created';
import Copyright from '../components/fotter/Copyright';

import { ReactComponent as BackgroundFooter } from '../assets/backgroundFooter.svg'

const StyledFotter = styled.footer`
  width: 100vw;
  padding: 10em 5% 2em 5%;
  position: relative;
  display: grid;
  grid-template-rows: 0.8fr 1fr 0.3fr;
  grid-row-gap: 2em;
  place-content: center;
  color: ${({ theme }) => theme.colors.primary};
  overflow-x: hidden;
  overflow-y: clip;

  a {
    all: unset;
    color: ${({ theme }) => theme.colors.label};
    font-size: ${({ theme }) => theme.typography.sizeTiny};
    padding: 0.6em 0;
    display: flex;
    gap: 1em;
    align-items: center;
    transition: color ease-in-out 0.2s;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: color ease-in-out 0.2s;
    }
  }
  h4 {
    font-weight: ${({ theme }) => theme.typography.weightBold};
    text-transform: uppercase;
    padding: 1em 0;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

const StyledBackgroundFooter = styled(BackgroundFooter)`
  position: absolute;
  bottom: 0;
  left: -45%;
  width: 200%;
  z-index: ${({ theme }) => theme.zIndex.levelMinus1};

  ${({ theme }) => theme.media.tablet} {
    left: 0;
    width: 150%;
    height: 95%;
  }
  ${({ theme }) => theme.media.desktop} {
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Fotter = () => {
  return (
    <StyledFotter>
      <StyledBackgroundFooter/>
      <Created />
      <Association />
      <Copyright />
    </StyledFotter>
  );
};

export default Fotter;
