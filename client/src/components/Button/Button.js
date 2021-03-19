import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  //box-sizing: border-box;

  padding: 0.5em 1em;
  position: relative;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.sizeH6};
  font-weight: ${({ theme }) => theme.typography.weightBold};
  color: ${({ theme }) => theme.colors.accent};
  border: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: 5px;
  transition: color ease-in-out 0.25s;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom:0;
    right: 0;
    /* width: 100%;
    height: 100%; */
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transition: transform ease-in-out 0.25s;
    z-index: ${({ theme }) => theme.zIndex.levelMinus1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary};
    transition: color ease-in-out 0.25s;

    ::before {
      transform: scaleX(1.02);
      transition: transform ease-in-out 0.25s;
    }
  }
`;

const Button = ({children, className}) => {
  return (
    <StyledButton className={className}>
      {children}
    </StyledButton>
  )
}

export default Button
