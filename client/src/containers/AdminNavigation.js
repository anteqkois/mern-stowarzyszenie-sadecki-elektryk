import React from 'react';
import styled from 'styled-components';

import HamburgerMenu from '../components/navigation/HamburgerMenu';
import AdminMenuList from '../components/navigation/AdminMenuList';

const StyledNavigation = styled.nav`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: ${({ theme }) => theme.colors.gradient};
  top: 0;
  left: -100%;
  transform: ${({ isActive }) =>
    isActive ? 'translateX(100%)' : 'translateX(0)'};
  transition: transform ease-in-out 0.25s;
  z-index: ${({theme}) => theme.zIndex.level1};

  ${({ theme }) => theme.media.tablet} {
    width: 400px;
    left: -400px;
    transform: ${({ isActive }) =>
      isActive ? 'translateX(400px)' : 'translateX(0)'};
  }
`;

const StyledHamburgerMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 0 20px;
  transition: transform 0.3s ease-in-out 0.25s;
  z-index: ${({ theme }) => theme.zIndex.level1};

  ${({ theme }) => theme.media.tablet} {
    left: 0;
    right: unset;
    border-radius: 0 0 20px 0;
    transform: ${({ isActive }) =>
      isActive
        ? 'translateX(310px) rotateY(180deg)'
        : 'translateX(0)rotateY(0deg)'};
    transition: transform ease-in-out 0.25s;
  }
`;

// const StyledHamburgerMenu = styled.nav`
//   position: absolute;
//   top: 0;
//   left: 100%;
//   background-color: ${({ theme }) => theme.colors.primary};
//   border-radius: 0 0 0 20px;
//   transform: ${({ isActive }) =>
//     isActive ? 'translateX(-100%)' : 'translateX(0)'};
//   transition: transform 0.3s ease-in-out 0.25s;

//   ${({ theme }) => theme.media.tablet} {
//   }
// `;

const AdminNavigation = ({ isActive, setIsActive }) => {
  return (
    <>
    <StyledNavigation isActive={isActive}>
      <AdminMenuList />
    </StyledNavigation>
      <StyledHamburgerMenu isActive={isActive}>
        <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      </StyledHamburgerMenu>
    </>
  );
};

export default AdminNavigation;
