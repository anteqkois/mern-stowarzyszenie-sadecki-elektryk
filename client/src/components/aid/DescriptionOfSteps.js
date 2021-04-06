import React from 'react';
import styled from 'styled-components';

const StyledDescriptionOfSteps = styled.ul`
  min-height: 100px;
  //padding: 0 15px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.weightBold};
    max-width: 50ch;
  }

  ${({ theme }) => theme.media.tablet} {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    position: relative;
    padding: 25px 15px 25px 25px;
    flex-direction: column;
    //align-items: flex-start;
    justify-content: space-around;

    li {
      opacity: 0.5;
      transform: scale(0.9);
      transition: transform ease-out 0.15s;

      :nth-of-type(${({ activeStep }) => activeStep}) {
        opacity: 1;
        transform: scale(1);
        transition: transform ease-out 0.15s;
      }
    }
    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 125%;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: 8px;
      z-index: ${({ theme }) => theme.zIndex.levelMinus1};
    }
  }
`;

const DescriptionOfSteps = ({ stepToShow, activeStep }) => {
  return (
    <StyledDescriptionOfSteps activeStep={activeStep}>
      {stepToShow.map((stepToShow, index) => (
        <li key={index}>{stepToShow.description}</li>
      ))}
    </StyledDescriptionOfSteps>
  );
};

export default DescriptionOfSteps;
