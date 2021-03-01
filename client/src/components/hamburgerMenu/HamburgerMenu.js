import React from 'react'
import styled from 'styled-components';


const StyledHamburgerMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 10px;
  margin: auto 10px auto 10px;
  background-color: transparent;
  border: transparent;
  //outline: transparent;
  cursor: pointer;

  span {
    background-color: black;
    position: relative;
    width: 50px;
    height: 4px;
    border-radius: 15px;
    transform: scale(1);
    transition: transform 0.25s ease-in-out 0.25s;

    ::before,
    ::after {
      background-color: black;
      content: '';
      position: absolute;
      left: 0;
      width: 50px;
      height: 4px;
      border-radius: 15px;
      transition: transform 0.25s ease-in-out 0s;
    }
    ::before {
      transform: translateY(10px) scale(1) rotate(0deg);
    }

    ::after {
      transform: translateY(-10px) scale(1) rotate(0deg);
    }
  }
`;

const HamburgerMenu = () => {
  return (
    <StyledHamburgerMenu>
    <span/>
    </StyledHamburgerMenu>
  )
}

export default HamburgerMenu;

