import React, { useContext } from 'react';
import { WidthDeviceContext } from '../context/Context';
import styled from 'styled-components';
import HeroImage from '../components/about/HeroImage';
import HeadLine from '../components/about/HeadLine';
import TeacherAndStudenIllustration from '../components/about/TeacherAndStudenIllustration';
import DescriptionOfAssociation from '../components/about/DescriptionOfAssociation';

const StyledAbout = styled.div`
  //margin: 70px 0 70px 0;
  padding: 70px 0 0 0;

  ${({ theme }) => theme.media.tablet} {
    > div {
      margin: 10% 0;
    }
    //display: grid;
    //padding: 70px 0 120px 0;
    //grid-row-gap: 10%;
    //display: flex;
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
      <StyledDescription />
      <TeacherAndStudenIllustration />
    </StyledAbout>
  );
};

export default About;
