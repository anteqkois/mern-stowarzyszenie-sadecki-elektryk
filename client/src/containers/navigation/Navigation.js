import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MenuList from '../../components/menuList/MenuList';
import HamburgerMenu from '../../components/hamburgerMenu/HamburgerMenu';
import DarkModeSwitch from '../../components/darkModeSwitch/DarkModeSwitch';
import Logo from '../../components/logo/Logo';

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
  color: ${({ theme }) => theme.colors.bodyText};
  background-color: ${({ theme }) => theme.colors.primary};
  //backdrop-filter: blur(10px);
  z-index: ${({ theme }) => theme.zIndex.level10};

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: black 0px 0px 10px;
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    transition: opacity ease-in-out 0.25s;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: minmax(100px, auto) minmax(auto, 1200px) minmax(
        100px,
        auto
      );
    background-color: ${({ withSHadowAndBackground, theme }) =>
      withSHadowAndBackground ? theme.colors.primary : 'transparent'};
    transform: ${({ withSHadowAndBackground }) =>
      withSHadowAndBackground ? 'translateY(0px)' : 'translateY(10px)'};
    transition: background-color ease-in-out 0.25s, transform ease-in-out 0.25s;

    ::after {
      opacity: ${({ withSHadowAndBackground }) =>
        withSHadowAndBackground ? 1 : 0};
    }
  }
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

const Navigation = ({ isMobile }) => {
  const [isActive, setIsActive] = useState(false);
  const [withSHadowAndBackground, setWithSHadowAndBackground] = useState(false);

  const trackScroll = () => {
    throttle(
      50 < window.pageYOffset
        ? (setWithSHadowAndBackground(true), 0)
        : (setWithSHadowAndBackground(false), 0),
    );
  };

  useEffect(() => {
    window.onscroll = isMobile ? null : throttle(trackScroll, 1);
  }, [isMobile]);

  return isMobile ? (
    <>
      <StyledNavigation isActive={isActive}>
        <Logo height={55} />
        <DarkModeSwitch />
        <HamburgerMenu setIsActive={setIsActive} isActive={isActive} />
      </StyledNavigation>
      <MenuList isActive={isActive} />
    </>
  ) : (
    <StyledNavigation
      withSHadowAndBackground={withSHadowAndBackground}
      isActive={isActive}
    >
      <Logo height={55} />
      <MenuList isActive={true} />
      <DarkModeSwitch />
    </StyledNavigation>
  );
};

export default Navigation;