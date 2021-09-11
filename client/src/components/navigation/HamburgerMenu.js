import React, { useRef } from 'react'
import styled from 'styled-components';


const StyledHamburgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 60px;
  padding: 10px;
  //margin: auto 10px auto 10px;
  background-color: transparent;
  border: transparent;
  outline: transparent;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.level1};

  span {
    background-color: black;
    background: linear-gradient(35.25deg, #4d0a83 28.05%, #a2141b 107.82%);
    width: 35px;
    height: 4px;
    border-radius: 15px;
    transform: ${({ isActive }) =>
      isActive ? 'scale(0) translateX(40px)' : 'scale(1) translateX(0px)'};
    transition: transform ease-in-out 0.25s;
  }
  span:nth-child(1) {
    width: 50px;
    transform-origin: center;
    transform: ${({ isActive }) =>
      isActive
        ? '  translateY(13px) rotate(45deg)'
        : ' translateY(0px)  rotate(0deg)'};
    transition: transform ease-in-out 0.25s;
  }
  span:nth-child(3) {
    width: 50px;
    transform-origin: center;
    transform: ${({ isActive }) =>
      isActive
        ? '  translateY(-13px) rotate(-45deg) '
        : '  translateY(0px) rotate(0deg)'};
    transition: transform ease-in-out 0.25s;
  }
`;

const HamburgerMenu = ({setIsActive, isActive}) => {

  const hamburger = useRef(null)

  const handleClick = ()=>{
    hamburger.current.blur();
    setIsActive((isActive) => !isActive);
  }

  return (
    <StyledHamburgerMenu ref={hamburger} onClick={handleClick} isActive={isActive}>
      <span />
      <span />
      <span />
    </StyledHamburgerMenu>
  );
}

export default HamburgerMenu;

