import React from 'react';
import styled from 'styled-components';

import MenuList from '../../components/menuList/MenuList';
import HamburgerMenu from '../../components/hamburgerMenu/HamburgerMenu';
import DarkModeSwitch from '../../components/darkModeSwitch/DarkModeSwitch';

const StyledNavigation = styled.nav`
  width: 100vw;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  color: ${({theme}) => theme.colors.primary};
  background-color: transparent;
  box-shadow: black 0px 0px 10px;
  backdrop-filter: blur(10px);
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <DarkModeSwitch />
      <HamburgerMenu />
      <MenuList />
    </StyledNavigation>
  );
};

export default Navigation;
