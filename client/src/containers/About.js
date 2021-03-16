import React, { useContext } from 'react';
import { WidthDeviceContext } from '../context/Context';
import styled from 'styled-components';
import HeroImage from '../components/HeroImage/HeroImage';
import HeadLine from '../components/HeadLine/HeadLine';
import TeacherAndStudenIllustration from '../components/TeacherAndStudenIllustration/TeacherAndStudenIllustration';
import DescriptionOfAssociation from '../components/DescriptionOfAssociation/DescriptionOfAssociation';

const StyledAbout = styled.div`
  margin-top: 70px;

  ${({ theme }) => theme.media.tablet} {
    display: grid;
  };
`;

const StyledDescription = styled(DescriptionOfAssociation)`
  //background-color: blue;
`;

const StyledHeadLine = styled(HeadLine)`
  justify-content: center;
`;

const About = () => {
  const { isMobile } = useContext(WidthDeviceContext);
  return isMobile ? (
    <StyledAbout>
      <HeroImage />
      <HeadLine />
      <DescriptionOfAssociation />
    </StyledAbout>
  ) : (
    <StyledAbout>
      <StyledHeadLine />
      <HeroImage />
      <TeacherAndStudenIllustration />
      <StyledDescription />
    </StyledAbout>
  );
};

export default About;
