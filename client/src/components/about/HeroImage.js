import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/hero-image.jpg';
import { ReactComponent as StainOne } from '../../assets/StainOne.svg';

const StyledHeroImage = styled.div`
  position: relative;

  img {
    width: 100vw;
    height: auto;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
  }

  ${({ theme }) => theme.media.tablet} {
    height:30vw;
    
    img {
      position: absolute;
      right: 10%;
      width: 40vw;
      max-width: 700px;
      clip-path: unset;
border-radius: 10px;
    }
  }
`;

const StyledStainOne = styled(StainOne)`
  display: none;

  ${({ theme }) => theme.media.tablet} {
    width: 55vw;
    height: 170%;
    right: 0;
    display: inline-block;
    position: absolute;
  }
`;

const HeroImage = () => {
  return (
    <StyledHeroImage>
      <StyledStainOne />
      <img src={heroImage} alt="Photography from event" />
    </StyledHeroImage>
  );
};

export default HeroImage;
