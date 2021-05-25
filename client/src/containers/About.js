import React, { useContext } from 'react';
import { WidthDeviceContext } from '../context/Context';
import styled from 'styled-components';
import HeroImage from '../components/about/HeroImage';
import HeadLine from '../components/about/HeadLine';
import LogoAndQuote from '../components/about/LogoAndQuote';
//import TeacherAndStudenIllustration from '../components/about/TeacherAndStudenIllustration';
import { ReactComponent as TeacherAndStudent } from '../assets/StudentAndTeacher.svg';
import DescriptionOfAssociation from '../components/about/DescriptionOfAssociation';
import { ReactComponent as Background } from '../assets/background.svg';

const StyledAbout = styled.div`
  padding: 70px 0 70px 0;
  position: relative;
  ${({ theme }) => theme.media.tablet} {
    padding: 12vw 0 70px 0;
    margin-bottom: 50px;
  height: 1100px;
  } ;
`;

const StyledBackground = styled(Background)`
  width: 130vw;
  position: absolute;
  top: 0;
  max-height: 100%;
  fill: ${({ theme }) => theme.colors.gradient};
  //fill: red;
  //background: ${({ theme }) => theme.colors.gradient};
  //mix-blend-mode: overlay;

  ${({ theme }) => theme.media.desktop} {
    width: 100vw;
    max-height: unset;
  }
`;

const StyledTeacherAndStuden = styled(TeacherAndStudent)`
  position: absolute;
  bottom: 70px;
  right: 10%;
  width: 60%;
  max-width: 650px;

  ${({ theme }) => theme.media.bigDesktop} {
    bottom: 20%;
  }
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
    <>
      <StyledAbout>
        <StyledBackground fill="url(#light)"/>
        <DescriptionOfAssociation />
        <StyledTeacherAndStuden />
      </StyledAbout>
      <LogoAndQuote/>
    </>
  );
};

export default About;
<defs>
  <linearGradient
    id="paint0_linear"
    x1="-57"
    y1="930.5"
    x2="531.753"
    y2="-573.581"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0.269648" stop-color="#4D0A83" />
    <stop offset="1" stop-color="#A2141B" />
  </linearGradient>
  fill="url(#paint0_linear)"
</defs>;
