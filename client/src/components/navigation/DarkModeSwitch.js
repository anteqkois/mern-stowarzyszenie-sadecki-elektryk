import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const StyledDarkModeSwitch = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

const StyledSvg = styled.svg`
  padding: 8px;
  cursor: pointer;
  filter: ${({ isDarkMode }) =>
    isDarkMode
      ? 'drop-shadow(2px 4px 10px rgba(222, 135, 4, 0.7))'
      : 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3))'};
  path {
    ${({ isDarkMode }) =>
      isDarkMode
        ? `
      d:  path('M50 0 C100 2 100 50 100 50 C100 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 50 0');
      fill: #DE8704;
      stroke: #c17502;
      `
        : `
      d:  path('M45 0 C20 30 30 90 95 70 C85 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 45 0');
      fill: #e1dfe9;
      stroke: #c7c3d9;
      stroke-width: 1;
      `};
    transition: all 0.8s ease-in-out;
  }
`;

const DarkModeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const button = useRef(null);

  return (
    <StyledDarkModeSwitch
      ref={button}
      tabIndex="0"
      onClick={() => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', !isDarkMode);
        button.current.blur();
      }}
    >
      <StyledSvg
        isDarkMode={isDarkMode}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path />
      </StyledSvg>
    </StyledDarkModeSwitch>
  );
};

export default DarkModeSwitch;
