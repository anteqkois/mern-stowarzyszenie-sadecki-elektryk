import React from 'react';
import styled from 'styled-components';

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
  background-color: azure;
  width: 100%;
  height: 200px;
`;

const StyledLoadingScene = styled.div`
  position: relative;
`;

const StyledSquere = styled.div`
  transform-style: preserve-3d;
  transform: rotate3d(0.6, 0.3, -0.5, 65deg);

  :nth-of-type(3) {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  :nth-of-type(2) {
    position: absolute;
    left: 41px;
    top: 3px;
  }
  :nth-of-type(1) {
    position: absolute;
    left: 21px;
    top: -11px;
  }
  :nth-of-type(4) {
    position: absolute;
    left: 21px;
    top: 15px;
  }

  span {
    position: absolute;
    display: inline-block;
    background-color: blueviolet;
    width: 30px;
    height: 30px;

    :nth-of-type(1) {
      transform: translateZ(15px);
    }
    :nth-of-type(2) {
      transform: rotateY(270deg) translateZ(15 px);
    }
    :nth-of-type(3) {
      transform: rotateX(-90deg) translateZ(15px);
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <h5>Ładowanie...</h5>
      <StyledContainer>
        <StyledLoadingScene>
          <StyledSquere>
            <span></span>
            <span></span>
            <span></span>
          </StyledSquere>
          <StyledSquere>
            <span></span>
            <span></span>
            <span></span>
          </StyledSquere>
          <StyledSquere>
            <span></span>
            <span></span>
            <span></span>
          </StyledSquere>
          <StyledSquere>
            <span></span>
            <span></span>
            <span></span>
          </StyledSquere>
        </StyledLoadingScene>
      </StyledContainer>
    </StyledLoading>
  );
};

export default Loading;
