import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const StyledLogo = styled(Logo)`
  width: 100vw;
`;

const StyledQuote = styled.h2`
  font-size: 400px;
  padding: 0.6em 2em;
  white-space: nowrap;
  color: transparent;
  //overflow-x:  hidden;
  -webkit-text-stroke-width: 8px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.accent};
`;

const LogoAndQuote = () => {
  const quote = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.set(quote.current, { scale: 0.5 });

    gsap.to(quote.current, {
      x: -quote.current.scrollWidth + 900,
      scrollTrigger: {
        trigger: quote.current,
        start: 'top top',
        end: quote.current.scrollWidth,
        markers: true,
        scrub: 0.5,
        pin: true,
        // onEnter: (self) => {
        //   gsap.to(self.animation._targets, { scale: 1, direction: 1, ease: 'slow', scrub: 1, });
        //   console.log(self);
        // },
        // onLeave: (self) => console.log('direction:', self.direction),
        // Add onEnter and onLeave
      },
    });
  }, []);

  return (
    <>
      <StyledLogo />
      <StyledQuote ref={quote}>
        ,,Założyliśmy stowarzyszenie, bo łączy nas solidarność interesów,
        wspólność celów i potrzeb.”
      </StyledQuote>
    </>
  );
};

export default LogoAndQuote;
