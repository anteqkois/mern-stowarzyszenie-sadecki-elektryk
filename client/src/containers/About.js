import React, { useContext } from 'react';
import { WidthDeviceContext } from '../context/Context';
import styled from 'styled-components';
import HeroImage from '../components/HeroImage/HeroImage';
import HeadLine from '../components/HeadLine/HeadLine';
import TeacherAndStudenIllustration from '../components/TeacherAndStudenIllustration/TeacherAndStudenIllustration';
import DescriptionOfAssociation from '../components/DescriptionOfAssociation/DescriptionOfAssociation';

const StyledAbout = styled.div`
  //margin: 70px 0 70px 0;
  padding: 70px 0 15vw 0;

  ${({ theme }) => theme.media.bigTablet} {
    display: grid;
    //padding: 70px 0 120px 0;
  } ;
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
