import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Lines } from '../assets/Lines.svg';

const StyledPatron = styled.div`
  h1 {
    text-align: center;
    text-transform: uppercase;

    background-image: ${({ theme }) => theme.colors.gradient};
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    font-size: ${({ theme }) => theme.typography.sizeH3};
    font-weight: ${({ theme }) => theme.typography.weightBlack};
    line-height: 0.9em;
    z-index: ${({ theme }) => theme.zIndex.level1};
  }

  ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH2};
    }
  }
  ${({ theme }) => theme.media.bigTablet} {
    h1 {
      font-size: ${({ theme }) => theme.typography.sizeH1};
    }
  }
`;

const StyledLines = styled(Lines)`
  width: 100%;
`;

const Patron = () => {
  return (
    <StyledPatron>
      <StyledLines />
      <h1>Pomagają nam</h1>
    </StyledPatron>
  );
};

export default Patron;
