import React from 'react';
import styled from 'styled-components';

const StyledCopyright = styled.div`
  font-size: ${({ theme }) => theme.typography.sizeTiny};
  grid-column: 1 / -1;
  align-self: center;
`;

let currentYear = new Date().getFullYear();
let copyright = `© Copyright ${currentYear}, Antek Kois. All rights reserved`;

const Copyright = () => {
  return <StyledCopyright>{copyright}</StyledCopyright>;
};

export default Copyright;
