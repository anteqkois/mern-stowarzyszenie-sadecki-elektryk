import React from 'react';
import styled from 'styled-components';

const StyledDescriptionOfSteps = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 10px 5px;
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    //padding: 15px;
    width: 35px;
    height: 35px;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.typography.weightExtraBold};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;

    /* ::before {
      content: '';
      position: absolute;
      height: 2px;
      width: 20vw;
      right: 100%;
      max-width: calc(((100vw - 30px) / 5) - 15px);
      background-color: ${({ theme }) => theme.colors.primary};
      //z-index: ${({ theme }) => theme.zIndex.level1}

    }
    
    :nth-of-type(1){
        ::before{
        content: unset;
        }
      } */

    ::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: inherit;
      transform: scale(0.9);
      transition: transform ease-out 0.15s;
    }

    :nth-of-type(${({ activeStep }) => activeStep}) {
      transform: scale(1.3);
      transition: transform ease-out 0.15s;

      ::after {
        transform: scale(1.35); 
      }
    }
  }

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    
  }
`;

const DescriptionOfSteps = ({ activeStep, handleNextStep }) => {
  const numberList = [];

  for (let i = 0; i < 5; i++) {
    numberList.push(
      <li
        key={i}
        onClick={() => {
          handleNextStep(i + 1);
        }}
      >
        {i + 1}
      </li>,
    );
  }

  return (
    <StyledDescriptionOfSteps activeStep={activeStep}>
      {numberList}
    </StyledDescriptionOfSteps>
  );
};

export default DescriptionOfSteps;
