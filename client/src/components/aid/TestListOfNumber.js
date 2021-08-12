import Reactdefault,{useRef} from 'react';
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
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.weightExtraBold};
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    cursor: pointer;

    ::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      border: 2px solid ${({ theme }) => theme.colors.accent};
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

    li {
      color: ${({ theme }) => theme.colors.accent};
      background-color: ${({ theme }) => theme.colors.primary};

      ::after {
        border: 2px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const StyledProgresWheel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    border: 1px solid green;
    width: 300px;
    path {
      /* fill: transparent;
      stroke-width: 0.5;
      stroke: green; */
    }
  }
`;

const StyledProgresCurveLine = styled.path`
  fill: transparent;
  stroke-width: 3;
  stroke: ${({ theme }) => theme.colors.accent};
`;
const StyledProgresCurveLineMove = styled.path`
  fill: transparent;
  stroke-width: 3.5;
  stroke: white;
  stroke-dasharray: 126;
  stroke-dashoffset: ${({howOffSet})=> howOffSet};
  transition: all 0.5s ease-in-out ;
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
    <>
      <StyledProgresWheel>
        <svg viewBox="0 0 100 100">
          <path d="M50 0 v100" />
          <path d="M0 50 h100" />

          <StyledProgresCurveLine d="M30 50 A1 1, 0, 0 1, 70 50  A1 1, 0, 0 1, 30 50" />
          <StyledProgresCurveLineMove howOffSet={(126/5)*activeStep} d="M30 50 A1 1, 1, 1 0, 70 50  A1 1, 1, 1 0, 30 50" />
          <text x="50" y="50" textAnchor="middle" alignmentBaseline="central">
            {activeStep}
          </text>
        </svg>
      </StyledProgresWheel>
      <StyledDescriptionOfSteps activeStep={activeStep}>
        {numberList}
      </StyledDescriptionOfSteps>
    </>
  );
};

export default DescriptionOfSteps;
