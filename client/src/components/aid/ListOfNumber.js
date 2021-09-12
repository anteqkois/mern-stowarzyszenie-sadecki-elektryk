import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledDescriptionOfSteps = styled.ul`
  display: none;
  
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
      width: 35px;
      height: 35px;
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.typography.weightExtraBold};
      border-radius: 50%;
      cursor: pointer;
  
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
  }
`;

const StyledProgresWheel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    max-width: 400px;
    padding-left: 12.5px;
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
  stroke: ${({ theme }) => theme.colors.secondary};
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
  cursor: pointer;
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
        tabIndex="0"
      >
        {i + 1}
      </li>,
    );
  }

  return (
    <>
      <StyledProgresWheel>
        <svg viewBox="0 0 325 170">
          <g transform={`translate(${19 + activeStep * 60 - 60} 0)`}>
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
            d="M0 125 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 "
          />
          <StyledProgresDots
            d="M0 125 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 h33 a10 10 0 0 1 26 0 "
            howOffSet={
              totalLengthOfPath + (totalLengthOfPath / 5) * -activeStep
            }
            totalLengthOfPath={totalLengthOfPath}
          />
          <StyledProgresDotsBackground d="M0 125 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 " />
          <StyledProgresDots
            d="M0 125 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 h33 a10 10 0 0 0 26 0 "
            howOffSet={
              totalLengthOfPath + (totalLengthOfPath / 5) * -activeStep
            }
            totalLengthOfPath={totalLengthOfPath}
          />
          <StyledDot
            cy="125"
            cx="46"
            r="14"
            isFill={activeStep >= 1}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="105"
            r="14"
            isFill={activeStep >= 2}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="164"
            r="14"
            isFill={activeStep >= 3}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="223"
            r="14"
            isFill={activeStep >= 4}
            activeStep={activeStep}
          />
          <StyledDot
            cy="125"
            cx="282"
            r="14"
            isFill={activeStep >= 5}
            activeStep={activeStep}
          />
          <StyledClickDots
            y="95"
            height="60"
            width="61.5"
            onClick={() => handleNextStep(1)}
          />
          <StyledClickDots
            y="95"
            x="61.6"
            height="60"
            width="61.5"
            onClick={() => handleNextStep(2)}
          />
          <StyledClickDots
            y="95"
            x="123"
            height="60"
            width="61.5"
            onClick={() => handleNextStep(3)}
          />
          <StyledClickDots
            y="95"
            x="184.5"
            height="60"
            width="61.5"
            onClick={() => handleNextStep(4)}
          />
          <StyledClickDots
            y="95"
            x="246"
            height="60"
            width="61.5"
            onClick={() => handleNextStep(5)}
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
