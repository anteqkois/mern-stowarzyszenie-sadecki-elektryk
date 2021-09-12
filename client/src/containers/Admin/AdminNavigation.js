import React, { useRef } from 'react';
import styled from 'styled-components';

import HamburgerMenu from '../../components/navigation/HamburgerMenu';
import AdminMenuList from '../../components/navigation/AdminMenuList';
import DarkModeSwitch from '../../components/navigation/DarkModeSwitch';

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
  z-index: ${({ theme }) => theme.zIndex.level1};

  ${({ theme }) => theme.media.tablet} {
    width: 400px;
    left: -400px;
    transform: ${({ isActive }) =>
      isActive ? 'translateX(400px)' : 'translateX(0)'};
  }
`;

const StyledMenuItem = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0 0 0 20px;
  box-shadow: ${({ theme }) => theme.colors.primary} 0px -8px 1px,
    ${({ theme }) => theme.colors.primary} 0px -12px 30px,
    black 0px 0px 10px -4px;
  transition: transform 0.3s ease-in-out 0.25s;
  z-index: ${({ theme }) => theme.zIndex.level1};

  > * {
    width: 70px;
    cursor: pointer;
  }

  svg {
    height: 100%;
    padding: 8px;
    :nth-of-type(1) {
      fill: ${({ theme }) => theme.colors.text};
    }
  }

  ${({ theme }) => theme.media.tablet} {
    left: 0;
    right: unset;
    border-radius: 0 0 20px 0;
    transition: transform ease-in-out 0.25s;

    > * {
      :nth-child(1) {
        order: 3;
      }
      :nth-child(3) {
        order: -1;
      }
    }
  }
`;

const AdminNavigation = ({ isActive, setIsActive, history }) => {
  const backButton = useRef(null);

  const handleBlur = () => {
    backButton.current.blur();
  };

  return (
    <>
      <StyledNavigation isActive={isActive}>
        <AdminMenuList setIsActive={setIsActive} />
      </StyledNavigation>
      <StyledMenuItem isActive={isActive}>
        <svg
          tabIndex="0"
          ref={backButton}
          onClick={() => {
            history.goBack();
            handleBlur();
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" />
        </svg>
        <DarkModeSwitch />
        <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      </StyledMenuItem>
    </>
  );
};

export default AdminNavigation;
