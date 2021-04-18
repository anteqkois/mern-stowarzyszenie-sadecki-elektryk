import React, { useContext, useState, useEffect } from 'react';
import {WidthDeviceContext }from '../context/Context';
import styled from 'styled-components';
import ImageBlock from '../components/utils/ImageBlock'
import DescriptionOfAid from '../components/aid/DescriptionOfAid';
import InstructionHowToAid from '../components/aid/InstructionHowToAid';
import StudenIllustration from '../components/aid/StudentIllustration';

import image from '../assets/aid-block.jpg';

const StyledAid = styled.div`
  margin: 10vw 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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

  useEffect(() => {
    isMobile
      ? setStepToShow([stepHowToAid[activeStep - 1]])
      : setStepToShow(stepHowToAid);
  }, [isMobile, activeStep]);

  const handleNextStep = (step)=>{
    //console.log(step);
    setActiveStep(step);
  }

  return stepToShow ? (
    
    <StyledAid>
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
    <div>Loading</div>
  );
}

export default Aid;
