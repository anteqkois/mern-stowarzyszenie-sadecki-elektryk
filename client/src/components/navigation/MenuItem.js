import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledItem = styled(Link)`
  text-decoration: none;

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

    background: ${({ withShadowAndBackground, theme }) =>
      withShadowAndBackground ? theme.colors.gradient : theme.colors.primary};
    transform: rotateY(-90deg);
    transition: all ease-out 0.25s;
  }
  :hover::before {
    transform: rotateY(0deg);
  }

  ${({ theme }) => theme.media.tablet} {
    color: ${({ withShadowAndBackground, theme }) =>
      withShadowAndBackground ? theme.colors.accent : theme.colors.primary};
    margin: 0 0.6em;
  }
`;

const menuItem = ({ setIsActive, label, link, withShadowAndBackground }) => {
  return (
    <StyledItem
      onClick={() => setIsActive && setIsActive(false)}
      to={link}
      withShadowAndBackground={withShadowAndBackground}
    >
      {label}
    </StyledItem>
  );
};

export default menuItem;
