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
  color: ${({ theme }) => theme.colors.textOposite};
  background-color: ${({ theme }) => theme.colors.primary};
  transform: ${({ isActive }) =>
    isActive ? 'translateX(0vw)' : 'translateX(-100vw)'};
  transition: transform ease-in-out 0.25s;
  z-index: ${({ theme }) => theme.zIndex.level5};

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
    link: '/',
  },
  {
    label: 'Więcej projektów',
    link: '/projects',
  },
  {
    label: 'Jak wspomóć',
    link: '/aid',
  },
  {
    label: 'Panel Administratora',
    link: '/admin',
  },
];

const MenuList = ({ isActive, setIsActive, withshadowandbackground }) => {
  return (
    <StyledMenuList isActive={isActive}>
      {menuItems.map((item, index) => (
        <MenuItem
          setIsActive={setIsActive}
          key={index}
          label={item.label}
          link={item.link}
          withshadowandbackground={withshadowandbackground}
        />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
