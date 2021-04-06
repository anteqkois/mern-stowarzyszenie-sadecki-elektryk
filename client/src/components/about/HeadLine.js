import React from 'react';
import Logo from '../utils/Logo';
import styled from 'styled-components';

const StyledHeadLine = styled.div`
  position: relative;
  height: 140px;
  padding: 15px;

  img {
    position: absolute;
    right: 10vw;
    bottom: 65px;
    //height: 120px;
    min-height: 120px;
    height: 40vw;
    max-height: 155px;
  }

  h1 {
    position: absolute;
    bottom: 0;
    text-transform: uppercase;
    max-width: 18ch;
    line-height: 1.1em;
    font-size: ${({ theme }) => theme.typography.sizeH5};
    font-weight: ${({ theme }) => theme.typography.weightExtraBold};
    color: ${({ theme }) => theme.colors.accent};
  }

  ${({ theme }) => theme.media.bigPhone} {
    img {
      height: 35vw;
      max-height: 200px;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    display: flex;
    align-items: flex-end;
    margin: 100px 0;
    height: auto;

    img {
      position: static;
      max-height: 200px;
    }
    h1 {
      position: static;
      margin: 0.3em;
      font-size: ${({ theme }) => theme.typography.sizeH3};
    }
  }

  ${({ theme }) => theme.media.bigTablet} {

    img {
      max-height: 300px;
    }
    h1 {
      margin: 0.6em;
      font-size: ${({ theme }) => theme.typography.sizeH2};
      font-weight: ${({ theme }) => theme.typography.weightExtraBold};
    }
  }
`;

const HeadLine = ({className}) => {
  return (
    <StyledHeadLine className={className}>
      <Logo/>
      <h1>Stowarzyszenie Sądecki Elektryk</h1>
    </StyledHeadLine>
  );
};

export default HeadLine;
