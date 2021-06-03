import React from 'react'
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenuList = styled.ul`
  width: 100%;
  position: fixed;
  top: 80px;
  left: 0vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: transform ease-in-out 0.25s;
  z-index: ${({ theme }) => theme.zIndex.level5};

  ${({ theme }) => theme.media.tablet} {
    align-items: start;
    margin-left: 30px;
  }
`;

const menuItems = [
  {
    label: 'Strona główna',
    link: '/',
  },
  {
    label: 'Wszystkie projekty',
    link: '/admin/projects',
  },
  {
    label: 'Dodaj nowy projekt',
    link: '/admin/projects/add',
  },
  {
    label: 'Edytuj projekt',
    link: '/admin/projects/edit:id',
  },
  {
    label: 'Dodaj nową kategorię',
    link: '/admin/categories/add',
  },
  {
    label: 'Edytuj kategorię',
    link: '/admin/categories/edit:id',
  },
];


const AdminMenuList = () => {
  return (
    <StyledMenuList >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          link={item.link}
          withShadowAndBackground={false}
        />
      ))}
    </StyledMenuList>
  );
}

export default AdminMenuList
