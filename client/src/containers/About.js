import React from 'react'
import styled from 'styled-components';
import HeroImage from '../components/HeroImage/HeroImage'
import HeadLine from '../components/HeadLine/HeadLine';
import TeacherAndStudenIllustration from '../components/TeacherAndStudenIllustration/TeacherAndStudenIllustration';
import DescriptionOfAssociation from '../components/DescriptionOfAssociation/DescriptionOfAssociation';

const StyledAbout = styled.div`

`;

const About = ({isMobile}) => {

  return isMobile ? (
    <StyledAbout>
      <HeroImage />
      <HeadLine />
      <DescriptionOfAssociation />
    </StyledAbout>
  ) : (
    <StyledAbout>
      <HeadLine />
      <HeroImage />
      <TeacherAndStudenIllustration />
      <DescriptionOfAssociation />
    </StyledAbout>
  );
}

export default About
