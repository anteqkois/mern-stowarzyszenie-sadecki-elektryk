import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { WidthThemeContext } from '../../context/Context';

const StyledDarkModeSwitch = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

const StyledSvg = styled(motion.svg)`
  margin: 8px;
  cursor: pointer;
`;

const pathVariants = {
  moon: {
    d: 'M45 0 C20 30 30 90 95 70 C85 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 45 0',
    fill: '#e1dfe9',
  },
  sun: {
    d: 'M50 0 C100 2 100 50 100 50 C100 98 54 100 50 100 C0 98 0 50 0 50 C0 0 50 0 50 0',
    fill: '#DE8704',
  },
};

const svgVariants = {
  moon: {
    filter: 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3))', 
  },
  sun: {
    filter: 'drop-shadow(2px 4px 10px rgba(222, 135, 4, 0.7))',
  },
};

const DarkModeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useContext(WidthThemeContext);

  return (
    <StyledDarkModeSwitch onClick={() => setIsDarkMode(!isDarkMode)}>
      <StyledSvg
        variants={svgVariants}
        animate={isDarkMode ? 'sun' : 'moon'}
        transition={{ duration: 0.8, esse: 'easeInOut' }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathVariants}
          transition={{ duration: 0.8, esse: 'easeInOut' }}
        />
      </StyledSvg>
    </StyledDarkModeSwitch>
  );
};

export default DarkModeSwitch;
