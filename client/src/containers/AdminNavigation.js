import React,{ useRef} from 'react';
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
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: transform 0.3s ease-in-out 0.25s;
  z-index: ${({ theme }) => theme.zIndex.level1};

  svg {
    position: absolute;
    left: -50%;
    top: 50%;
    height: 100%;
    border-radius: 0 0 0 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 5px 5px 5px 15px;
    transform: translate(0, -50%);
    transition: all ease-in-out 0.25s;
    cursor: pointer;
  }

  :before {
    content: '';
    position: absolute;
    top: 0%;
    left: -50%;
    width: 145px;
    height: 100%;
    background-color: transparent;
    box-shadow: 0 8px 25px 0 rgba(31, 38, 135, 0.3);
    border-radius: 0 0 0 20px;
    z-index: ${({ theme }) => theme.zIndex.levelMinus1};
  }

  ${({ theme }) => theme.media.tablet} {
    left: 0;
    right: unset;
    border-radius: 0 0 0 0;
    transform: ${({ isActive }) =>
      isActive
        ? 'translateX(310px) rotateY(180deg)'
        : 'translateX(0)rotateY(0deg)'};
    transition: transform ease-in-out 0.25s;

    svg {
      left: 100%;
      top: 50%;
      border-radius: ${({ isActive }) =>
        isActive ? '0 0 0 20px' : '0 0 20px 0'};
      background-color: ${({ theme }) => theme.colors.secondary};
      padding: ${({ isActive }) =>
        isActive ? '5px 5px 5px 15px' : '5px 15px 5px 5px'};
      transform: ${({ isActive }) =>
        isActive
          ? 'translate(0, -50%) rotateY(180deg)'
          : 'translate(0, -50%)rotateY(0deg)'};
      transition: all ease-in-out 0.25s;
    }

    :before {
      left: 0;
      border-radius: 0 0 20px 0;
    }
  }
`;

const AdminNavigation = ({ isActive, setIsActive, history }) => {

  const backButton = useRef(null);

  const handleBlur = () =>{
    backButton.current.blur();
  }
  
  return (
    <>
      <StyledNavigation isActive={isActive}>
        <AdminMenuList setIsActive={setIsActive} />
      </StyledNavigation>
      <StyledHamburgerMenu isActive={isActive}>
        <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
        <svg
        tabIndex='0'
        ref={backButton}
        onClick={()=> {history.goBack(); handleBlur()}}
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" />
        </svg>
      </StyledHamburgerMenu>
    </>
  );
};

export default AdminNavigation;
