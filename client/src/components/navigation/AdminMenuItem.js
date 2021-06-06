import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledItem = styled(Link)`
  height: 100px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  padding: 20px 10px;
  border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-radius: 10px;
  background: rgb(231, 230, 230);
  background: linear-gradient(
    39deg,
    rgba(190, 190, 190, 1) 0%,
    rgba(210, 210, 210, 1) 41%,
    rgba(251, 251, 251, 1) 95%
  );
  background-size: 150%;
  box-shadow: 0 4px 20px 0 rgba(31, 38, 135, 0.3);
  transition: background 0.4s ease-in-out;

  :hover {
    background-position: right;
  }
`;

const AdminMenuItem = ({ setIsActive, label, link }) => {
  return <StyledItem to={link}>{label}</StyledItem>;
};

export default AdminMenuItem;
