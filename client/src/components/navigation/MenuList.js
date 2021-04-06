import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenuList = styled.ul`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  transform: ${({ isActive }) =>
    isActive ? 'translateX(0vw)' : 'translateX(-100vw)'};
  transition: transform ease-in-out 0.25s;
  z-index: ${({ theme }) => theme.zIndex.level1};

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: 60px;
    flex-direction: row;
    position: static;
    background-color: transparent;
  }
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

const MenuList = ({isActive}) => {
  return (
    <StyledMenuList isActive={isActive}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} label={item.label} link={item.link} />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
