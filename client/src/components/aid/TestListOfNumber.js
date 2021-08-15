import React, { useRef, useEffect, useState } from 'react';
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
    width: 100%;
    g {
      transition: all 0.5s ease-in-out;
    }
    text {
      font-weight: ${({ theme }) => theme.typography.weightBlack};
      fill: ${({ theme }) => theme.colors.accent};
    }
  }

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

const StyledProgresCurveLine = styled.path`
  fill: transparent;
  stroke-width: 3;
  stroke: ${({ theme }) => theme.colors.accent};
`;

const StyledProgresWheelBackGround = styled.path`
  fill: ${({ theme }) => theme.colors.noActive};
`;

const StyledProgresCurveLineMove = styled.path`
  fill: transparent;
  stroke-width: 3.5;
  stroke: white;
  stroke-dasharray: 126;
  stroke-dashoffset: ${({ howOffSet }) => howOffSet};
  transition: all 0.5s ease-in-out;
`;

const StyledProgresDots = styled.path`
  fill: transparent;
  stroke-width: 3;
  stroke: ${({ theme }) => theme.colors.accent};
  stroke-dasharray: ${({ totalLengthOfPath }) => totalLengthOfPath};
  stroke-dashoffset: ${({ howOffSet }) => howOffSet};
  transition: all 0.5s ease-in-out;
`;

const StyledProgresDotsBackground = styled.path`
  fill: ${({ theme }) => theme.colors.secondary};
  stroke-width: 3;
  stroke: ${({ theme }) => theme.colors.secondary};
`;

const StyledClickDots = styled.rect`
  /* fill: transparent; */
  
`;

const DescriptionOfSteps = ({ activeStep, handleNextStep }) => {
  const [totalLengthOfPath, setTotalLengthOfPath] = useState(null);

  const pathToGetLength = useRef(null);
  const clickedDots = useRef(null);

  useEffect(() => {
    setTotalLengthOfPath(pathToGetLength.current.getTotalLength());

    // pathToGetLength.current.getTotalLength();
  }, []);

  const handleClick = () => {
    // clickedDots.current

    console.log(clickedDots.current);
  };

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
        <svg viewBox="0 0 210 200">
          <g transform={`translate(${activeStep * 40 - 40} 0)`}>
            <StyledProgresWheelBackGround d="M0 50 A1 1, 0, 0 1, 50 50 C 50 70, 25 100, 25 95 M0 50 C0 70, 25 100, 25 95 " />
            <StyledProgresCurveLine d="M5 50 A1 1, 0, 0 1, 45 50  A1 1, 0, 0 1, 5 50" />
            <StyledProgresCurveLineMove
              howOffSet={(126 / 5) * -activeStep}
              d="M5 50 A1 1, 0, 0 1, 45 50  A1 1, 0, 0 1, 5 50"
            />
            <text x="25" y="50" textAnchor="middle" alignmentBaseline="central">
              {activeStep}
            </text>
          </g>
          <StyledProgresDotsBackground
            ref={pathToGetLength}
            d="M0 115 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 "
          />
          <StyledProgresDots
            d="M0 115 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 "
            howOffSet={
              totalLengthOfPath + (totalLengthOfPath / 5) * -activeStep
            }
            totalLengthOfPath={totalLengthOfPath}
          />
          <StyledProgresDotsBackground d="M0 115 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 " />
          <StyledProgresDots
            d="M0 115 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 "
            howOffSet={
              totalLengthOfPath + (totalLengthOfPath / 5) * -activeStep
            }
            totalLengthOfPath={totalLengthOfPath}
          />
          <StyledClickDots
            y="100"
            height="30"
            width="210"
            onClick={() => handleClick()}
            ref={clickedDots}
          />
        </svg>
      </StyledProgresWheel>
      <StyledDescriptionOfSteps activeStep={activeStep}>
        {numberList}
      </StyledDescriptionOfSteps>
    </>
  );
};

export default DescriptionOfSteps;
