import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
    width: 200px;
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

const KeyFramesPulse = keyframes`
  0% {
  stroke-width:1;
  }
  100% {
    stroke-width: 8;
  }
`;

const StyledDot = styled.circle`
  fill: ${({ theme }) => theme.colors.accent};
  opacity: ${({ isFill }) => (isFill ? '1' : '0')};
  stroke: ${({ theme }) => theme.colors.accent};
  transition: all 0.5s 0.5s  ease-in-out;

  :nth-of-type(${({ activeStep }) => activeStep}) {
    animation: 1.4s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${KeyFramesPulse} forwards infinite;
  }
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
  fill: transparent;
`;

const DescriptionOfSteps = ({ activeStep, handleNextStep }) => {
  const [totalLengthOfPath, setTotalLengthOfPath] = useState(null);

  const pathToGetLength = useRef(null);

  useEffect(() => {
    setTotalLengthOfPath(pathToGetLength.current.getTotalLength());
  }, []);

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
        <svg viewBox="0 0 210 150">
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
            d="M0 125 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 "
          />
          <StyledProgresDots
            d="M0 125 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 h13.5 a10 10 0 0 1 26 0 "
            howOffSet={
              totalLengthOfPath + (totalLengthOfPath / 5) * -activeStep
            }
            totalLengthOfPath={totalLengthOfPath}
          />
          <StyledProgresDotsBackground d="M0 125 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 " />
          <StyledProgresDots
            d="M0 125 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 h13.5 a10 10 0 0 0 26 0 "
            howOffSet={
              totalLengthOfPath + (totalLengthOfPath / 5) * -activeStep
            }
            totalLengthOfPath={totalLengthOfPath}
          />
          <StyledDot
            cy="125"
            cx="26.5"
            r="14"
            isFill={activeStep >= 1}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="66"
            r="14"
            isFill={activeStep >= 2}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="105.5"
            r="14"
            isFill={activeStep >= 3}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="145"
            r="14"
            isFill={activeStep >= 4}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="184.5"
            r="14"
            isFill={activeStep >= 5}
            activeStep={activeStep}
          />
          <StyledClickDots
            y="95"
            height="60"
            width="42"
            onClick={() => handleNextStep(1)}
          />
          <StyledClickDots
            y="95"
            x="42"
            height="60"
            width="42"
            onClick={() => handleNextStep(2)}
          />
          <StyledClickDots
            y="95"
            x="84"
            height="60"
            width="42"
            onClick={() => handleNextStep(3)}
          />
          <StyledClickDots
            y="95"
            x="126"
            height="60"
            width="42"
            onClick={() => handleNextStep(4)}
          />
          <StyledClickDots
            y="95"
            x="168"
            height="60"
            width="42"
            onClick={() => handleNextStep(5)}
          />
        </svg>
      </StyledProgresWheel>
      {/* <StyledDescriptionOfSteps activeStep={activeStep}>
        {numberList}
      </StyledDescriptionOfSteps> */}
    </>
  );
};

export default DescriptionOfSteps;
