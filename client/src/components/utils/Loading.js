import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Loading = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const element = wrapper.current.children;

    
    const tl = gsap.timeline({ keyframes: true, 
  keyframesEase: "circ" })
    
    .set(element, { x: '-=150', scale: 0.5, autoAlpha: 0 })
    .to(element, { autoAlpha: 1, duration: 0.5 })
    .to(element, { x: '+=50', scale: 1, duration: 2 })
    .to(element, { x: '+=200', duration: 2 });

    //gsap.to(tl, {time:tl.duration(), duration:tl.duration(), ease: 'circ.easeInOut'})



    // const tl = gsap.timeline({paused: true});
    
    // tl.set(element, { x: '-=150', scale: 0.5, autoAlpha: 0 });

    // tl.to(element, { autoAlpha: 1, duration: 0.5 })
    // .to(element, { x: '+=50', scale: 1, duration: 2 })
    // .to(element, { x: '+=200', duration: 2 });

    // gsap.to(tl, {time:tl.duration(), duration:tl.duration(), ease: 'circ.easeInOut'})

  }, []);

  return (
    <StyledLoading>
      <h5>Ładowanie...</h5>
      <StyledContainer>
        <StyledLoadingScene ref={wrapper}>
          <span></span>
        </StyledLoadingScene>
      </StyledContainer>
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.sizeH5};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  color: ${({ theme }) => theme.colors.accent};
  transform: translate(-50%, -50%);
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: azure;
`;

const StyledLoadingScene = styled.div`
  //position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  perspective: 300px;

  span {
    background-color: ${({ theme }) => theme.colors.accent};
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export default Loading;
