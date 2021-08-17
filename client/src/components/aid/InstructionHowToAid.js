import React from 'react';
import styled from 'styled-components';

import DescriptionOfSteps from './DescriptionOfSteps';
import ListOfNumber from './ListOfNumber';
import Button from '../utils/Button';
import image from '../../assets/pit.png';

const StyledInstructionHowToAid = styled.div`
  width: 100%;
  padding: 0 15px 35px 15px;

  button {
    left: 50%;
    transform: translateX(-50%);
    z-index: ${({ theme }) => theme.zIndex.level1};
  }

  ${({ theme }) => theme.media.tablet} {
    background-color: transparent;
    min-height: 700px;
    max-width: 1500px;
    position: relative;

    ul {
      :nth-of-type(1) {
        height: 67%;
        position: absolute;
        left: 48%;
        top: 16%;
        transform: translateX(-50%);
        z-index: ${({ theme }) => theme.zIndex.level1};
      }
      :nth-of-type(2) {
        width: 42%;
        max-width: 700px;
        height: 85%;
        position: absolute;
        left: 3%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    & > div {
      position: relative;
      left: 48%;
      top: 50%;
      transform: translateY(-50%);
      height: 80%;
      max-width: 49%;
      background-color: rgba(77, 10, 131, 0.15);
      backdrop-filter: blur(8px);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.4);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      div {
        position: absolute;
        left: 50%;
        bottom: 50%;
        transform: translate(-50%, 50%);
        width: 85%;
      }
      button {
        position: absolute;
        bottom: 8%;
      }
    }
  }
`;



const StyledStepWrapper = styled.div`
  position: relative;
  margin: 5% 0;

  img {
    width: 100%;
  }
  span {
    position: absolute;
    background-color: rgba(77, 10, 131, 0.55);
    opacity: 0.1;
    transform: scaleX(0);
    transition: transform ease-in 0.25s;

    &[data='${({ activeStep }) => activeStep}'] {
      opacity: 1;
      transform: scaleX(1);
      transition: transform ease-in 0.25s;
    }
    &[data='1'] {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    &[data='2'] {
      left: 0;
      top: 16%;
      width: 100%;
      height: 31%;
    }
    &[data='3'] {
      left: 4%;
      top: 61%;
      width: 82%;
      height: 14%;
    }
    &[data='4'] {
      left: 84%;
      top: 61%;
      width: 17%;
      height: 14%;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    img {
      max-width: 800px;
    }
  }
`;

const InstructionHowToAid = ({ activeStep, stepToShow, handleNextStep }) => {
  return (
    <StyledInstructionHowToAid>
      <ListOfNumber activeStep={activeStep} handleNextStep={handleNextStep} />
      <DescriptionOfSteps stepToShow={stepToShow} activeStep={activeStep} />
      <div>
        <StyledStepWrapper activeStep={activeStep}>
          <img src={image} alt="Przekazanie 1% PIT" />
          <span data="1"></span>
          <span data="2"></span>
          <span data="3"></span>
          <span data="4"></span>
        </StyledStepWrapper>
        <Button
          onClick={() => handleNextStep(activeStep < 5 ? activeStep + 1 : 1)}
        >
          Następny krok
        </Button>
      </div>
    </StyledInstructionHowToAid>
  );
};

export default InstructionHowToAid;
