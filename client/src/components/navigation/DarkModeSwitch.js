import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDarkModeSwitch = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

const StyledSvg = styled.svg`
  margin: 8px;
  filter: ${({ isDarkMod }) =>
    isDarkMod
      ? 'drop-shadow(2px 4px 10px rgba(222, 135, 4, 0.7))'
      : 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3))'};
  cursor: pointer;
  //box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  path {
    d: ${({ isDarkMod }) =>
      isDarkMod
        ? `path('M50 0 C100 2 100 50 100 50 C100 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 50 0')`
        : `path('M45 0 C20 30 30 90 95 70 C85 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 45 0')`};
    fill: ${({ isDarkMod }) => (isDarkMod ? '#DE8704' : '#e1dfe9')};
    transition: all 1s ease;
  }
`;

const DarkModeSwitch = () => {
  const [isDarkMod, setIsDarkMod] = useState(false);

  return (
    <StyledDarkModeSwitch onClick={() => setIsDarkMod(!isDarkMod)}>
      <StyledSvg
        isDarkMod={isDarkMod}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        //d="M45 0 C20 30 30 90 100 60 C90 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 45 0"
        //d="M50 0 C100 2 100 50 100 50 C100 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 50 0"
        />
      </StyledSvg>
    </StyledDarkModeSwitch>
  );
};

export default DarkModeSwitch;
