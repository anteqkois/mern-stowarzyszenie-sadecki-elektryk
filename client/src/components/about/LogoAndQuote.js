import React, { useRef } from 'react';
import styled from 'styled-components'
import gsap from 'gsap';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const StyledLogo = styled(Logo)`
  width: 100vw;
`;

const StyledQuote = styled.h2`
  font-size: 200px;
  padding: 0.6em;
  white-space: nowrap;
  color: transparent;
  overflow-x:  hidden;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.accent};
`;

const LogoAndQuote = () => {

  const quote = useRef(null);
  
  return (
    <>
      <StyledLogo />
      <StyledQuote ref={quote} >
        ,,Założyliśmy stowarzyszenie, bo łączy nas solidarność interesów,
        wspólność celów i potrzeb.”
      </StyledQuote>
    </>
  );
};

export default LogoAndQuote;
