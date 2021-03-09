import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/hero-image.jpg';

const StyledHeroImage = styled.img`
  width: 100vw;
  height: auto;
  margin-top: 70px;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  
  ${({ theme }) => theme.media.tablet} {
    width: 500px;
    clip-path: unset;
  }
`;

const HeroImage = () => {
  return <StyledHeroImage src={heroImage}/>;
};

export default HeroImage;
