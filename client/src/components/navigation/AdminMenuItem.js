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
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  padding: 20px 10px;
  border-left: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-bottom: ${({ theme }) => theme.colors.noActive} 1px solid;
  border-radius: 10px;
  background: ${({ theme }) => `linear-gradient(
    39deg,
   ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 75%
  )`};
  background-size: 150%;
  box-shadow: ${({ theme }) => theme.colors.primary} 0px -8px 1px,
    ${({ theme }) => theme.colors.primary} 0px -12px 30px,
    black 0px 0px 10px -4px;
  transition: background 0.4s ease-in-out;

  :hover {
    background-position: right;
  }
`;

const AdminMenuItem = ({ setIsActive, label, link }) => {
  return <StyledItem to={link}>{label}</StyledItem>;
};

export default AdminMenuItem;
