import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //width: 200px;
  height: 200px;
`;

const StyledSquere = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.gradient};
  animation: 1s ${({ deley }) => `${deley++}ms`} spinnerAnimation alternate
    infinite;

  @keyframes spinnerAnimation {
    0% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(-50px);
    }
  }
`;

const Spinner = () => {
  return (
    <StyledSpinner >
      <StyledSquere deley={-200}></StyledSquere>
      <StyledSquere deley={-100}></StyledSquere>
      <StyledSquere deley={0}></StyledSquere>
    </StyledSpinner>
  );
};

export default Spinner;
