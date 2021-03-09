import React from 'react'
import styled from 'styled-components';

const StyledItem = styled.li`
  position: relative;
  list-style-type: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.weightMedium};
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;

  ::before {
    content: '';
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 5px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    transform: rotateY(-90deg);
    transition: transform  ease-out 0.25s;
  }
  :hover::before {
    transform: rotateY(0deg);
  }
`;

const menuItem = ({label, link}) => {
  return (
    <StyledItem>
      {label}
    </StyledItem>
  )
}

export default menuItem
