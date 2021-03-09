import React from 'react'
import styled from 'styled-components';

const StyledDarkModeSwitch = styled.div`
  display: inline-block;
  width: 60px;
  height: 55px;
  border: 1px black dashed;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

const DarkModeSwitch = () => {
  return <StyledDarkModeSwitch >Dark</StyledDarkModeSwitch>;
};

export default DarkModeSwitch
