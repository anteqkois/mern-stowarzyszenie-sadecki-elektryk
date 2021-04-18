import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  position: relative;
  list-style-type: none;
  text-align: center;
    color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.weightBold};
  padding: 15px 10px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all ease-out 0.25s;

  ::before {
    content: '';
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 5px;
    left: 0;

    background-color: ${({ withSHadowAndBackground, theme }) =>
      withSHadowAndBackground ? theme.colors.accent : theme.colors.primary};
    transform: rotateY(-90deg);
    transition: all ease-out 0.25s;
  }
  :hover::before {
    transform: rotateY(0deg);
  }

  ${({ theme }) => theme.media.tablet} {
  color: ${({ withSHadowAndBackground, theme }) =>
    withSHadowAndBackground ? theme.colors.accent : theme.colors.primary};
    margin: 0 0.6em;
  }
`;

const menuItem = ({ label, link, withSHadowAndBackground }) => {
  return (
    <StyledItem withSHadowAndBackground={withSHadowAndBackground}>
      {label}
    </StyledItem>
  );
};

export default menuItem;
