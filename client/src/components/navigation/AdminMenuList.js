import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import AdminMenuItem from './AdminMenuItem';

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

const StyledMenuMainView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
  margin-top: 100px;
  margin: 0 auto;
  max-width: 640px;
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
    link: '/admin/projects/edit',
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

const AdminMenuList = ({ setIsActive, mainView }) => {
  return mainView ? (
    <StyledMenuMainView>
      {menuItems.map((item, index) => (
        <AdminMenuItem key={index} label={item.label} link={item.link} />
      ))}
    </StyledMenuMainView>
  ) : (
    <StyledMenuList>
      {menuItems.map((item, index) => (
        <MenuItem
          setIsActive={setIsActive}
          key={index}
          label={item.label}
          link={item.link}
          withShadowAndBackground={false}
        />
      ))}
    </StyledMenuList>
  );
};

export default AdminMenuList;
