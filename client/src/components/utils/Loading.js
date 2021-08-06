import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Loading = ({loadingMessage = 'Ładowanie'}) => {
  const wrapper = useRef(null);

  useEffect(() => {
    const element = wrapper.current;
    const wheel = wrapper.current.children;

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
        { x: '-=100', scale: 0 },
        { opacity: 1 },
        { x: '+=50', scale: 1, duration: 0.25 },
        { x: '+=100', duration: 0.75 },
        { x: '+=50', scale: 0.5, duration: 0.25 },
        { x: '-=100', scale: 0.25, duration: 0.25 },
        { x: '-=100', scale: 0, duration: 0.1 },
      ],
      stagger: 0.3,
    });
  }, []);

  return (
    <StyledLoading>
      <h5>{loadingMessage}</h5>
      <StyledLoadingScene ref={wrapper}>
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
      </StyledLoadingScene>
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  max-width: 100vw;
  padding-block: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h5 {
    text-transform: uppercase;
    /* background-image: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent; */
    text-align: center;

    font-size: ${({ theme }) => theme.typography.sizeH5};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const StyledLoadingScene = styled.div`
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

export default Loading;
