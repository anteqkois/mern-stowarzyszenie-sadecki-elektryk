import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { WidthDeviceContext } from '../context/Context';

import MenuList from '../components/navigation/MenuList';
import HamburgerMenu from '../components/navigation/HamburgerMenu';
import DarkModeSwitch from '../components/navigation/DarkModeSwitch';
import Logo from '../components/utils/Logo';

const StyledNavigation = styled.nav`
  width: 100vw;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid: center;
  grid-template-columns: 80px auto 80px;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: ${({ theme }) => theme.zIndex.level10};

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: ${({ theme }) => theme.colors.primary} 0px -8px 1px,
      ${({ theme }) => theme.colors.primary} 0px -12px 30px,
      black 0px 0px 10px -4px;
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    transition: opacity ease-in-out 0.25s;
  }

  ${({ theme }) => theme.media.tablet} {
    padding-inline: 15px;
    grid-template-columns: minmax(100px, auto) minmax(auto, 1200px) minmax(
        100px,
        auto
      );
    background-color: ${({ withshadowandbackground, theme }) =>
      withshadowandbackground ? theme.colors.primary : 'transparent'};
    transform: ${({ withshadowandbackground }) =>
      withshadowandbackground ? 'translateY(0px)' : 'translateY(10px)'};
    transition: background-color ease-in-out 0.25s, transform ease-in-out 0.25s;

    ::after {
      opacity: ${({ withshadowandbackground }) =>
        withshadowandbackground ? 1 : 0};
    }
  }
`;

const StyledLogo = styled(Logo)`
  height: 55px;
`;

const throttle = (fn, waitTime) => {
  let wait = false;
  return function () {
    if (!wait) {
      fn();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, waitTime);
    }
  };
};

const Navigation = ({ isDarkMod, setIsDarkMod }) => {
  const [isActive, setIsActive] = useState(false);
  const [withshadowandbackground, setwithshadowandbackground] = useState(false);
  const { isMobile } = useContext(WidthDeviceContext);

  const trackScroll = () => {
    throttle(
      50 < window.pageYOffset
        ? (setwithshadowandbackground(true), 0)
        : (setwithshadowandbackground(false), 0),
    );
  };

  useEffect(() => {
    window.onscroll = isMobile ? null : throttle(trackScroll, 1);
  }, [isMobile]);

  return isMobile ? (
    <>
      <StyledNavigation isActive={isActive}>
        <DarkModeSwitch />
        <StyledLogo />
        <HamburgerMenu setIsActive={setIsActive} isActive={isActive} />
      </StyledNavigation>
      <MenuList isActive={isActive} setIsActive={setIsActive} />
    </>
  ) : (
    <StyledNavigation
      withshadowandbackground={withshadowandbackground}
      isActive={isActive}
    >
      <StyledLogo />
      <MenuList
        isActive={true}
        withshadowandbackground={withshadowandbackground}
      />
      <DarkModeSwitch setIsDarkMod={setIsDarkMod} isDarkMod={isDarkMod} />
    </StyledNavigation>
  );
};

export default Navigation;
