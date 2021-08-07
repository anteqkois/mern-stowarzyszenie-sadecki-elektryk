import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';


const StyledSpinner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 180px;

  span {
    position: absolute;
    background: ${({ theme }) => theme.colors.accent};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0;
  }
`;

const Spinner = () => {

  const spinner = useRef(null);

  useEffect(() => {
    const element = spinner.current;
    const wheel = spinner.current.children;

    gsap.to(element, {
      rotateZ: '360deg',
      duration: 3,
      ease: 'none',
      repeat: Infinity,
    });

    gsap.to(wheel, {
      ease: 'power4.inOut',
      repeat: Infinity,
      keyframes: [
        { x: '-=100', scale: 0.3 },
        { opacity: 1 },
        { x: '+=50', scale: 1, duration: 0.25 },
        { x: '+=100', duration: 1 },
        { x: '+=50', scale: 0.5, duration: 0.25 },
        { x: '-=100', scale: 0.25, duration: 1 },
        { x: '-=100', scale: 0.3, duration: 0.25 },
      ],
      stagger: 0.4,
    });
  }, []);

  
  return (
    <StyledSpinner ref={spinner}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </StyledSpinner>
  );
};

export default Spinner;
