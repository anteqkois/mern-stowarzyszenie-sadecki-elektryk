import React from 'react';
import styled from 'styled-components';

import heroImage from '../../assets/hero-image.jpg';

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


const HeroImage = () => {
  return (
    <StyledHeroImage>
      <img src={heroImage} alt="Photography from event" />
    </StyledHeroImage>
  );
};

export default HeroImage;
