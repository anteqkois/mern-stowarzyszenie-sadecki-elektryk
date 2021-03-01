import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenuList = styled.ul`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
`;

const menuItems = [
  {
    label: 'Strona główna',
    link: 'test',
  },
  {
    label: 'Więcej projektów',
    link: 'test',
  },
  {
    label: 'Jak wspomóć',
    link: 'test',
  },
  {
    label: 'Panel Administratora',
    link: 'test',
  },
];

const MenuList = () => {
  return (
    <StyledMenuList>
      {menuItems.map((item, index) => (
        <MenuItem key={index} label={item.label} link={item.link} />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
