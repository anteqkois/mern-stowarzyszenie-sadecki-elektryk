import React from 'react'
import styled from 'styled-components';

const StyledItem = styled.li`
  list-style-type: none;
  font-size: 1rem;
  margin: 10px;
  text-transform: uppercase;

`;

const menuItem = ({label, link}) => {
  return (
    <StyledItem>
      {label};
    </StyledItem>
  )
}

export default menuItem
