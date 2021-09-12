import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {WidthDeviceContext }from '../../context/Context';
import styled from 'styled-components';

import ImageBlock from '../../components/utils/ImageBlock'
import DescriptionOfAid from '../../components/aid/DescriptionOfAid';
import InstructionHowToAid from '../../components/aid/InstructionHowToAid';
import StudenIllustration from '../../components/aid/StudentIllustration';
import Loading from '../../components/utils/Loading'

import image from '../../assets/aid-block.jpg';

const StyledAid = styled.div`
  margin: 70px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 12%,
      rgba(0, 0, 0, 0.4430147058823529) 50%,
      rgba(0, 0, 0, 0.5130427170868348) 82%
    );
    display: ${({ location }) => (location === '/aid' ? 'block' : 'none')};
    z-index: ${({ theme }) => theme.zIndex.level3};
  }

  ${({ theme }) => theme.media.tablet} {
    margin: ${({ location }) => (location === '/aid' ? '0' : '90px 0')};
    /* margin: 90px 0; */
    column-gap: 10%;
    row-gap: 3em;
  }
  ${({ theme }) => theme.media.desktop} {
    column-gap: 10%;
    row-gap: 3em;
  }
`;


const stepHowToAid = [
  {
    step: 1,
    description:
      'Znajdź w oświadczeniu PIT sekcje dotyczącą przekazania 1% podatku na rzecz organizacji pożytku publicznego.',
  },
  {
    step: 2,
    description: 'Uzupełnij numer KRS następująco: 0000309499.',
  },
  {
    step: 3,
    description:
      'W rubryce "informacje uzupełniające", jako cel szczegółowy wpisz: "Sądecki Elektryk".',
  },
  {
    step: 4,
    description: 'Wyraź zgodę.',
  },
  {
    step: 5,
    description:
      'Koniec sekcji związanej z przekazaniem 1% podatku! PIT możesz także wypełnić korzystając z aplikacji e-pity dostępnej na stronie Pallotyńskiej Fundacji Misyjnej Salvatti.pl',
  },
];

const Aid = () => {

  const { isMobile } = useContext(WidthDeviceContext);

  const [activeStep, setActiveStep] = useState(1);
  const [stepToShow, setStepToShow] = useState([activeStep - 1]);

  let location = useLocation();

  useEffect(() => {
    isMobile
      ? setStepToShow([stepHowToAid[activeStep - 1]])
      : setStepToShow(stepHowToAid);
  }, [isMobile, activeStep]);

  const handleNextStep = (step)=>{
    setActiveStep(step);
  }

  return stepToShow ? (
    <StyledAid location={location.pathname} >
      <ImageBlock img={image} title="Jak wspomoć?" />
      <DescriptionOfAid />
      {!isMobile && <StudenIllustration />}
      <InstructionHowToAid
        activeStep={activeStep}
        stepToShow={stepToShow}
        handleNextStep={handleNextStep}
      />
    </StyledAid>
  ) :(
    <Loading/>
  );
}

export default Aid;
